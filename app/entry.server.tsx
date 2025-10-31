import { PassThrough } from "node:stream";
import type { AppLoadContext, EntryContext } from "@remix-run/node";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createInstance } from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { i18n } from "./i18n.server";
import i18nextOptions from "./i18nextOptions";

const ABORT_DELAY = 5_000;

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  loadContext: AppLoadContext
) {
  const callbackName = isbot(request.headers.get("user-agent"))
    ? "onAllReady"
    : "onShellReady";

  const instance = createInstance();
  const lng = await i18n.getLocale(request);
  const ns = i18n.getRouteNamespaces(remixContext);

  // Load translations synchronously for SSR
  const resources: Record<string, Record<string, any>> = {};
  for (const language of i18nextOptions.supportedLngs) {
    resources[language] = {};
    for (const namespace of ns) {
      const translationPath = resolve(
        process.cwd(),
        `public/locales/${language}/${namespace}.json`
      );
      try {
        resources[language][namespace] = JSON.parse(
          readFileSync(translationPath, "utf-8")
        );
      } catch (error) {
        console.error(`Failed to load translation file: ${translationPath}`, error);
      }
    }
  }

  await instance.use(initReactI18next).init({
    ...i18nextOptions,
    lng,
    ns,
    resources,
  });

  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      <I18nextProvider i18n={instance}>
        <RemixServer
          context={remixContext}
          url={request.url}
          abortDelay={ABORT_DELAY}
        />
      </I18nextProvider>,
      {
        [callbackName]: () => {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);

          responseHeaders.set("Content-Type", "text/html");

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            })
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        },
      }
    );

    setTimeout(abort, ABORT_DELAY);
  });
}
