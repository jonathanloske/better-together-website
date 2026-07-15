import { instagramIcon } from "../icons.mjs";

export function renderFooter({ lang, t }) {
  const langPrefix = lang === "en" ? "/en" : "";

  return `<footer class="px-5 py-8 text-white">
  <div class="mx-auto max-w-3xl text-center">
    <div class="justify-between text-left sm:flex">
      <div>
        <h3 class="text-m mb-2.5 font-bold text-violet-500">Better Together DJ Berlin</h3>
        <ul class="mb-3">
          <li><a href="${langPrefix || "/"}" class="inline-block py-2 hover:underline">${t("footer.home")}</a></li>
          <li><a href="${langPrefix}/about-us" class="inline-block py-2 hover:underline">${t("footer.aboutUs")}</a></li>
          <li><a href="${langPrefix}/contact" class="inline-block py-2 hover:underline">${t("footer.contact")}</a></li>
          <li><a href="${langPrefix}/imprint" class="inline-block py-2 hover:underline">${t("footer.imprint")}</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-m mb-2.5 font-bold text-violet-500">${t("footer.socialMedia")}</h3>
        <ul class="">
          <li class="inline-block">
            <a
              href="https://www.instagram.com/bettertogetherdj/"
              class="link relative block rounded-full bg-white p-3 text-black"
              aria-label="${t("footer.instagramLabel")}"
              target="_blank"
              rel="noopener noreferrer"
            >
              ${instagramIcon("block h-auto max-h-full w-6 max-w-full")}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>`;
}
