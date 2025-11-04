// Build-time translation helper for SSG
// This avoids client-side language switching and eliminates the flash of wrong language

import commonDE from "~/locales/de/common.json";
import homeDE from "~/locales/de/home.json";
import aboutDE from "~/locales/de/about.json";
import contactDE from "~/locales/de/contact.json";
import imprintDE from "~/locales/de/imprint.json";

import commonEN from "~/locales/en/common.json";
import homeEN from "~/locales/en/home.json";
import aboutEN from "~/locales/en/about.json";
import contactEN from "~/locales/en/contact.json";
import imprintEN from "~/locales/en/imprint.json";

type Language = "de" | "en";
type Namespace = "common" | "home" | "about" | "contact" | "imprint";

const translations = {
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
};

/**
 * Get translations for a specific language and namespace.
 * This is resolved at build time for SSG, ensuring no client-side language switching.
 */
export function getTranslations(lang: Language, namespace: Namespace) {
  return translations[lang][namespace];
}

/**
 * Create a translation function for a specific language and namespace.
 * Usage: const t = createT("en", "home"); then t("hero.title")
 */
export function createT(lang: Language, namespace: Namespace) {
  const ns = getTranslations(lang, namespace);

  return function t(key: string): string {
    const keys = key.split(".");
    let value: any = ns;

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };
}
