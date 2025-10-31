import type { LinksFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";

export function headers({
  loaderHeaders,
  parentHeaders,
}: {
  loaderHeaders: Headers;
  parentHeaders: Headers;
}) {
  return {
    // This is an example of how to set caching headers for a route
    // For more info on headers in Remix, see: https://remix.run/docs/en/v1/route/headers
    "Cache-Control": "public, max-age=60, s-maxage=60",
  };
}

export default function Index() {
  const { t } = useTranslation();

  return (
    <main className="leading-6 text-white">
      <div className="relative bg-hero-pattern bg-cover bg-center bg-no-repeat px-11 py-16 after:absolute after:bottom-0 after:-mx-11 after:block after:h-12 after:w-full after:bg-gradient-to-b after:from-transparent after:to-black after:sm:h-24">
        <div className="mx-auto max-w-xs px-1 text-center font-bold leading-5 md:max-w-4xl md:py-36">
          <div className="mb-10 text-6xl">{t("home.hero.title")}</div>
          <div className="-inset-1 -skew-y-3 bg-violet-700 p-2 text-4xl">
            {t("home.hero.subtitle")}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-5xl">
        <div className="px-5 py-8 font-bold">
          <div className="rounded-lg bg-gradient-to-br from-blue-500 to-purple-950 p-6">
            <h2 className="pb-6 text-4xl">{t("home.whyBetterTogether.title")}</h2>
            <div className="">
              <p>
                {t("home.whyBetterTogether.text")}
              </p>
              <div className="pt-3 text-center">
                <a
                  href="/about-us"
                  className="mx-auto block h-10 w-fit rounded-md border-2 border-violet-700 bg-white px-2 leading-10 text-violet-700 sm:mx-0"
                >
                  {t("home.whyBetterTogether.link")}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex">
          <div className="px-5 font-bold lg:px-12 lg:pt-8">
            <div className="">
              <h2 className="pb-6 text-4xl">{t("home.whatWeOffer.title")}</h2>
              <p className="">
                {t("home.whatWeOffer.text")}
              </p>
            </div>
          </div>
          <div className="mx-auto w-fit px-5 pt-8 text-center">
            <div className="rounded-lg bg-gradient-to-br from-blue-500 to-purple-950 p-6">
              <h3 className="mb-3 font-bold">
                {t("home.whatWeOffer.videoTitle")}
              </h3>
              <iframe
                width="704"
                height="396"
                src="https://www.youtube.com/embed/GcH8hmAnyIE"
                title="YouTube video player"
                frameBorder="0"
                className="max-w-full rounded-md sm:max-w-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-md px-5 pt-8 md:max-w-5xl">
          <div className="text-center text-2xl">
            {t("home.testimonials.title")}
          </div>
          <div className="flex flex-wrap content-center justify-between gap-4 pt-4 md:gap-8">
            <div className="mx-auto w-72 font-bold">
              <div className="relative rounded-lg bg-gradient-to-tr from-purple-100 to-pink-400 p-4 text-black before:absolute before:left-3 before:top-full before:-mt-px before:w-0 before:border-l-8 before:border-r-8 before:border-t-8 before:border-l-transparent before:border-r-transparent before:border-t-purple-100">
                {t("home.testimonials.sebastian")}
              </div>
              <div className="mt-2">
                <a
                  className="underline"
                  href="https://maps.app.goo.gl/xFzfDPXHfaVatBDY6"
                >
                  Sebastian
                </a>
              </div>
            </div>
            <div className="mx-auto w-72 font-bold">
              <div className="relative rounded-lg bg-gradient-to-tr from-purple-100 to-pink-400 p-4 text-black before:absolute before:left-3 before:top-full before:-mt-px before:w-0 before:border-l-8 before:border-r-8 before:border-t-8 before:border-l-transparent before:border-r-transparent before:border-t-purple-100">
                {t("home.testimonials.melli")}
              </div>
              <div className="mt-2">
                <a
                  className="underline"
                  href="https://maps.app.goo.gl/jCYxx6So4Gb7Qkg8A"
                >
                  Melli
                </a>
              </div>
            </div>
            <div className="mx-auto w-72 font-bold">
              <div className="relative rounded-lg bg-gradient-to-tr from-purple-100 to-pink-400 p-4 text-black before:absolute before:left-3 before:top-full before:-mt-px before:w-0 before:border-l-8 before:border-r-8 before:border-t-8 before:border-l-transparent before:border-r-transparent before:border-t-purple-100">
                {t("home.testimonials.marija")}
              </div>
              <div className="mt-2">
                <a
                  className="underline"
                  href="https://maps.app.goo.gl/jQhjW6zsD91UCnKGA"
                >
                  Marija
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <a
            href="/contact"
            className="mx-auto block w-fit rounded-md border-2 border-violet-700 bg-white px-2 py-2 text-2xl text-violet-700"
          >
            {t("home.cta")}
          </a>
        </div>
      </div>
    </main>
  );
}
