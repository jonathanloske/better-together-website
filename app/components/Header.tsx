import { useState } from "react";
import { useLocation } from "react-router";
import { createT } from "~/lib/translations";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isEnglish = location.pathname.startsWith("/en");
  const langPrefix = isEnglish ? "/en" : "";
  const t = createT(isEnglish ? "en" : "de", "common");

  return (
    <nav className="bg-white px-5 py-2.5">
      <div className="flex items-center justify-between">
        <a href={langPrefix || "/"} className="mr4 w-56 sm:w-96">
          <img src="/img/logo/logo-banner.png" alt="Better Together DJ Berlin Logo" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden space-x-6 md:flex md:items-center">
          <LanguageSwitcher />
          <a
            href={`${langPrefix}/about-us`}
            className="text-xl font-bold text-gray-500 no-underline hover:underline"
          >
            {t("nav.aboutUs")}
          </a>
          <a
            href={`${langPrefix}/contact`}
            className="text-xl font-bold text-gray-500 no-underline hover:underline"
          >
            {t("nav.contact")}
          </a>
          <a
            href={`${langPrefix}/imprint`}
            className="text-xl font-bold text-gray-500 no-underline hover:underline"
          >
            {t("nav.imprint")}
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? t("nav.menuClose") : t("nav.menuOpen")}
          aria-expanded={isMenuOpen}
        >
          <svg
            className="h-6 w-6 text-gray-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="mt-4 space-y-2 md:hidden">
          <div className="pb-2">
            <LanguageSwitcher />
          </div>
          <a
            href={`${langPrefix}/about-us`}
            className="block text-xl font-bold text-gray-500 no-underline hover:underline"
          >
            {t("nav.aboutUs")}
          </a>
          <a
            href={`${langPrefix}/contact`}
            className="block text-xl font-bold text-gray-500 no-underline hover:underline"
          >
            {t("nav.contact")}
          </a>
          <a
            href={`${langPrefix}/imprint`}
            className="block text-xl font-bold text-gray-500 no-underline hover:underline"
          >
            {t("nav.imprint")}
          </a>
        </div>
      )}
    </nav>
  );
}
