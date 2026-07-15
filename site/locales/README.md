# Multi-Language Support

This directory contains translation files for the site's plain-JSON i18n system (`site/i18n.mjs`).

## Current Languages

- **German (de)**: default language
- **English (en)**: served under `/en/*`

## Structure

```
site/locales/
├── de/
│   ├── common.json    # Navigation, footer, SEO meta (shared across all pages)
│   ├── home.json
│   ├── about.json
│   ├── contact.json
│   └── imprint.json
├── en/
│   └── ... (same five files)
└── README.md
```

## Adding a New Language

1. **Create the language directory and copy the German files as templates:**
   ```bash
   mkdir site/locales/fr
   cp site/locales/de/*.json site/locales/fr/
   ```

2. **Translate content:** edit the new JSON files, keeping keys unchanged.

3. **Register the language in `build.mjs`:** add it to the `for (const lang of ["de", "en"])` loop, and add hreflang/URL handling analogous to the existing `en` prefix if the new language should live under its own path (e.g. `/fr/*`).

## Translation Files

Each page has its own namespace file read via `createT(lang, namespace)` in `site/i18n.mjs`:
- `common.json` — nav links, footer, SEO meta (title/description/OG tags), shared across every page
- `home.json`, `about.json`, `contact.json`, `imprint.json` — content for the matching page in `site/pages/`

## Adding a New Page

1. Create `site/locales/de/page-name.json` and `site/locales/en/page-name.json`
2. Create `site/pages/page-name.mjs` exporting a `render({ lang, t })` function
3. Add an entry to the `PAGES` array in `build.mjs` with the namespace, render function, and required scripts
4. Add the new route to `public/sitemap.xml`

## Important Notes

- The default language is German (`de`)
- Translation keys should stay in English for consistency
- Keep the JSON structure consistent across all language files
- Test after adding translations: `npm run build`
