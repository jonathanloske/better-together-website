import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { getInitialNamespaces } from "remix-i18next/client";
import i18nextOptions from "./i18nextOptions";
import { translations } from "./i18n/translations";

async function hydrate() {
  await i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      ...i18nextOptions,
      ns: getInitialNamespaces(),
      resources: translations, // Use bundled translations - no HTTP requests!
      detection: {
        order: ["htmlTag"],
        caches: [],
      },
    });

  startTransition(() => {
    hydrateRoot(
      document,
      <I18nextProvider i18n={i18next}>
        <StrictMode>
          <RemixBrowser />
        </StrictMode>
      </I18nextProvider>
    );
  });
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  window.setTimeout(hydrate, 1);
}
