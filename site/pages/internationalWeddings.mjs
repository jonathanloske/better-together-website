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
        <p>${t("intro.paragraph3")}</p>
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
