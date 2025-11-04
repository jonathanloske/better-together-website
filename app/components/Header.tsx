import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation("common");

  return (
    <nav className="bg-white px-5 py-2.5">
      <div className="flex items-center justify-between">
        <a href="/" className="mr4 w-56 sm:w-96">
          <img src="/img/logo/logo-banner.png" alt="Better Together DJ Berlin Logo" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden space-x-6 md:flex">
          <a
            href="/about-us"
            className="text-xl font-bold text-gray-500 no-underline hover:underline"
          >
            {t("nav.aboutUs")}
          </a>
          <a
            href="/contact"
            className="text-xl font-bold text-gray-500 no-underline hover:underline"
          >
            {t("nav.contact")}
          </a>
          <a
            href="/imprint"
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
          <a
            href="/about-us"
            className="block text-xl font-bold text-gray-500 no-underline hover:underline"
          >
            {t("nav.aboutUs")}
          </a>
          <a
            href="/contact"
            className="block text-xl font-bold text-gray-500 no-underline hover:underline"
          >
            {t("nav.contact")}
          </a>
          <a
            href="/imprint"
            className="block text-xl font-bold text-gray-500 no-underline hover:underline"
          >
            {t("nav.imprint")}
          </a>
        </div>
      )}
    </nav>
  );
}
