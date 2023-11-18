export default function Index() {
  return (
    <nav className="flex items-center justify-between bg-white px-5 py-2.5">
      <a href="/" className="mr4 w-56 sm:w-96">
        <img src="/img/logo/logo-banner.png" />
      </a>

      <a
        href="/contact"
        className="text-xl font-bold text-gray-500 no-underline hover:underline"
      >
        Kontakt
      </a>
    </nav>
  );
}
