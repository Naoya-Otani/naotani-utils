import LinkCard from "@/components/origin/elements/LinkCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between px-8 py-12 md:p-24">
      <h1 className="text-xl font-bold text-green-500 lg:text-4xl">
        naotani-utils
      </h1>
      <p className="my-4 text-center lg:text-lg">
        A collection of utilities for daily use.
      </p>
      <div className="mt-4 flex flex-wrap gap-4">
        <LinkCard
          slug="/char-count"
          title="文字数カウント"
          description="テキストボックスに入力された文字数をリアルタイムにカウントします。X（Twitter）投稿やレポート作成など、文字数制限のある文章を作成するときに便利です。"
        />
        <LinkCard
          slug="/convert-roman"
          title="ローマ数字変換"
          description="テキストボックスに入力されたローマ数字をアラビア数字に変換します。論文や本文でローマ数字を使う際に便利です。"
        />
        <LinkCard
          slug="/"
          title="Coming soon"
          description="次の機能をお楽しみに！"
        />
      </div>
    </div>
  );
}
