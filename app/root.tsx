import type { LinksFunction, MetaFunction } from "@remix-run/node";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

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
        <nav className="overflow-x-scroll overflow-x-visible-ns flex justify-between items-center center bg-white divider-grey relative">
          <a href="/" className="pv2 pl3 db mr4 w5-ns w4 flex-none">
            <img src="/logo-banner.png" />
          </a>

          <ul className="flex b grey-3">
            <li>
              <a href="/contact" className="pa3 no-underline db">
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
        <Outlet />
        <footer className="bg-black ph3 pv4 white">
          <div className="mw7 center pt3">
            <div className="flex-ns justify-between">
              <div>
                <h3 className="f4 b lh-title mb1 primary">
                  Better Together DJ Berlin
                </h3>
                <ul className="mb3">
                  <li>
                    <a href="/" className="link">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about-us" className="link">
                      Über uns
                    </a>
                  </li>

                  <li>
                    <a href="/contact" className="link">
                      Kontakt
                    </a>
                    <a href="/contact-helper" className="link">
                      Kontakt Helper
                    </a>
                  </li>
                  <li>
                    <a href="/imprint" className="link">
                      Impressum
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="f4 b lh-title mb2 primary">Social media</h3>
                <ul className="mhn2">
                  <li className="dib ph2 raise">
                    <a
                      href="https://www.instagram.com/bettertogetherdj/"
                      className="link bg-white black db relative br-100 pa2"
                    >
                      <svg width="16px" height="16px" className="db">
                        <use xlinkHref="#icons-instagram"></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
