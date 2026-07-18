import { createT } from "./i18n.mjs";
import { renderHeader } from "./partials/header.mjs";
import { renderFooter } from "./partials/footer.mjs";

const BASE_URL = "https://better-together-dj.com";

/**
 * currentPath is the canonical (German) path, e.g. "/", "/about-us", "/contact", "/imprint".
 * Most routes share the site-wide title/description from common.json (matching the previous
 * root.tsx behavior), but a route can pass `seo` to override title/description/ogTitle/ogDescription
 * with its own page-specific copy.
 */
export function renderPage({ lang, currentPath, bodyHtml, pageScripts = [], seo }) {
  const t = createT(lang, "common");
  const isEnglish = lang === "en";
  const ogUrl = `${BASE_URL}${isEnglish ? "/en" : ""}${currentPath}`;

  const pageTitle = seo?.title ?? t("seo.title");
  const pageDescription = seo?.description ?? t("seo.description");
  const pageOgTitle = seo?.ogTitle ?? t("seo.ogTitle");
  const pageOgDescription = seo?.ogDescription ?? t("seo.ogDescription");

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

    <title>${pageTitle}</title>
    <meta name="description" content="${pageDescription}" />
    <meta property="og:title" content="${pageOgTitle}" />
    <meta property="og:url" content="${ogUrl}" />
    <meta property="og:description" content="${pageOgDescription}" />
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
