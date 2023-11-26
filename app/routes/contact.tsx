import { FormEvent, useState } from "react";

export default function Index() {
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
    <main className="bg-black leading-6 text-white">
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
                        Danke 💜💙
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Vielen Dank für Deine Nachricht, wir werden uns in
                          Kürze bei dir melden.
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
                    Schließen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mx-auto max-w-2xl py-8">
        <div className="text-center">
          <h4 className="text-4xl font-bold">Kontakt</h4>
        </div>
        <div className="py-4">
          <p>
            Wir freuen uns, von euch und euren Plänen zu hören. Ihr könnt gerne
            das Formular unten verwenden, um uns zu fragen, welche Musik wir im
            Angebot haben, wie der Hochzeitstag genau aussehen soll oder eine
            andere Frage stellen. Nachdem ihr uns angeschrieben habt, melden wir
            uns bei euch für ein kostenloses Kennenlerngespräch.
          </p>
        </div>
        <div className="">
          <h4 className="pb-2 text-center text-2xl font-bold">Schreibt uns</h4>

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
                Don't fill this out: <input name="surname" />
              </label>
            </p>
            <div className="flex pb-2 lg:gap-4">
              <div className="lg:w-1/2">
                <fieldset>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="h-10 w-full rounded-md px-2 leading-10 text-black"
                  />
                </fieldset>
              </div>
              <div className="lg:w-1/2">
                <fieldset>
                  <label htmlFor="email">E-Mail-Adresse</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="h-10 w-full rounded-md px-2 leading-10 text-black"
                  />
                </fieldset>
              </div>
            </div>

            <fieldset>
              <label htmlFor="message">Eure Nachricht</label>
              <textarea
                id="message"
                name="message"
                placeholder="Eure Nachricht"
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
                Abschicken
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
