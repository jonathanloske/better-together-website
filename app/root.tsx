import type { MetaFunction } from "react-router";

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import Header from "~/components/Header";
import Footer from "~/components/Footer";

// Self-hosted fonts for better performance
import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/700.css";

import "~/styles/tailwind.css";
import "~/styles/root.css";

// Initialize i18n
import "~/i18n";
import i18n from "~/i18n";

export const meta: MetaFunction = () => [
  {
    // max 65 characters
    title: i18n.t("seo.title", { ns: "common" }),
  },
];

export default function App() {
  const currentLang = i18n.language || "de";

  return (
    <html lang={currentLang}>
      <head>
        <meta charSet="utf-8" />
        {/* For more help on these meta tags, see https://stackoverflow.com/a/43154489 */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        {/* Resource hints for external domains */}
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        {/* max 155 characters */}
        <meta
          name="description"
          content={i18n.t("seo.description", { ns: "common" })}
        />
        {/* max 35 characters */}
        <meta property="og:title" content={i18n.t("seo.ogTitle", { ns: "common" })} />
        <meta property="og:url" content="https://better-together-dj.com/" />
        {/* max 65 characters */}
        <meta
          property="og:description"
          content={i18n.t("seo.ogDescription", { ns: "common" })}
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
