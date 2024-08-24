import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  description: string;
};

const LinkCard = ({ slug, title, description }: Props) => {
  return (
    <Link
      className="flex w-full flex-col gap-y-2 rounded-lg border border-gray-200 p-4 duration-200 hover:bg-slate-100 md:max-w-80"
      href={slug}
    >
      <span className="font-semibold">{title}</span>
      <span className="text-sm">{description}</span>
    </Link>
  );
};

export default LinkCard;
