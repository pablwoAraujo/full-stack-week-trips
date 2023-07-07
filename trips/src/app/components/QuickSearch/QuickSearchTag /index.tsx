import Image from "next/image";

type TypeQuickSearchTag = {
  size: number;
  source: string;
  alt: string;
  text: string;
};

export default function QuickSearchTag({
  size,
  source,
  alt,
  text,
}: TypeQuickSearchTag) {
  return (
    <div className="flex flex-col items-center gap-1">
      <Image width={size} height={size} src={source} alt={alt} />
      <p className="text-sm text-grayPrimary">{text}</p>
    </div>
  );
}
