import Link from "next/link";

const Header = () => {
  return (
    <header className="justify-start border-b border-b-gray-200 px-8 py-3 lg:px-16 lg:py-6">
      <Link href="/">
        <span className="text-lg font-semibold text-green-500 lg:text-2xl">
          naotani-utils
        </span>
      </Link>
    </header>
  );
};

export default Header;
