export default function Index() {
  return (
    <footer className="bg-black ph3 pv4 white">
      <div className="mw7 center pt3">
        <div className="flex-ns justify-between">
          <div>
            <h3 className="f4 b lh-title mb1 primary">
              Better Together DJ Berlin
            </h3>
            <ul className="mb3">
              <li>
                <a href="/" className="link">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="link">
                  Über uns
                </a>
              </li>

              <li>
                <a href="/contact" className="link">
                  Kontakt
                </a>
                <a href="/contact-helper" className="link">
                  Kontakt Helper
                </a>
              </li>
              <li>
                <a href="/imprint" className="link">
                  Impressum
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="f4 b lh-title mb2 primary">Social media</h3>
            <ul className="mhn2">
              <li className="dib ph2 raise">
                <a
                  href="https://www.instagram.com/bettertogetherdj/"
                  className="link bg-white black db relative br-100 pa2"
                >
                  <svg width="16px" height="16px" className="db">
                    <use xlinkHref="#icons-instagram"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
