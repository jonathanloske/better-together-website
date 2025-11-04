import { FormEvent, useState } from "react";
import { createT } from "~/lib/translations";

export default function ContactEN() {
  const t = createT("en", "contact");
  const [hasSuccessfullySubmitted, setHasSuccessfullySubmitted] =
    useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const myForm = event.target as HTMLFormElement;
    const formDataBody = new URLSearchParams(
      // See https://github.com/microsoft/TypeScript/issues/30584
      // @ts-ignore
      new FormData(myForm),
    ).toString();

    await fetch("/contact-helper", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formDataBody,
    })
      .then(() => setHasSuccessfullySubmitted(true))
      .catch((error) => alert(error));
  };

  return (
    <main className="leading-6 text-white">
      {hasSuccessfullySubmitted && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        className="text-base font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        {t("success.title")}
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {t("success.message")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    onClick={() => setHasSuccessfullySubmitted(false)}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    {t("success.closeButton")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mx-auto max-w-2xl px-4 py-8">
        <div className="text-center">
          <h4 className="text-4xl font-bold">{t("title")}</h4>
        </div>
        <div className="py-2 sm:py-4">
          <p>
            {t("intro")}
          </p>
        </div>
        <div className="">
          <h4 className="py-2 text-center text-2xl font-bold">{t("form.title")}</h4>

          <form
            name="contact"
            method="POST"
            action="/contact-helper?success=true#contact"
            data-netlify="true"
            netlify-honeypot="surname"
            onSubmit={handleSubmit}
          >
            <p hidden>
              <label>
                {t("form.honeypotLabel")} <input name="surname" />
              </label>
            </p>
            <div className="flex flex-col sm:flex-row sm:gap-4 sm:pb-2">
              <div className="w-full sm:w-1/2">
                <fieldset>
                  <label htmlFor="name">{t("form.nameLabel")}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={t("form.namePlaceholder")}
                    className="h-10 w-full rounded-md px-2 leading-10 text-black"
                  />
                </fieldset>
              </div>
              <div className="w-full sm:w-1/2">
                <fieldset>
                  <label htmlFor="email">{t("form.emailLabel")}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={t("form.emailPlaceholder")}
                    className="h-10 w-full rounded-md px-2 leading-10 text-black"
                  />
                </fieldset>
              </div>
            </div>

            <fieldset>
              <label htmlFor="message">{t("form.messageLabel")}</label>
              <textarea
                id="message"
                name="message"
                placeholder={t("form.messagePlaceholder")}
                rows={8}
                cols={80}
                className="w-full rounded-md px-2 py-2 leading-5 text-black"
              ></textarea>
            </fieldset>
            <input type="hidden" name="form-name" value="contact" />
            <div className="w-full pt-4 text-center">
              <button
                type="submit"
                className="mx-auto block w-fit rounded-md border-2 border-violet-700 bg-white px-4 text-lg leading-9 text-violet-700"
              >
                {t("form.submitButton")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
