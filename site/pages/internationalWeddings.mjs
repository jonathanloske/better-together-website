import { responsiveImage } from "../image.mjs";

function photoCredit({ t, name, profileUrl }) {
  return `<p class="mt-2 text-xs text-white/70">
    ${t("credits.photoBy")}
    <a href="${profileUrl}" class="underline hover:text-white" target="_blank" rel="noopener noreferrer">${name}</a>
    ${t("credits.onUnsplash")}
  </p>`;
}

export function renderInternationalWeddings({ lang, t }) {
  const langPrefix = lang === "en" ? "/en" : "";

  return `<main class="leading-6 text-white">
  <div class="mx-auto max-w-3xl">
    <div class="px-5 py-8">
      <div class="mb-6 text-center">
        <h4 class="text-4xl font-bold">${t("title")}</h4>
      </div>

      <div class="mb-4 max-w-2xl px-6 lg:mx-auto">
        <p class="mb-4">${t("intro.paragraph1")}</p>
        <p class="mb-4">${t("intro.paragraph2")}</p>
      </div>

      <div class="mb-6 grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:mx-auto lg:max-w-2xl">
        <div>
          ${responsiveImage({
            name: "international-weddings-dancefloor-1",
            alt: t("images.photo1Alt"),
            className: "w-full rounded-md",
          })}
          ${photoCredit({
            t,
            name: "Ardian Lumi",
            profileUrl: "https://unsplash.com/de/@ardianlumi",
          })}
        </div>
        <div>
          ${responsiveImage({
            name: "international-weddings-dancefloor-2",
            alt: t("images.photo2Alt"),
            className: "w-full rounded-md",
          })}
          ${photoCredit({
            t,
            name: "Hulki Okan Tabak",
            profileUrl: "https://unsplash.com/de/@hulkiokantabak",
          })}
        </div>
      </div>

      <div class="mb-4 max-w-2xl px-6 lg:mx-auto">
        <p class="mb-4">${t("intro.paragraph3")}</p>
        <p>${t("intro.paragraph4")}</p>
      </div>

      <div class="mt-4 text-center lg:w-full">
        <a href="${langPrefix}/contact" class="mx-auto block w-fit rounded-md border-2 border-violet-700 bg-white px-2 py-2 text-2xl text-violet-700">
          ${t("cta.convinced")}
        </a>
      </div>
    </div>
  </div>
</main>`;
}
