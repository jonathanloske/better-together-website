export default function Index() {
  return (
    <main className="leading-6 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="px-5 py-8">
          {/* <!-- Überschrift--> */}

          <div className="mb-4 text-center">
            <h4 className="text-4xl font-bold">Über uns</h4>
          </div>

          <div className="align mb-4 flex flex-col items-center gap-4 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-950 p-6 lg:flex-row-reverse lg:bg-gradient-to-r lg:py-8 lg:pr-0">
            {/* <!-- Bild: Portrait Vera & Jo--> */}
            <div className="relative lg:w-1/2">
              <img
                src="/img/better-together-dj-berlin-portrait-vera-jo.jpg"
                alt="Better Together - euer DJ in Berlin & Brandenburg. Portrait von Vera und Jonathan. Sie schauen sich an und lachen."
                className="w-100 rounded-md lg:rounded-r-none"
              />
            </div>

            <div className="lg:w-1/2">
              {/* <!-- Text über uns --> */}

              <h2 className="mb-2 text-xl font-bold">Hi!</h2>

              <p className="mb-2">
                Wir sind Jonathan & Vera und zusammen sind wir
                Better&nbsp;Together&nbsp;💜 Wir leben in Berlin und sind für
                euch in der Region Berlin-Brandenburg aktiv.
              </p>

              <p>
                Vielleicht kommt euch das bekannt vor: Auf Parties ist uns immer
                wieder aufgefallen, dass der DJ seltsame Übergänge fabriziert,
                dass gute Lieder zu kurz angespielt werden, obwohl sie von der
                Crowd gefeiert werden, dass die Musikauswahl keinen roten Faden
                hat, dass der DJ keine aktuelle Musik kennt... Auf der Suche
                nach einem DJ für unsere eigene Hochzeit ist uns aufgefallen,
                wie wenige Anbieter zu uns passen. Und dann hörten wir auch noch
                Frustgeschichten von Freunden, bei denen der Hochzeits-DJ nur
                Lieder gespielt hat, die niemand kannte oder mochte.
              </p>
            </div>
          </div>

          <div className="mb-4 max-w-lg px-6 lg:mx-auto">
            <p className="mb-2">
              Da dachten wir: Hey, das muss doch auch besser gehen - und am
              besten zusammen! #bettertogether Im Gegensatz zu den meisten
              Hochzeit-DJs sind wir zu zweit im Einsatz. Jonathan ist der DJ,
              Vera kümmert sich um alles andere.
            </p>

            <p className="mb-2">
              Wir sind beide easy-going, empathisch, ambitioniert - und unser
              Benzin ist eine gute Connection zu den Leuten, mit denen wir
              arbeiten. Eine wertschätzende, offene Kommunikation ist für uns
              selbstverständlich.
            </p>

            <p>
              Das heißt, wir kümmern uns um euch. Wir merken, worauf ihr Bock
              habt und gehen auf eure Wünsche ein. Ein gelungener Moment für uns
              ist, wenn eure Gäste aufgeregt ihre Freunde an der Schulter packen
              und rufen: "Oooooh, das Lied!!" und euphorisch auf die Tanzfläche
              stürmen. Kurz: Wir haben Freude daran, euch den besten Abend
              ever-ever zu ermöglichen ✨
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex flex-col items-center gap-4 rounded-3xl bg-gradient-to-tr from-blue-500 to-purple-950 p-6 lg:ml-auto lg:max-w-3xl lg:flex-row-reverse lg:justify-between lg:bg-gradient-to-l lg:py-8 lg:pr-0">
              {/* <!-- Bild: Jonathan --> */}
              <div className="relative lg:w-1/2 lg:max-w-sm">
                <img
                  src="img/better-together-dj-berlin-portrait-jo.jpg"
                  alt="Better Together - euer DJ in Berlin & Brandenburg. Portrait von Jonathan. Er steht hinter seinem DJ-Pult, das mit Pflanzen und einer Diskokugel geschmückt ist. Er trägt ein farbenfrohes T-Shirt."
                  className="w-100 rounded-md lg:rounded-r-none"
                />
              </div>

              {/* <!-- Text über Jonathan --> */}
              <p className="lg:w-1/2">
                Jonathan ist euer DJ und er LIEBT Musik! Einen Großteil seiner
                Freizeit verbringt er damit, in Musik-News zu stöbern, neue
                Artists und Releases zu entdecken und seine DJ-Musik zu
                sortieren. Daher haben wir für euch immer die aktuellste Musik
                dabei. Er kümmert sich auch um hier und da Anfallendes, z.B. die
                Kommunikation mit euch. Von Beruf ist Jonathan IT Consultant.
                Technische Aufgaben, wie die Website am Laufen zu halten, sind
                für ihn daher ein Heimspiel.
              </p>
            </div>

            <div className="mb-4 flex flex-col items-center gap-4 rounded-3xl bg-gradient-to-bl from-blue-500 to-purple-950 p-6 lg:max-w-3xl lg:flex-row lg:justify-between lg:bg-gradient-to-r lg:py-8 lg:pl-0">
              <div className="relative lg:max-w-sm">
                {/* <!-- Bild: Vera--> */}
                <img
                  src="img/better-together-dj-berlin-portrait-vera-fullbody-square.jpg"
                  alt="Better Together - euer DJ in Berlin & Brandenburg. Portrait von Vera. Sie lacht."
                  className="w-100 rounded-md lg:rounded-l-none"
                />
              </div>

              {/* <!-- Text über Vera --> */}
              <p className="lg:w-1/2">
                Vera ist Master-Planerin, kreative Natur und der Motor, der das
                Business vorantreibt. Sie steckt hinter den Designs für Better
                Together, dem Content und kümmert sich um Social Media. Dabei
                passt sie stets auf, dass alles seine Ordnung hat.
                Hauptberuflich ist Vera als Sprachtherapeutin tätig.
              </p>
            </div>
          </div>

          <div className="mt-4 text-center lg:w-full">
            <a
              href="/contact"
              className="mx-auto block w-fit rounded-md border-2 border-violet-700 bg-white px-2 py-2 text-2xl text-violet-700"
            >
              Überzeugt? Schreibt uns!
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
