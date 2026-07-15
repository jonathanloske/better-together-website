export function renderContact({ t }) {
  return `<main class="leading-6 text-white">
  <div id="success-modal" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" hidden>
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">${t("success.title")}</h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">${t("success.message")}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              id="success-modal-close"
              class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              ${t("success.closeButton")}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mx-auto max-w-2xl px-4 py-8">
    <div class="text-center">
      <h4 class="text-4xl font-bold">${t("title")}</h4>
    </div>
    <div class="py-2 sm:py-4">
      <p>${t("intro")}</p>
    </div>
    <div class="">
      <h4 class="py-2 text-center text-2xl font-bold">${t("form.title")}</h4>

      <form
        id="contact-form"
        name="contact"
        method="POST"
        action="/contact-helper?success=true#contact"
        data-netlify="true"
        netlify-honeypot="surname"
      >
        <p hidden>
          <label>${t("form.honeypotLabel")} <input name="surname" /></label>
        </p>
        <div class="flex flex-col sm:flex-row sm:gap-4 sm:pb-2">
          <div class="w-full sm:w-1/2">
            <fieldset>
              <label for="name">${t("form.nameLabel")}</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="${t("form.namePlaceholder")}"
                class="h-10 w-full rounded-md px-2 leading-10 text-black"
              />
            </fieldset>
          </div>
          <div class="w-full sm:w-1/2">
            <fieldset>
              <label for="email">${t("form.emailLabel")}</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="${t("form.emailPlaceholder")}"
                class="h-10 w-full rounded-md px-2 leading-10 text-black"
              />
            </fieldset>
          </div>
        </div>

        <fieldset>
          <label for="message">${t("form.messageLabel")}</label>
          <textarea
            id="message"
            name="message"
            placeholder="${t("form.messagePlaceholder")}"
            rows="8"
            cols="80"
            class="w-full rounded-md px-2 py-2 leading-5 text-black"
          ></textarea>
        </fieldset>
        <input type="hidden" name="form-name" value="contact" />
        <div class="w-full pt-4 text-center">
          <button
            type="submit"
            class="mx-auto block w-fit rounded-md border-2 border-violet-700 bg-white px-4 text-lg leading-9 text-violet-700"
          >
            ${t("form.submitButton")}
          </button>
        </div>
      </form>
    </div>
  </div>
</main>`;
}
