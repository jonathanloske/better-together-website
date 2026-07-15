import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const localesDir = path.join(__dirname, "locales");

const cache = new Map();

function loadNamespace(lang, namespace) {
  const cacheKey = `${lang}/${namespace}`;
  if (!cache.has(cacheKey)) {
    const filePath = path.join(localesDir, lang, `${namespace}.json`);
    cache.set(cacheKey, JSON.parse(readFileSync(filePath, "utf-8")));
  }
  return cache.get(cacheKey);
}

/**
 * Create a translation function for a specific language and namespace.
 * Usage: const t = createT("en", "home"); then t("hero.title")
 */
export function createT(lang, namespace) {
  const ns = loadNamespace(lang, namespace);

  return function t(key) {
    const keys = key.split(".");
    let value = ns;

    for (const k of keys) {
      value = value?.[k];
    }

    return value ?? key;
  };
}
