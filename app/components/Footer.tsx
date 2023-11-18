import InstagramIcon from "./icons/Instagram";

export default function Index() {
  return (
    <footer className="bg-black px-5 py-2.5 text-white">
      <div className="max-w-3xl text-center mx-auto">
        <div className="sm:flex justify-between text-left">
          <div>
            <h3 className="text-m mb-2.5 font-bold text-violet-600">
              Better Together DJ Berlin
            </h3>
            <ul className="mb-3">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:underline">
                  Über uns
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:underline">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="/imprint" className="hover:underline">
                  Impressum
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-m mb-2.5 font-bold text-violet-600">
              Social media
            </h3>
            <ul className="">
              <li className="inline-block">
                <a
                  href="https://www.instagram.com/bettertogetherdj/"
                  className="link bg-white text-black block relative p-2 rounded-full"
                >
                  <InstagramIcon
                    width="1.5rem"
                    height="1.5rem"
                    className="block w-4 h-auto max-w-full max-h-full"
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
