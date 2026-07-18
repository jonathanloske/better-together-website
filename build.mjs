import { execSync } from "node:child_process";
import {
  cpSync,
  mkdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { createT } from "./site/i18n.mjs";
import { renderPage } from "./site/layout.mjs";
import { renderHome } from "./site/pages/home.mjs";
import { renderAbout } from "./site/pages/about.mjs";
import { renderContact } from "./site/pages/contact.mjs";
import { renderImprint } from "./site/pages/imprint.mjs";
import { renderInternationalWeddings } from "./site/pages/internationalWeddings.mjs";
import { buildFonts } from "./site/fonts.mjs";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const buildDir = path.join(rootDir, "build", "client");

const PAGES = [
  { slug: "", namespace: "home", render: renderHome, scripts: ["/js/main.js"] },
  {
    slug: "about-us",
    namespace: "about",
    render: renderAbout,
    scripts: ["/js/main.js"],
  },
  {
    slug: "international-weddings",
    namespace: "internationalWeddings",
    render: renderInternationalWeddings,
    scripts: ["/js/main.js"],
    hasCustomSeo: true,
  },
  {
    slug: "contact",
    namespace: "contact",
    render: renderContact,
    scripts: ["/js/main.js", "/js/contact.js"],
  },
  {
    slug: "imprint",
    namespace: "imprint",
    render: renderImprint,
    scripts: ["/js/main.js", "/js/imprint.js"],
  },
];

function cleanBuildDir() {
  rmSync(buildDir, { recursive: true, force: true });
  mkdirSync(path.join(buildDir, "assets"), { recursive: true });
}

function copyPublicAssets() {
  cpSync(path.join(rootDir, "public"), buildDir, {
    recursive: true,
    filter: (source) => !source.endsWith(".DS_Store"),
  });
}

function buildTailwind() {
  execSync(
    "npx tailwindcss -i ./site/styles/tailwind.css -o ./build/client/assets/tailwind.css --minify",
    { cwd: rootDir, stdio: "inherit" },
  );
}

function copyRootStyles() {
  cpSync(
    path.join(rootDir, "site", "styles", "root.css"),
    path.join(buildDir, "assets", "root.css"),
  );
}

function writePage({ lang, currentPath, outPath, bodyHtml, scripts, seo }) {
  const html = renderPage({
    lang,
    currentPath,
    bodyHtml,
    pageScripts: scripts,
    seo,
  });
  mkdirSync(path.dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
}

function renderAllPages() {
  for (const lang of ["de", "en"]) {
    const langDir = lang === "de" ? buildDir : path.join(buildDir, "en");

    for (const page of PAGES) {
      const t = createT(lang, page.namespace);
      const bodyHtml = page.render({ lang, t });
      const currentPath = page.slug === "" ? "/" : `/${page.slug}`;
      const outPath =
        page.slug === ""
          ? path.join(langDir, "index.html")
          : path.join(langDir, page.slug, "index.html");
      const seo = page.hasCustomSeo
        ? {
            title: t("seo.title"),
            description: t("seo.description"),
            ogTitle: t("seo.ogTitle"),
            ogDescription: t("seo.ogDescription"),
          }
        : undefined;

      writePage({
        lang,
        currentPath,
        outPath,
        bodyHtml,
        scripts: page.scripts,
        seo,
      });
    }
  }
}

function build() {
  cleanBuildDir();
  copyPublicAssets();
  copyRootStyles();
  buildTailwind();
  buildFonts({ rootDir, buildDir });
  renderAllPages();
  console.log(`Built site to ${path.relative(rootDir, buildDir)}/`);
}

build();
