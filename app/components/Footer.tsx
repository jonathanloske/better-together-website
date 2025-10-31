import InstagramIcon from "./icons/Instagram";
import { useTranslation } from "react-i18next";

export default function Index() {
  const { t } = useTranslation();

  return (
    <footer className="px-5 py-8 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <div className="justify-between text-left sm:flex">
          <div>
            <h3 className="text-m mb-2.5 font-bold text-violet-500">
              {t("footer.heading")}
            </h3>
            <ul className="mb-3">
              <li>
                <a href="/" className="hover:underline">
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:underline">
                  {t("nav.aboutUs")}
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:underline">
                  {t("nav.contact")}
                </a>
              </li>
              <li>
                <a href="/imprint" className="hover:underline">
                  {t("nav.imprint")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-m mb-2.5 font-bold text-violet-500">
              {t("footer.socialMedia")}
            </h3>
            <ul className="">
              <li className="inline-block">
                <a
                  href="https://www.instagram.com/bettertogetherdj/"
                  className="link relative block rounded-full bg-white p-2 text-black"
                >
                  <InstagramIcon
                    width="1.5rem"
                    height="1.5rem"
                    className="block h-auto max-h-full w-4 max-w-full"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
