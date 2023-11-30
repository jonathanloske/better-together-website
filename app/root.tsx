import type { LinksFunction, MetaFunction } from "@remix-run/node";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import Header from "~/components/Header";
import Footer from "~/components/Footer";

import tailwindStylesHref from "~/styles/tailwind.css";
import rootStylesHref from "~/styles/root.css";

export const meta: MetaFunction = () => [
  {
    // max 65 characters
    title: "Better Together DJ für Berlin und Brandenburg",
  },
];

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStylesHref },
  { rel: "stylesheet", href: rootStylesHref },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        {/* For more help on these meta tags, see https://stackoverflow.com/a/43154489 */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        {/* max 155 characters */}
        <meta
          name="description"
          content="Better Together ist euer DJ-Service für Berlin und Brandenburg von Jonathan Loske und Vera Loske"
        />
        {/* max 35 characters */}
        <meta property="og:title" content="Better Together DJ (Berlin + BB)" />
        <meta property="og:url" content="https://better-together-dj.com/" />
        {/* max 65 characters */}
        <meta
          property="og:description"
          content="Better Together ist euer DJ-Service für Berlin und Brandenburg"
        />
        <meta property="og:image" content="/social-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
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
          href="/safari-pinned-tab.svg?v=1"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon.ico?v=1" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <Meta />
        <Links />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,700"
          rel="stylesheet"
        ></link>
      </head>
      <body className="font-family bg-black">
        <Header />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
