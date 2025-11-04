# Multi-Language Support

This directory contains translation files for the Better Together website's internationalization (i18n) system.

## Current Languages

- **German (de)**: Default language - fully implemented

## Structure

```
locales/
├── de/
│   ├── common.json    # Navigation, SEO, and shared content
│   └── home.json      # Home page content
└── README.md
```

## Adding a New Language

To add support for a new language (e.g., English):

1. **Create language directory:**
   ```bash
   mkdir app/locales/en
   ```

2. **Create translation files:**
   Copy the German files as templates:
   ```bash
   cp app/locales/de/common.json app/locales/en/common.json
   cp app/locales/de/home.json app/locales/en/home.json
   ```

3. **Translate content:**
   Edit the new JSON files and translate all values (keep keys unchanged).

4. **Register in i18n config:**
   Update `app/i18n.ts`:
   ```typescript
   import commonEN from "./locales/en/common.json";
   import homeEN from "./locales/en/home.json";

   i18n.init({
     resources: {
       de: { common: commonDE, home: homeDE },
       en: { common: commonEN, home: homeEN }, // Add this
     },
     // ...
   });
   ```

5. **Add language switcher (optional):**
   Create a language switcher component using:
   ```typescript
   const { i18n } = useTranslation();
   i18n.changeLanguage('en');
   ```

## Translation Files

### common.json
Contains shared translations used across all pages:
- Navigation links
- SEO metadata (title, description)
- Common UI elements

### home.json
Contains all text content specific to the home page:
- Hero section
- "Why Us" section
- "What We Offer" section
- Testimonials
- Call-to-action buttons

## Adding New Routes

When creating new pages, follow this pattern:

1. Create a new translation file: `app/locales/de/page-name.json`
2. Add translations for that page
3. Register in `app/i18n.ts`
4. Use in component:
   ```tsx
   import { useTranslation } from "react-i18next";

   export default function MyPage() {
     const { t } = useTranslation("page-name");
     return <h1>{t("title")}</h1>;
   }
   ```

## Important Notes

- The default language is German (`de`)
- All translation keys should remain in English for consistency
- Keep the JSON structure consistent across all language files
- Test the build after adding translations: `npm run build`
