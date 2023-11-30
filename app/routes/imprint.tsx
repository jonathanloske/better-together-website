export default function Index() {
  function reverseString(str: string) {
    return str.split("").reverse().join("");
  }

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
            <h4 className="mb-4 text-3xl font-bold">Impressum</h4>
            <div className="mb-4">
              <div className="font-bold">Jonathan Loske und Vera Loske GbR</div>
              <div>Bismarckstr. 78</div>
              <div>10627 Berlin</div>
              <p>Deutschland</p>
            </div>
            <div className="mb-4">
              vertreten durch die Gesellschafter Jonathan Loske und Vera Loske
            </div>
            <div className="mb-4">
              <div>
                Telefonnummer:{" "}
                <span id="telcontainer">
                  <button
                    onClick={() =>
                      printcode(
                        ";28185#&;35#&;28185#&;55#&;28185#&;84#&;28185#&;84#&;28185#&;84#&;28185#&;75#&;28185#&;35#&;28185#&;45#&;28185#&;45#&;28185#&;55#&;28185#&;94#&;28185#&;84#&",
                        "58182",
                        "tel",
                      )
                    }
                    className="cursor-pointer underline"
                  >
                    Telefonnummer anzeigen
                  </button>
                </span>
              </div>
              <div>
                E-Mail-Adresse:{" "}
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
                    E-Mail-Adresse anzeigen
                  </button>
                </span>
              </div>
              <p>
                Internet:{" "}
                <a className="underline" href="http://better-together-dj.com/">
                  http://better-together-dj.com/
                </a>
              </p>
            </div>

            <div className="mb-4">
              <div>Inhaltlich Verantwortliche gemäß § 55 RStV:</div>
              <div className="flex place-content-around">
                <div>
                  <div>Herr Jonathan Loske</div>
                  <div>Bismarckstr. 78</div>
                  <div>10627 Berlin</div>
                  <div>Deutschland</div>
                </div>
                <div>
                  <div>Frau Vera Loske</div>
                  <div>Bismarckstr. 78</div>
                  <div>10627 Berlin</div>
                  <div>Deutschland</div>
                </div>
              </div>
            </div>

            <p>
              Plattform der EU-Kommission zur Online-Streitbeilegung:{" "}
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
