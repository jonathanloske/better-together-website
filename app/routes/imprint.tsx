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
    <div className="ph3 bg-off-white">
      <div className="center mw6 pv3">
        <div className="flex-ns justify-between-ns mb3">
          <div>
            <h4 className="f4 b lh-title mb2 primary">Impressum</h4>
            <div>
              <strong>Herdt und Loske-Burkhardt GbR</strong>
            </div>
            <div>Bismarckstr. 78</div>
            <div>10627 Berlin</div>
            <p>Deutschland</p>
            <p>vertreten durch die Gesellschafter Jonathan und Vera Loske</p>
            <div>
              Telefonnummer:{" "}
              <span id="telcontainer">
                <button
                  onClick={() =>
                    printcode(
                      ";28185#&;35#&;28185#&;55#&;28185#&;84#&;28185#&;84#&;28185#&;84#&;28185#&;75#&;28185#&;35#&;28185#&;45#&;28185#&;45#&;28185#&;55#&;28185#&;94#&;28185#&;84#&",
                      "58182",
                      "tel"
                    )
                  }
                  className="hint-highlight"
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
                      "email"
                    )
                  }
                  className="hint-highlight"
                >
                  E-Mail-Adresse anzeigen
                </button>
              </span>
            </div>
            <p>
              Internet:{" "}
              <a href="http://better-together-dj.com/">
                http://better-together-dj.com/
              </a>
            </p>

            <div>Inhaltlich Verantwortliche gemäß § 55 RStV:</div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
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

            <p></p>

            <p>
              Plattform der EU-Kommission zur Online-Streitbeilegung:{" "}
              <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE">
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
