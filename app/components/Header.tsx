export default function Index() {
  return (
    <nav className="flex justify-between items-center bg-white py-2.5 px-5">
      <a href="/" className="mr4 w-56 sm:w-96">
        <img src="/logo-banner.png" />
      </a>

      <a
        href="/contact"
        className="font-bold text-xl text-gray-500 no-underline hover:underline"
      >
        Kontakt
      </a>
    </nav>
  );
}
