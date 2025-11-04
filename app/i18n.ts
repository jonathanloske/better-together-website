import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import commonDE from "./locales/de/common.json";
import homeDE from "./locales/de/home.json";
import aboutDE from "./locales/de/about.json";
import contactDE from "./locales/de/contact.json";
import imprintDE from "./locales/de/imprint.json";
import commonEN from "./locales/en/common.json";
import homeEN from "./locales/en/home.json";
import aboutEN from "./locales/en/about.json";
import contactEN from "./locales/en/contact.json";
import imprintEN from "./locales/en/imprint.json";

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      de: {
        common: commonDE,
        home: homeDE,
        about: aboutDE,
        contact: contactDE,
        imprint: imprintDE,
      },
      en: {
        common: commonEN,
        home: homeEN,
        about: aboutEN,
        contact: contactEN,
        imprint: imprintEN,
      },
    },
    lng: "de", // Default language
    fallbackLng: "de",
    defaultNS: "common",
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: false, // Important for SSG
    },
  });

export default i18n;
