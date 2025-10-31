import Image from "~/components/Image";
import { useTranslation } from "react-i18next";

export default function Index() {
  const { t } = useTranslation();

  return (
    <main className="leading-6 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="px-5 py-8">
          {/* <!-- Überschrift--> */}

          <div className="mb-4 text-center">
            <h4 className="text-4xl font-bold">{t("aboutUs.title")}</h4>
          </div>

          <div className="align mb-4 flex flex-col items-center gap-4 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-950 p-6 lg:flex-row-reverse lg:bg-gradient-to-r lg:py-8 lg:pr-0">
            {/* <!-- Bild: Portrait Vera & Jo--> */}
            <div className="relative lg:w-1/2">
              <Image
                name="better-together-dj-berlin-portrait-vera-jo"
                alt={t("aboutUs.veraJoAlt")}
                className="w-100 rounded-md lg:rounded-r-none"
              />
            </div>

            <div className="lg:w-1/2">
              {/* <!-- Text über uns --> */}

              <h2 className="mb-2 text-xl font-bold">{t("aboutUs.greeting")}</h2>

              <p className="mb-2">
                {t("aboutUs.intro")}
              </p>

              <p>
                {t("aboutUs.story1")}
              </p>
            </div>
          </div>

          <div className="mb-4 max-w-lg px-6 lg:mx-auto">
            <p className="mb-2">
              {t("aboutUs.story2")}
            </p>

            <p className="mb-2">
              {t("aboutUs.story3")}
            </p>

            <p>
              {t("aboutUs.story4")}
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex flex-col items-center gap-4 rounded-3xl bg-gradient-to-tr from-blue-500 to-purple-950 p-6 lg:ml-auto lg:max-w-3xl lg:flex-row-reverse lg:justify-between lg:bg-gradient-to-l lg:py-8 lg:pr-0">
              {/* <!-- Bild: Jonathan --> */}
              <div className="relative lg:w-1/2 lg:max-w-sm">
                <Image
                  name="better-together-dj-berlin-portrait-jo"
                  alt={t("aboutUs.jonathanAlt")}
                  className="w-100 rounded-md lg:rounded-r-none"
                />
              </div>

              {/* <!-- Text über Jonathan --> */}
              <p className="lg:w-1/2">
                {t("aboutUs.jonathan")}
              </p>
            </div>

            <div className="mb-4 flex flex-col items-center gap-4 rounded-3xl bg-gradient-to-bl from-blue-500 to-purple-950 p-6 lg:max-w-3xl lg:flex-row lg:justify-between lg:bg-gradient-to-r lg:py-8 lg:pl-0">
              <div className="relative lg:max-w-sm">
                {/* <!-- Bild: Vera--> */}
                <Image
                  name="better-together-dj-berlin-portrait-vera-fullbody-square"
                  alt={t("aboutUs.veraAlt")}
                  className="w-100 rounded-md lg:rounded-l-none"
                />
              </div>

              {/* <!-- Text über Vera --> */}
              <p className="lg:w-1/2">
                {t("aboutUs.vera")}
              </p>
            </div>
          </div>

          <div className="mt-4 text-center lg:w-full">
            <a
              href="/contact"
              className="mx-auto block w-fit rounded-md border-2 border-violet-700 bg-white px-2 py-2 text-2xl text-violet-700"
            >
              {t("aboutUs.cta")}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
