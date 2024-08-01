import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <h1 className="text-xl font-bold text-green-500 lg:text-4xl">
        naotani-utils
      </h1>
      <p className="my-4 text-center lg:text-lg">
        A collection of utilities for daily use.
      </p>
      <Link className="duration-200 hover:text-blue-500" href="/char-count">
        文字数カウントへ
      </Link>
    </div>
  );
}
