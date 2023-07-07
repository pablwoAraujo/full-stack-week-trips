import Image from "next/image";

interface TripHighlightsProps {
  highlights: string[];
}

export default function TripHighlights({ highlights }: TripHighlightsProps) {
  return (
    <div className="flex flex-col gap-2 p-5">
      <h2 className="font-semibold text-primaryDarker">Destasques</h2>

      <div className="flex flex-wrap gap-y-3">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex items-center w-1/2 gap-2">
            <Image
              src={"/check-icon.png"}
              alt={"check"}
              width={15}
              height={15}
            />
            <p className="text-xs text-grayPrimary">{highlight}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
