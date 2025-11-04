import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import commonDE from "./locales/de/common.json";
import homeDE from "./locales/de/home.json";

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      de: {
        common: commonDE,
        home: homeDE,
      },
      // Additional languages can be added here in the future
      // en: { common: commonEN, home: homeEN },
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
