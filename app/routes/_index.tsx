import type { LinksFunction } from "@remix-run/node";

import appStylesHref from "~/styles/routes/_index.css";

export function headers({
  loaderHeaders,
  parentHeaders,
}: {
  loaderHeaders: Headers;
  parentHeaders: Headers;
}) {
  console.log(
    "This is an example of how to set caching headers for a route, feel free to change the value of 60 seconds or remove the header"
  );
  return {
    // This is an example of how to set caching headers for a route
    // For more info on headers in Remix, see: https://remix.run/docs/en/v1/route/headers
    "Cache-Control": "public, max-age=60, s-maxage=60",
  };
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

export default function Index() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <div className="bg-grey-1 pv4">
        <div className="flex-l mhn1-l ph3 center mw7">
          <h2 className="f2 b lh-title mb2 w-40-l">Warum Better Together?</h2>
          <div className="w-60-l mb0">
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
              <a href="/about-us" className="btn w-auto-ns raise">
                Hier erfahrt ihr mehr über uns
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-off-white pv4">
        <div className="ph3 mw7 center">
          <h2 className="f2 b lh-title mb2">Was wir bieten</h2>
          <p className="mb4 mw6">
            Mit uns als Hochzeits-DJ in und um Berlin kriegt ihr das volle
            Rundum-Sorglos-Paket: In einem Kennenlerngespräch stimmen wir mit
            euch den Stil eurer Party und eure musikalischen Vorlieben und
            No-Gos ab. Am Hochzeitstag kommen wir mit allem, was man für eine
            gelungene Party braucht: DJ-Equimpent, passender Audio- und
            Lichttechnik - und natürlich mit bester Laune 💃🕺
          </p>

          <div className="flex-ns mhn2-ns mb3"></div>
        </div>
      </div>
      <div
        className="bg-off-white pb4 ph3 mw7 center"
        style={{ marginTop: "-3rem" }}
      >
        <h3 className="b">
          So kann's klingen: DJ Jonathan mit einem Appetizer-Set.
        </h3>
        <iframe
          width="704"
          height="396"
          src="https://www.youtube.com/embed/GcH8hmAnyIE"
          title="YouTube video player"
          frameBorder="0"
          className="mw6-ns mw-100"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>

        <div className="tc tl-ns mt3">
          <a href="/contact" className="btn w-auto-ns raise">
            Überzeugt? Schreibt uns!
          </a>
        </div>
      </div>
    </main>
  );
}
