import { heroImage } from "../image.mjs";
import { renderLiteYoutube } from "../partials/liteYoutube.mjs";

export function renderHome({ lang, t }) {
  const langPrefix = lang === "en" ? "/en" : "";

  return `<main class="leading-6 text-white">
  <div class="relative px-11 py-16 after:absolute after:bottom-0 after:-mx-11 after:block after:h-12 after:w-full after:bg-gradient-to-b after:from-transparent after:to-black after:sm:h-24">
    ${heroImage({
      name: "home-jumbotron",
      alt: t("hero.imageAlt"),
      className:
        "absolute inset-0 -z-10 h-full w-full object-cover",
    })}
    <div class="mx-auto max-w-xs px-1 text-center font-bold leading-5 md:max-w-4xl md:py-36">
      <div class="mb-10 text-6xl">${t("hero.title")}</div>
      <div class="-inset-1 -skew-y-3 bg-violet-700 p-2 text-4xl">${t("hero.subtitle")}</div>
    </div>
  </div>
  <div class="mx-auto max-w-5xl">
    <div class="px-5 py-8 font-bold">
      <div class="rounded-lg bg-gradient-to-br from-blue-500 to-purple-950 p-6">
        <h2 class="pb-6 text-4xl">${t("whyUs.title")}</h2>
        <div class="">
          <p>${t("whyUs.description")}</p>
          <div class="pt-3 text-center">
            <a href="${langPrefix}/about-us" class="mx-auto block h-10 w-fit rounded-md border-2 border-violet-700 bg-white px-2 leading-10 text-violet-700 sm:mx-0">
              ${t("whyUs.learnMoreButton")}
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:flex">
      <div class="px-5 font-bold lg:px-12 lg:pt-8">
        <div class="">
          <h2 class="pb-6 text-4xl">${t("whatWeOffer.title")}</h2>
          <p class="">${t("whatWeOffer.description")}</p>
        </div>
      </div>
      <div class="mx-auto w-fit max-w-full px-5 pt-8 text-center">
        <div class="rounded-lg bg-gradient-to-br from-blue-500 to-purple-950 p-6">
          <h3 class="mb-3 font-bold">${t("videoSection.title")}</h3>
          ${renderLiteYoutube({
            videoId: "GcH8hmAnyIE",
            title: t("videoSection.videoTitle"),
            className: "w-[704px] max-w-full rounded-md sm:max-w-lg",
          })}
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-md px-5 pt-8 md:max-w-5xl">
      <div class="text-center text-2xl">${t("testimonials.title")}</div>
      <div class="flex flex-wrap content-center justify-between gap-4 pt-4 md:gap-8">
        <div class="mx-auto w-72 font-bold">
          <div class="relative rounded-lg bg-gradient-to-tr from-purple-100 to-pink-400 p-4 text-black before:absolute before:left-3 before:top-full before:-mt-px before:w-0 before:border-l-8 before:border-r-8 before:border-t-8 before:border-l-transparent before:border-r-transparent before:border-t-purple-100">
            ${t("testimonials.testimonial1")}
          </div>
          <div class="mt-2">
            <a class="underline" href="https://maps.app.goo.gl/dcnAL36G4B3ypd9r9">Mathilda</a>
          </div>
        </div>
        <div class="mx-auto w-72 font-bold">
          <div class="relative rounded-lg bg-gradient-to-tr from-purple-100 to-pink-400 p-4 text-black before:absolute before:left-3 before:top-full before:-mt-px before:w-0 before:border-l-8 before:border-r-8 before:border-t-8 before:border-l-transparent before:border-r-transparent before:border-t-purple-100">
            ${t("testimonials.testimonial2")}
          </div>
          <div class="mt-2">
            <a class="underline" href="https://maps.app.goo.gl/jCYxx6So4Gb7Qkg8A">Melli</a>
          </div>
        </div>
        <div class="mx-auto w-72 font-bold">
          <div class="relative rounded-lg bg-gradient-to-tr from-purple-100 to-pink-400 p-4 text-black before:absolute before:left-3 before:top-full before:-mt-px before:w-0 before:border-l-8 before:border-r-8 before:border-t-8 before:border-l-transparent before:border-r-transparent before:border-t-purple-100">
            ${t("testimonials.testimonial3")}
          </div>
          <div class="mt-2">
            <a class="underline" href="https://maps.app.goo.gl/jQhjW6zsD91UCnKGA">Marija</a>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <a href="${langPrefix}/contact" class="mx-auto block w-fit rounded-md border-2 border-violet-700 bg-white px-2 py-2 text-2xl text-violet-700">
        ${t("cta.convinced")}
      </a>
    </div>
  </div>
</main>`;
}
