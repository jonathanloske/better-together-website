import { useLocation } from "react-router";

export default function LanguageSwitcher() {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith("/en");

  // Get the alternate URL
  const alternatePath = isEnglish
    ? location.pathname.replace(/^\/en/, "") || "/"
    : `/en${location.pathname}`;

  // Mark that user has manually chosen a language
  const handleLanguageClick = () => {
    sessionStorage.setItem("languageChosen", "true");
  };

  return (
    <div className="flex gap-2 items-center">
      <a
        href={isEnglish ? alternatePath : location.pathname}
        onClick={handleLanguageClick}
        className={`px-2 py-1 text-sm font-bold rounded ${
          !isEnglish
            ? "bg-violet-700 text-white"
            : "text-gray-500 hover:underline"
        }`}
      >
        DE
      </a>
      <span className="text-gray-400">|</span>
      <a
        href={isEnglish ? location.pathname : alternatePath}
        onClick={handleLanguageClick}
        className={`px-2 py-1 text-sm font-bold rounded ${
          isEnglish
            ? "bg-violet-700 text-white"
            : "text-gray-500 hover:underline"
        }`}
      >
        EN
      </a>
    </div>
  );
}
