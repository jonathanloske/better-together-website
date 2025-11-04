import { useLocation } from "react-router";
import InstagramIcon from "./icons/Instagram";
import { createT } from "~/lib/translations";

export default function Footer() {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith("/en");
  const lang = isEnglish ? "en" : "de";
  const t = createT(lang, "common");
  const langPrefix = lang === "en" ? "/en" : "";

  return (
    <footer className="px-5 py-8 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <div className="justify-between text-left sm:flex">
          <div>
            <h3 className="text-m mb-2.5 font-bold text-violet-500">
              Better Together DJ Berlin
            </h3>
            <ul className="mb-3">
              <li>
                <a href={langPrefix || "/"} className="inline-block py-2 hover:underline">
                  {t("footer.home")}
                </a>
              </li>
              <li>
                <a href={`${langPrefix}/about-us`} className="inline-block py-2 hover:underline">
                  {t("footer.aboutUs")}
                </a>
              </li>

              <li>
                <a href={`${langPrefix}/contact`} className="inline-block py-2 hover:underline">
                  {t("footer.contact")}
                </a>
              </li>
              <li>
                <a href={`${langPrefix}/imprint`} className="inline-block py-2 hover:underline">
                  {t("footer.imprint")}
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
                  className="link relative block rounded-full bg-white p-3 text-black"
                  aria-label={t("footer.instagramLabel")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon
                    width="1.5rem"
                    height="1.5rem"
                    className="block h-auto max-h-full w-6 max-w-full"
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
