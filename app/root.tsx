import type { MetaFunction } from "react-router";

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import Header from "~/components/Header";
import Footer from "~/components/Footer";

// Self-hosted fonts for better performance
import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/700.css";

import "~/styles/tailwind.css";
import "~/styles/root.css";

import { createT } from "~/lib/translations";

export const meta: MetaFunction = () => [
  {
    // max 65 characters
    // Note: This is a fallback title, each route should define its own meta
    title: "Better Together DJ für Berlin und Brandenburg",
  },
];

export default function App() {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith("/en");
  const currentLang = isEnglish ? "en" : "de";
  const t = createT(currentLang, "common");
  const baseUrl = "https://better-together-dj.com";

  // Get the current path without the /en prefix for hreflang
  const currentPath = isEnglish
    ? location.pathname.replace(/^\/en/, "") || "/"
    : location.pathname;

  return (
    <html lang={currentLang}>
      <head>
        <meta charSet="utf-8" />
        {/* For more help on these meta tags, see https://stackoverflow.com/a/43154489 */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        {/* Hreflang tags for SEO */}
        <link
          rel="alternate"
          hrefLang="de"
          href={`${baseUrl}${currentPath}`}
        />
        <link
          rel="alternate"
          hrefLang="en"
          href={`${baseUrl}/en${currentPath}`}
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${baseUrl}${currentPath}`}
        />
        {/* Resource hints for external domains */}
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        {/* max 155 characters */}
        <meta
          name="description"
          content={t("seo.description")}
        />
        {/* max 35 characters */}
        <meta property="og:title" content={t("seo.ogTitle")} />
        <meta property="og:url" content={`${baseUrl}${isEnglish ? "/en" : ""}${location.pathname.replace(/^\/en/, "")}`} />
        {/* max 65 characters */}
        <meta
          property="og:description"
          content={t("seo.ogDescription")}
        />
        {/* Image that will be shown on WhatsApp when sharing a link */}
        <meta property="og:image" content="/social-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={currentLang === "de" ? "de_DE" : "en_US"} />
        {/* Favicons generated with the help of https://realfavicongenerator.net */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=1"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=1"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=1"
        />
        <link rel="manifest" href="/site.webmanifest?v=1" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg?v=2"
          color="#ffffff"
        />
        <link rel="shortcut icon" href="/favicon.ico?v=1" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <Meta />
        <Links />
      </head>
      <body className="font-family bg-black">
        <Header />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
