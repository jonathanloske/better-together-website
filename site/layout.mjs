import { createT } from "./i18n.mjs";
import { renderHeader } from "./partials/header.mjs";
import { renderFooter } from "./partials/footer.mjs";

const BASE_URL = "https://better-together-dj.com";

/**
 * currentPath is the canonical (German) path, e.g. "/", "/about-us", "/contact", "/imprint".
 * No route currently overrides the site-wide title/description, so, matching the previous
 * root.tsx behavior, every page shares the same per-language SEO meta from common.json.
 */
export function renderPage({ lang, currentPath, bodyHtml, pageScripts = [] }) {
  const t = createT(lang, "common");
  const isEnglish = lang === "en";
  const ogUrl = `${BASE_URL}${isEnglish ? "/en" : ""}${currentPath}`;

  const scriptTags = pageScripts
    .map((src) => `<script type="module" src="${src}"></script>`)
    .join("\n    ");

  return `<!doctype html>
<html lang="${lang}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

    <link rel="alternate" hreflang="de" href="${BASE_URL}${currentPath}" />
    <link rel="alternate" hreflang="en" href="${BASE_URL}/en${currentPath}" />
    <link rel="alternate" hreflang="x-default" href="${BASE_URL}${currentPath}" />

    <link rel="preconnect" href="https://www.youtube.com" />
    <link rel="dns-prefetch" href="https://www.youtube.com" />

    <title>${t("seo.title")}</title>
    <meta name="description" content="${t("seo.description")}" />
    <meta property="og:title" content="${t("seo.ogTitle")}" />
    <meta property="og:url" content="${ogUrl}" />
    <meta property="og:description" content="${t("seo.ogDescription")}" />
    <meta property="og:image" content="/social-image.png" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="${isEnglish ? "en_US" : "de_DE"}" />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=1" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=1" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=1" />
    <link rel="manifest" href="/site.webmanifest?v=1" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg?v=2" color="#ffffff" />
    <link rel="shortcut icon" href="/favicon.ico?v=1" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />

    <link rel="stylesheet" href="/assets/fonts.css" />
    <link rel="stylesheet" href="/assets/tailwind.css" />
    <link rel="stylesheet" href="/assets/root.css" />
  </head>
  <body class="font-family bg-black">
    ${renderHeader({ lang, currentPath, t })}
    ${bodyHtml}
    ${renderFooter({ lang, t })}
    ${scriptTags}
  </body>
</html>
`;
}
