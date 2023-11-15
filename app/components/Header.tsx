export default function Index() {
  return (
    <nav className="overflow-x-scroll overflow-x-visible-ns flex justify-between items-center center bg-white divider-grey relative">
      <a href="/" className="pv2 pl3 db mr4 w-96 w4 flex-none">
        <img src="/logo-banner.png" />
      </a>

      <ul className="flex b grey-3">
        <li>
          <a href="/contact" className="pa3 no-underline db">
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
}
