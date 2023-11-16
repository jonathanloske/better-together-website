export default function Index() {
  return (
    <nav className="flex justify-between items-center center bg-white relative py-2.5 px-5">
      <a href="/" className="db mr4 w-96 w4 flex-none">
        <img src="/logo-banner.png" />
      </a>

      <ul className="flex font-bold text-xl text-gray-500">
        <li>
          <a href="/contact" className="no-underline db">
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
}
