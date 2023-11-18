import type { LinksFunction } from "@remix-run/node";

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
  return (
    <main className="leading-6">
      <div className="bg-grey-1 bg-hero-pattern bg-cover bg-center bg-no-repeat px-11 py-16">
        <div className="mx-auto max-w-xs px-1 text-center font-bold leading-5 text-white md:max-w-4xl md:py-36">
          <div className="mb-5 text-6xl">Eure Hochzeit - Eure Party</div>
          <div className="bg-violet-700 p-1 text-4xl">
            Better Together - euer DJ in Berlin & Brandenburg
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
          <h2 className="">Warum Better Together?</h2>
          <div className="">
            <p>
              Ihr wünscht euch eine einzigartige Hochzeit, die zu euch passt und
              einfach Spaß macht? Ihr wollt ein entspanntes House-Set zu eurer
              Gartenparty? Oder zu euren Lieblingsliedern bis in die frühen
              Morgenstunden abzappeln, quer durch die Hits der letzten
              Jahrzehnte? Oder außer Hip Hop nichts aus den Boxen kommen lassen?
              Dazu braucht ihr Leute, die nicht nur was von Musik verstehen,
              sondern auch feinfühlig auf eure Bedürfnisse eingehen. Wir geben
              Hand in Hand mit euch alles dafür, eure Hochzeit zu einem
              unvergesslichen Erlebnis zu machen - ganz genau so, wie ihr sie
              euch vorstellt. Wir achten auf eine passende Musikauswahl, die
              euch und eure Gäste die Tanzfläche stürmen lässt. Die richtige
              Musik zur richtigen Zeit. Zusammen kreieren wir eure legendäre
              Party!
            </p>
            <div className="center">
              <a href="/about-us" className="">
                Hier erfahrt ihr mehr über uns
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
          <h2 className="">Was wir bieten</h2>
          <p className="">
            Mit uns als Hochzeits-DJ in und um Berlin kriegt ihr das volle
            Rundum-Sorglos-Paket: In einem Kennenlerngespräch stimmen wir mit
            euch den Stil eurer Party und eure musikalischen Vorlieben und
            No-Gos ab. Am Hochzeitstag kommen wir mit allem, was man für eine
            gelungene Party braucht: DJ-Equimpent, passender Audio- und
            Lichttechnik - und natürlich mit bester Laune 💃🕺
          </p>

          <div className=""></div>
        </div>
      </div>
      <div className="">
        <h3 className="">
          So kann's klingen: DJ Jonathan mit einem Appetizer-Set.
        </h3>
        {/* <iframe
          width="704"
          height="396"
          src="https://www.youtube.com/embed/GcH8hmAnyIE"
          title="YouTube video player"
          frameBorder="0"
          className="mw6-ns mw-100"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe> */}

        <div className="">
          <a href="/contact" className="">
            Überzeugt? Schreibt uns!
          </a>
        </div>
      </div>
    </main>
  );
}
