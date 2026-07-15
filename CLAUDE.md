# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

German DJ service website for "Better Together" (Berlin and Brandenburg) by Jonathan Loske and Vera Loske. Built as a plain static site (no frontend framework) and deployed on Netlify.

The site was previously built with React Router v7/v8 + Vite; it was rewritten to a hand-rolled static-HTML build to cut the dependency/security-alert surface down to near zero, since the site is fundamentally 4 pages in 2 languages with one contact form.

## Common Commands

### Development
```bash
npm install              # Install dependencies (tailwindcss, @fontsource/nunito-sans, prettier)
npm run dev              # Build once and serve build/client at localhost:3000 (no live-reload)
netlify dev               # Build + serve with Netlify Forms and Image CDN emulation (localhost:8888)
```

### Building and Deployment
```bash
npm run build            # Run build.mjs: render all pages, compile Tailwind, copy assets
npm run start            # Serve build/client in a production-like environment via `netlify serve` (localhost:8888)
```

### Netlify Deployment
```bash
netlify deploy --build          # Preview deployment
netlify deploy --build --prod   # Production deployment
```

## Architecture

### Tech Stack
- **Build**: `build.mjs` — a plain Node script, no bundler/framework
- **Templating**: JS template-literal functions in `site/` (no JSX, no client-side hydration)
- **Styling**: Tailwind CSS, compiled via the `tailwindcss` CLI directly (its built-in vendor prefixing means no separate PostCSS/Autoprefixer packages are needed)
- **Fonts**: Self-hosted Nunito Sans — `@fontsource/nunito-sans` is used only as a source of static font files at build time (see `site/fonts.mjs`), not as a runtime/bundler dependency
- **Interactivity**: small vanilla JS files in `public/js/`, no client-side framework
- **Images**: Netlify Image CDN (on-request WebP transforms), no build-time image processing
- **Internationalization**: a ~20-line custom loader (`site/i18n.mjs`) reading JSON locale files, no i18next
- **Deployment**: Netlify, static files only (`ssr: false` equivalent — there never was a server)

### Build Process (`build.mjs`)
Running `npm run build` does, in order:
1. Cleans `build/client/`
2. Copies `public/*` (static assets: images, favicons, `robots.txt`, `sitemap.xml`, `contact-helper.html`, `js/`) into `build/client/`
3. Copies `site/styles/root.css` into `build/client/assets/`
4. Runs `tailwindcss` CLI to compile `site/styles/tailwind.css` → `build/client/assets/tailwind.css` (content globs scan `site/**/*.mjs` for class names)
5. Copies the Latin + Latin-ext Nunito Sans font files from `node_modules/@fontsource/nunito-sans` into `build/client/fonts/` and generates `build/client/assets/fonts.css` (see `site/fonts.mjs`)
6. Renders all 8 routes (4 pages × 2 languages) to static HTML and writes them to `build/client/` (e.g. `build/client/about-us/index.html`, `build/client/en/about-us/index.html`)

Output routes: `/`, `/about-us`, `/contact`, `/imprint`, `/en`, `/en/about-us`, `/en/contact`, `/en/imprint` — matching `public/sitemap.xml`.

### Page Templates (`site/`)
- `site/layout.mjs`: renders the full `<html>` document — meta tags, hreflang alternates, OpenGraph tags, favicon links, stylesheet links — matching what `root.tsx` used to produce. No route currently overrides the site-wide title/description; all pages share the same per-language SEO meta from `common.json`.
- `site/pages/{home,about,contact,imprint}.mjs`: one render function per page, taking `{ lang, t }` and returning the page's body HTML
- `site/partials/{header,footer,languageSwitcher,liteYoutube}.mjs`: shared markup fragments
- `site/i18n.mjs`: `createT(lang, namespace)` reads `site/locales/{lang}/{namespace}.json` and returns a `t(key)` lookup function (dotted-path keys, same shape as before)
- `site/image.mjs`: generates `<img>`/`srcset` markup pointing at Netlify's Image CDN endpoint (`/.netlify/images?url=/img/NAME.jpg&w=WIDTH&fm=webp`) instead of pre-generated `smol/mid/big` WebP files

### Client-side JS (`public/js/`)
Loaded via `<script type="module">` tags per page (see the `scripts` array per page in `build.mjs`):
- `main.js` (every page): mobile hamburger menu toggle, language-switcher click tracking (`sessionStorage`), browser-language auto-redirect on the German homepage, and a click-to-load facade for the homepage YouTube embed (replacing the `@justinribeiro/lite-youtube` web component dependency)
- `contact.js` (contact page only): submits the contact form via `fetch` to avoid a full page reload, then reveals a success modal
- `imprint.js` (imprint page only): the obfuscated phone/email reveal-on-click logic (anti-scraping), ported unchanged from the previous React implementation

### Contact Form
Still Netlify Forms (`data-netlify="true"`, no backend). `public/contact-helper.html` is the static fallback page Netlify's build-time bot scans to register the form (also used as the JS-fetch target and the no-JS `action` fallback).

### Internationalization (i18n)
- **Locale files**: `site/locales/{lang}/{namespace}.json` — `common`, `home`, `about`, `contact`, `imprint`
- **Current languages**: German (`de`, default), English (`en`)
- **Adding new languages**: add a new `site/locales/{lang}/` directory with the same five JSON files, then add the language to the `for (const lang of [...])` loop in `build.mjs`

### Node Version
Requires Node.js >= 20.0.0 (specified in `package.json` engines and `.nvmrc`).
