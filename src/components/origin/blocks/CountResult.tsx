import { TextStats, calculateStats } from "@/lib/countChars";

type Props = {
  text: string;
};

const CountResult = ({ text }: Props) => {
  const stats: TextStats = calculateStats(text);
  console.log(stats.spaces, stats.newlines);
  return (
    <>
      <p className="mb-4 text-xl font-semibold">Result</p>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-y-4">
          <p className="flex justify-between whitespace-nowrap border-b border-gray-200 px-2">
            <span>文字数:</span> <span>{stats.characters}</span>
          </p>
          <p className="flex justify-between whitespace-nowrap border-b border-gray-200 px-2">
            <span>空白・改行を除いた文字数:</span>
            <span>{stats.characters - stats.spaces}</span>
          </p>
          <p className="flex justify-between whitespace-nowrap border-b border-gray-200 px-2">
            <span>行数:</span> <span>{stats.lines}</span>
          </p>
          <p className="flex justify-between whitespace-nowrap border-b border-gray-200 px-2">
            <span>空白の数:</span> <span>{stats.spaces}</span>
          </p>
          <p className="flex justify-between whitespace-nowrap border-b border-gray-200 px-2">
            <span>改行の数:</span> <span>{stats.newlines}</span>
          </p>
          <p className="flex justify-between whitespace-nowrap border-b border-gray-200 px-2">
            <span>原稿用紙（400字詰め）:</span>{" "}
            <span>{stats.manuscriptPages}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default CountResult;
