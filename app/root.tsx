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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
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
