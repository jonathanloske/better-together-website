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
import headerStylesHref from "~/styles/header.css";
import footerStylesHref from "~/styles/footer.css";

export const meta: MetaFunction = () => [
  {
    charset: "utf-8",
    title: "New Remix App",
    viewport: "width=device-width,initial-scale=1",
  },
];

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStylesHref },
  { rel: "stylesheet", href: headerStylesHref },
  { rel: "stylesheet", href: footerStylesHref },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
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
