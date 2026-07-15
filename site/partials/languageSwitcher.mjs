export function renderLanguageSwitcher({ lang, currentPath }) {
  const isEnglish = lang === "en";
  const deHref = currentPath;
  const enHref = `/en${currentPath}`;

  const activeClasses = "bg-violet-700 text-white";
  const inactiveClasses = "text-gray-500 hover:underline";

  return `<div class="flex gap-2 items-center">
  <a href="${deHref}" class="js-lang-link px-2 py-1 text-sm font-bold rounded ${isEnglish ? inactiveClasses : activeClasses}">DE</a>
  <span class="text-gray-400">|</span>
  <a href="${enHref}" class="js-lang-link px-2 py-1 text-sm font-bold rounded ${isEnglish ? activeClasses : inactiveClasses}">EN</a>
</div>`;
}
