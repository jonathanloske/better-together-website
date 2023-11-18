export default function Index() {
  return (
    <div className="ph3 bg-off-white">
      <div className="center mw6 pv3">
        {/* <!-- Überschrift--> */}

        <h4 className="f4 b lh-title mb2 primary">Über uns</h4>

        {/* <!-- Bild: Portrait Vera & Jo--> */}
        <img
          src="/img/better-together-dj-berlin-portrait-vera-jo.jpg"
          alt="Better Together - euer DJ in Berlin & Brandenburg. Portrait von Vera und Jonathan. Sie schauen sich an und lachen."
          className="db w-100 mb2 center pv1"
        />

        {/* <!-- Text über uns --> */}

        <h2 className="f5 b lh-title mb2">Hi!</h2>

        <p>
          Wir sind Jonathan & Vera und zusammen sind wir Better Together 💜 Wir
          leben in Berlin und sind für euch in der Region Berlin-Brandenburg
          aktiv.
        </p>

        <p>
          Vielleicht kommt euch das bekannt vor: Auf Parties ist uns immer
          wieder aufgefallen, dass der DJ seltsame Übergänge fabriziert, dass
          gute Lieder zu kurz angespielt werden, obwohl sie von der Crowd
          gefeiert werden, dass die Musikauswahl keinen roten Faden hat, dass
          der DJ keine aktuelle Musik kennt... Auf der Suche nach einem DJ für
          unsere eigene Hochzeit ist uns aufgefallen, wie wenige Anbieter zu uns
          passen. Und dann hörten wir auch noch Frustgeschichten von Freunden,
          bei denen der Hochzeits-DJ nur Lieder gespielt hat, die niemand kannte
          oder mochte.
        </p>

        <p>
          Da dachten wir: Hey, das muss doch auch besser gehen - und am besten
          zusammen! #bettertogether Im Gegensatz zu den meisten Hochzeit-DJs
          sind wir zu zweit im Einsatz. Jonathan ist der DJ, Vera kümmert sich
          um alles andere.
        </p>

        <p>
          Wir sind beide easy-going, empathisch, ambitioniert - und unser Benzin
          ist eine gute Connection zu den Leuten, mit denen wir arbeiten. Eine
          wertschätzende, offene Kommunikation ist für uns selbstverständlich.
        </p>

        <p>
          Das heißt, wir kümmern uns um euch. Wir merken, worauf ihr Bock habt
          und gehen auf eure Wünsche ein. Ein gelungener Moment für uns ist,
          wenn eure Gäste aufgeregt ihre Freunde an der Schulter packen und
          rufen: "Oooooh, das Lied!!" und euphorisch auf die Tanzfläche stürmen.
          Kurz: Wir haben Freude daran, euch den besten Abend ever-ever zu
          ermöglichen ✨
        </p>

        {/* <!-- Bild: Jonathan --> */}
        <img
          src="img/better-together-dj-berlin-portrait-jo.jpg"
          alt="Better Together - euer DJ in Berlin & Brandenburg. Portrait von Jonathan. Er steht hinter seinem DJ-Pult, das mit Pflanzen und einer Diskokugel geschmückt ist. Er trägt ein farbenfrohes T-Shirt."
          className="db w-third-ns w-100 mr3 mv2 fl"
        />

        {/* <!-- Text über Jonathan --> */}
        <p>
          {" "}
          Jonathan ist euer DJ und er LIEBT Musik! Einen Großteil seiner
          Freizeit verbringt er damit, in Musik-News zu stöbern, neue Artists
          und Releases zu entdecken und seine DJ-Musik zu sortieren. Daher haben
          wir für euch immer die aktuellste Musik dabei. Er kümmert sich auch um
          hier und da Anfallendes, z.B. die Kommunikation mit euch. Von Beruf
          ist Jonathan IT Consultant. Technische Aufgaben, wie die Website am
          Laufen zu halten, sind für ihn daher ein Heimspiel.
        </p>

        {/* <!-- Bild: Vera--> */}
        <img
          src="img/better-together-dj-berlin-portrait-vera-fullbody-square.jpg"
          alt="Better Together - euer DJ in Berlin & Brandenburg. Portrait von Vera. Sie lacht."
          className="db w-third-ns w-100 mb2 ml3 fr"
        />

        {/* <!-- Text über Vera --> */}
        <p>
          {" "}
          Vera ist Master-Planerin, kreative Natur und der Motor, der das
          Business vorantreibt. Sie steckt hinter den Designs für Better
          Together, dem Content und kümmert sich um Social Media. Dabei passt
          sie stets auf, dass alles seine Ordnung hat. Hauptberuflich ist Vera
          als Sprachtherapeutin tätig.
        </p>

        <div className="tc tl-ns mt3">
          <a href="/contact" className="btn w-auto-ns raise">
            Überzeugt? Schreibt uns!
          </a>
        </div>
      </div>
    </div>
  );
}
