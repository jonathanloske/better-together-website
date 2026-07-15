import { responsiveImage } from "../image.mjs";

export function renderAbout({ lang, t }) {
  const langPrefix = lang === "en" ? "/en" : "";

  return `<main class="leading-6 text-white">
  <div class="mx-auto max-w-5xl">
    <div class="px-5 py-8">
      <div class="mb-4 text-center">
        <h4 class="text-4xl font-bold">${t("title")}</h4>
      </div>

      <div class="align mb-4 flex flex-col items-center gap-4 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-950 p-6 lg:flex-row-reverse lg:bg-gradient-to-r lg:py-8 lg:pr-0">
        <div class="relative lg:w-1/2">
          ${responsiveImage({
            name: "better-together-dj-berlin-portrait-vera-jo",
            alt: t("intro.imageAlt"),
            className: "w-100 rounded-md lg:rounded-r-none",
          })}
        </div>

        <div class="lg:w-1/2">
          <h2 class="mb-2 text-xl font-bold">${t("intro.greeting")}</h2>
          <p class="mb-2">${t("intro.paragraph1")}</p>
          <p>${t("intro.paragraph2")}</p>
        </div>
      </div>

      <div class="mb-4 max-w-lg px-6 lg:mx-auto">
        <p class="mb-2">${t("mission.paragraph1")}</p>
        <p class="mb-2">${t("mission.paragraph2")}</p>
        <p>${t("mission.paragraph3")}</p>
      </div>

      <div class="mx-auto max-w-4xl">
        <div class="mb-4 flex flex-col items-center gap-4 rounded-3xl bg-gradient-to-tr from-blue-500 to-purple-950 p-6 lg:ml-auto lg:max-w-3xl lg:flex-row-reverse lg:justify-between lg:bg-gradient-to-l lg:py-8 lg:pr-0">
          <div class="relative lg:w-1/2 lg:max-w-sm">
            ${responsiveImage({
              name: "better-together-dj-berlin-portrait-jo",
              alt: t("jonathan.imageAlt"),
              className: "w-100 rounded-md lg:rounded-r-none",
            })}
          </div>
          <p class="lg:w-1/2">${t("jonathan.description")}</p>
        </div>

        <div class="mb-4 flex flex-col items-center gap-4 rounded-3xl bg-gradient-to-bl from-blue-500 to-purple-950 p-6 lg:max-w-3xl lg:flex-row lg:justify-between lg:bg-gradient-to-r lg:py-8 lg:pl-0">
          <div class="relative lg:max-w-sm">
            ${responsiveImage({
              name: "better-together-dj-berlin-portrait-vera-fullbody-square",
              alt: t("vera.imageAlt"),
              className: "w-100 rounded-md lg:rounded-l-none",
            })}
          </div>
          <p class="lg:w-1/2">${t("vera.description")}</p>
        </div>
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
