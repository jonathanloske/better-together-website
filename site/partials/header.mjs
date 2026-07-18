import { renderLanguageSwitcher } from "./languageSwitcher.mjs";

export function renderHeader({ lang, currentPath, t }) {
  const langPrefix = lang === "en" ? "/en" : "";
  const langSwitcher = renderLanguageSwitcher({ lang, currentPath });
  const navLinkClasses =
    "text-xl font-bold text-gray-500 no-underline hover:underline";
  const mobileNavLinkClasses =
    "block text-xl font-bold text-gray-500 no-underline hover:underline";

  return `<nav class="bg-white px-5 py-2.5">
  <div class="flex items-center justify-between">
    <a href="${langPrefix || "/"}" class="mr4 w-56 sm:w-96">
      <img src="/img/logo/logo-banner.png" alt="Better Together DJ Berlin Logo">
    </a>

    <div class="hidden space-x-6 md:flex md:items-center">
      ${langSwitcher}
      <a href="${langPrefix}/about-us" class="${navLinkClasses}">${t("nav.aboutUs")}</a>
      <a href="${langPrefix}/international-weddings" class="${navLinkClasses}">${t("nav.internationalWeddings")}</a>
      <a href="${langPrefix}/contact" class="${navLinkClasses}">${t("nav.contact")}</a>
      <a href="${langPrefix}/imprint" class="${navLinkClasses}">${t("nav.imprint")}</a>
    </div>

    <button
      id="menu-toggle"
      class="block md:hidden"
      aria-label="${t("nav.menuOpen")}"
      aria-expanded="false"
      data-label-open="${t("nav.menuOpen")}"
      data-label-close="${t("nav.menuClose")}"
    >
      <svg class="h-6 w-6 text-gray-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
        <path id="menu-icon-path" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>

  <div id="mobile-menu" class="mt-4 space-y-2 md:hidden hidden">
    <div class="pb-2">
      ${langSwitcher}
    </div>
    <a href="${langPrefix}/about-us" class="${mobileNavLinkClasses}">${t("nav.aboutUs")}</a>
    <a href="${langPrefix}/international-weddings" class="${mobileNavLinkClasses}">${t("nav.internationalWeddings")}</a>
    <a href="${langPrefix}/contact" class="${mobileNavLinkClasses}">${t("nav.contact")}</a>
    <a href="${langPrefix}/imprint" class="${mobileNavLinkClasses}">${t("nav.imprint")}</a>
  </div>
</nav>`;
}
