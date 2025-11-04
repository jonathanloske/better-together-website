import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Image from "~/components/Image";

export default function AboutUsEN() {
  const { t, i18n } = useTranslation("about");

  useEffect(() => {
    i18n.changeLanguage("en");
  }, [i18n]);

  return (
    <main className="leading-6 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="px-5 py-8">
          <div className="mb-4 text-center">
            <h4 className="text-4xl font-bold">{t("title")}</h4>
          </div>

          <div className="align mb-4 flex flex-col items-center gap-4 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-950 p-6 lg:flex-row-reverse lg:bg-gradient-to-r lg:py-8 lg:pr-0">
            <div className="relative lg:w-1/2">
              <Image
                name="better-together-dj-berlin-portrait-vera-jo"
                alt={t("intro.imageAlt")}
                className="w-100 rounded-md lg:rounded-r-none"
              />
            </div>

            <div className="lg:w-1/2">
              <h2 className="mb-2 text-xl font-bold">{t("intro.greeting")}</h2>

              <p className="mb-2">
                {t("intro.paragraph1")}
              </p>

              <p>
                {t("intro.paragraph2")}
              </p>
            </div>
          </div>

          <div className="mb-4 max-w-lg px-6 lg:mx-auto">
            <p className="mb-2">
              {t("mission.paragraph1")}
            </p>

            <p className="mb-2">
              {t("mission.paragraph2")}
            </p>

            <p>
              {t("mission.paragraph3")}
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex flex-col items-center gap-4 rounded-3xl bg-gradient-to-tr from-blue-500 to-purple-950 p-6 lg:ml-auto lg:max-w-3xl lg:flex-row-reverse lg:justify-between lg:bg-gradient-to-l lg:py-8 lg:pr-0">
              <div className="relative lg:w-1/2 lg:max-w-sm">
                <Image
                  name="better-together-dj-berlin-portrait-jo"
                  alt={t("jonathan.imageAlt")}
                  className="w-100 rounded-md lg:rounded-r-none"
                />
              </div>

              <p className="lg:w-1/2">
                {t("jonathan.description")}
              </p>
            </div>

            <div className="mb-4 flex flex-col items-center gap-4 rounded-3xl bg-gradient-to-bl from-blue-500 to-purple-950 p-6 lg:max-w-3xl lg:flex-row lg:justify-between lg:bg-gradient-to-r lg:py-8 lg:pl-0">
              <div className="relative lg:max-w-sm">
                <Image
                  name="better-together-dj-berlin-portrait-vera-fullbody-square"
                  alt={t("vera.imageAlt")}
                  className="w-100 rounded-md lg:rounded-l-none"
                />
              </div>

              <p className="lg:w-1/2">
                {t("vera.description")}
              </p>
            </div>
          </div>

          <div className="mt-4 text-center lg:w-full">
            <a
              href="/en/contact"
              className="mx-auto block w-fit rounded-md border-2 border-violet-700 bg-white px-2 py-2 text-2xl text-violet-700"
            >
              {t("cta.convinced")}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
