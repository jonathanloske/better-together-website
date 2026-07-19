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

      <div class="mb-4 max-w-2xl px-6 font-bold lg:mx-auto">
        <div class="relative rounded-lg bg-gradient-to-tr from-purple-100 to-pink-400 p-4 text-black before:absolute before:left-3 before:top-full before:-mt-px before:w-0 before:border-l-8 before:border-r-8 before:border-t-8 before:border-l-transparent before:border-r-transparent before:border-t-purple-100">
          ${t("testimonial.quote")}
        </div>
        <div class="mt-2">Inka</div>
      </div>

      <div class="mb-4 max-w-2xl px-6 lg:mx-auto">
        <p>${t("intro.paragraph3")}</p>
      </div>

      <div class="mb-4 max-w-2xl px-6 lg:mx-auto">
        <h3 class="mb-2 text-2xl font-bold">${t("faq.title")}</h3>
        <div class="flex flex-col gap-2">
          ${t("faq.items")
            .map(
              (item) => `<details class="group rounded-lg bg-white/10 p-4">
            <summary class="cursor-pointer list-none font-bold marker:content-none">
              <span class="inline-block w-4 group-open:rotate-90">›</span>
              ${item.question}
            </summary>
            <p class="mt-2 pl-4">${item.answer}</p>
          </details>`,
            )
            .join("\n          ")}
        </div>
      </div>

      <div class="mt-4 text-center lg:w-full">
        <a href="${langPrefix}/contact" class="mx-auto block w-fit rounded-md border-2 border-violet-700 bg-white px-2 py-2 text-2xl text-violet-700">
          ${t("cta.convinced").replace("—", '—<br class="hidden md:inline" />')}
        </a>
      </div>
    </div>
  </div>
</main>`;
}
