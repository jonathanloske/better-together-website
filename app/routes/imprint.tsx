import { createT } from "~/lib/translations";

export default function Index() {
  const t = createT("de", "imprint");

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
            <h4 className="mb-4 text-3xl font-bold">{t("title")}</h4>
            <div className="mb-4">
              <div className="font-bold">{t("companyName")}</div>
              <div>Bismarckstr. 78</div>
              <div>10627 Berlin</div>
              <p>{t("country")}</p>
            </div>
            <div className="mb-4">
              {t("representedBy")}
            </div>
            <div className="mb-4">
              <div>
                {t("phone")}{" "}
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
                    {t("showPhone")}
                  </button>
                </span>
              </div>
              <div>
                {t("email")}{" "}
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
                    {t("showEmail")}
                  </button>
                </span>
              </div>
              <p>
                {t("website")}{" "}
                <a className="underline" href="http://better-together-dj.com/">
                  http://better-together-dj.com/
                </a>
              </p>
            </div>

            <div className="mb-4">
              <div>{t("responsibleContent")}</div>
              <div className="flex place-content-around">
                <div>
                  <div>{t("mr")} Jonathan Loske</div>
                  <div>Bismarckstr. 78</div>
                  <div>10627 Berlin</div>
                  <div>{t("country")}</div>
                </div>
                <div>
                  <div>{t("mrs")} Vera Loske</div>
                  <div>Bismarckstr. 78</div>
                  <div>10627 Berlin</div>
                  <div>{t("country")}</div>
                </div>
              </div>
            </div>

            <p>
              {t("disputeResolution")}{" "}
              <a
                className="underline"
                href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE"
              >
                ec.europa.eu/consumers/odr
              </a>
            </p>

            <p>
              {t("disputeParticipation")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
