import { RemixI18Next } from 'remix-i18next/server';
import i18nextOptions from './i18nextOptions';

// No backend needed - we use bundled translations!
export const i18n = new RemixI18Next({
  detection: {
    supportedLanguages: i18nextOptions.supportedLngs,
    fallbackLanguage: i18nextOptions.fallbackLng,
  },
  i18next: {
    ...i18nextOptions,
  },
});
