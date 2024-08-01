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
      <div className="flex flex-wrap">
        <Link
          className="m-4 flex max-w-80 flex-col gap-y-2 rounded-lg border border-gray-200 p-4 duration-200 hover:bg-slate-100"
          href="/char-count"
        >
          <span className="font-semibold">文字数カウント</span>
          <span className="text-sm">
            テキストボックスに入力された文字数をリアルタイムにカウントします。X（Twitter）投稿やレポート作成など、文字数制限のある文章を作成するときに便利です。
          </span>
        </Link>
        <Link
          className="m-4 flex max-w-80 flex-col gap-y-2 rounded-lg border border-gray-200 p-4 duration-200 hover:bg-slate-100"
          href="/convert-roman"
        >
          <span className="font-semibold">ローマ数字変換</span>
          <span className="text-sm">
            テキストボックスに入力されたローマ数字をアラビア数字に変換します。論文や本文でローマ数字を使う際に便利です。
          </span>
        </Link>
      </div>
    </div>
  );
}
