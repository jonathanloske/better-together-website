function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const iconPath = document.getElementById("menu-icon-path");
  if (!toggle || !menu || !iconPath) return;

  const OPEN_PATH = "M4 6h16M4 12h16M4 18h16";
  const CLOSE_PATH = "M6 18L18 6M6 6l12 12";

  toggle.addEventListener("click", () => {
    const willOpen = menu.classList.contains("hidden");
    menu.classList.toggle("hidden");
    toggle.setAttribute("aria-expanded", String(willOpen));
    toggle.setAttribute(
      "aria-label",
      willOpen ? toggle.dataset.labelClose : toggle.dataset.labelOpen,
    );
    iconPath.setAttribute("d", willOpen ? CLOSE_PATH : OPEN_PATH);
  });
}

function initLanguageSwitcherLinks() {
  document.querySelectorAll(".js-lang-link").forEach((link) => {
    link.addEventListener("click", () => {
      sessionStorage.setItem("languageChosen", "true");
    });
  });
}

function initBrowserLanguageRedirect() {
  const hasChosenLanguage = sessionStorage.getItem("languageChosen");
  if (hasChosenLanguage) return;

  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("en")) {
    sessionStorage.setItem("languageChosen", "true");
    window.location.replace("/en");
  }
}

function initLiteYoutube() {
  document.querySelectorAll(".lite-youtube").forEach((placeholder) => {
    const load = () => {
      const videoId = placeholder.dataset.videoId;
      const title = placeholder.dataset.videoTitle || "YouTube video player";
      placeholder.innerHTML = `<iframe
        width="100%"
        height="100%"
        style="position: absolute; inset: 0;"
        src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1"
        title="${title}"
        frameborder="0"
        allow="accelerate-compute; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>`;
    };

    placeholder.addEventListener("click", load, { once: true });
    placeholder.addEventListener(
      "keydown",
      (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          load();
        }
      },
      { once: true },
    );
  });
}

initMobileMenu();
initLanguageSwitcherLinks();
initLiteYoutube();

// Only the German homepage redirects English-speaking visitors to /en
if (window.location.pathname === "/") {
  initBrowserLanguageRedirect();
}
