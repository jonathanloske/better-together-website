import { useTranslation } from "react-i18next";

export default function Index() {
  const { t } = useTranslation();

  function reverseString(str: string) {
    return str.split("").reverse().join("");
  }

  /**
   * To produce a new code (for phone numbers), use
   * newCode.map(partOfNewCode => "&#" + (Number(partOfNewCode) + 48) + ";&#58182;").join("").split("").reverse().join("")
   */
  function printcode(oldCode: string, add: string, type: "email" | "tel") {
    let newcode = reverseString(oldCode);
    const rgx = `&#${add};`;
    newcode = newcode.split(rgx).join("");
    const email = `<a href="${type}:${newcode}">${newcode}</a>`;
    const targetContainer = document.getElementById(`${type}container`);
    if (targetContainer) {
      targetContainer.innerHTML = email;
    }
  }

  return (
    <div className="bg-black leading-6 text-white">
      <div className="mx-auto max-w-2xl px-4 py-8">
        <div className="">
          <div>
            <h4 className="mb-4 text-3xl font-bold">{t("imprint.title")}</h4>
            <div className="mb-4">
              <div className="font-bold">{t("imprint.company")}</div>
              <div>{t("imprint.address.street")}</div>
              <div>{t("imprint.address.zip")}</div>
              <p>{t("imprint.address.country")}</p>
            </div>
            <div className="mb-4">
              {t("imprint.represented")}
            </div>
            <div className="mb-4">
              <div>
                {t("imprint.phone")}{" "}
                <span id="telcontainer">
                  <button
                    onClick={() =>
                      printcode(
                        ";28185#&;35#&;28185#&;35#&;28185#&;45#&;28185#&;05#&;28185#&;45#&;28185#&;25#&;28185#&;65#&;28185#&;45#&;28185#&;94#&;28185#&;35#&;28185#&;94#&;28185#&;84#&",
                        "58182",
                        "tel",
                      )
                    }
                    className="cursor-pointer underline"
                  >
                    {t("imprint.phoneReveal")}
                  </button>
                </span>
              </div>
              <div>
                {t("imprint.email")}{" "}
                <span id="emailcontainer">
                  <button
                    onClick={() =>
                      printcode(
                        ";250649#&;901#&;250649#&;111#&;250649#&;99#&;250649#&;64#&;250649#&;801#&;250649#&;501#&;250649#&;79#&;250649#&;901#&;250649#&;301#&;250649#&;46#&;250649#&;011#&;250649#&;501#&;250649#&;801#&;250649#&;411#&;250649#&;101#&;250649#&;89#&;250649#&;64#&;250649#&;411#&;250649#&;101#&;250649#&;401#&;250649#&;611#&;250649#&;101#&;250649#&;301#&;250649#&;111#&;250649#&;611#&;250649#&;64#&;250649#&;411#&;250649#&;101#&;250649#&;611#&;250649#&;611#&;250649#&;101#&;250649#&;89#&",
                        "946052",
                        "email",
                      )
                    }
                    className="cursor-pointer underline"
                  >
                    {t("imprint.emailReveal")}
                  </button>
                </span>
              </div>
              <p>
                {t("imprint.internet")}{" "}
                <a className="underline" href="http://better-together-dj.com/">
                  http://better-together-dj.com/
                </a>
              </p>
            </div>

            <div className="mb-4">
              <div>Inhaltlich Verantwortliche gemäß § 55 RStV:</div>
              <div className="flex place-content-around">
                <div>
                  <div>{t("imprint.responsibleMale")}</div>
                  <div>{t("imprint.address.street")}</div>
                  <div>{t("imprint.address.zip")}</div>
                  <div>{t("imprint.address.country")}</div>
                </div>
                <div>
                  <div>{t("imprint.responsibleFemale")}</div>
                  <div>{t("imprint.address.street")}</div>
                  <div>{t("imprint.address.zip")}</div>
                  <div>{t("imprint.address.country")}</div>
                </div>
              </div>
            </div>

            <p>
              {t("imprint.odrPlatform")}{" "}
              <a
                className="underline"
                href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE"
              >
                ec.europa.eu/consumers/odr
              </a>
            </p>

            <p>
              Der Verkäufer ist weder verpflichtet noch bereit, an einem
              Streitbeilegungsverfahren vor einer alternativen
              Streitbeilegungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
