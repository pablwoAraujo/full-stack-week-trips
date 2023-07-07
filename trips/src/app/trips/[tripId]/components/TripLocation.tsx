import Button from "@/components/Button";
import Image from "next/image";

interface TripLocationProps {
  location: string;
}

export default function TripLocation({ location }: TripLocationProps) {
  return (
    <div className="p-5">
      <h2 className="mb-5 font-semibold text-primaryDarker">Localização</h2>

      <div className="relative h-[280px] w-full">
        <Image
          src={"/map-mobile.png"}
          alt={location}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg shadow-md"
        />
      </div>

      <h3 className="mt-3 text-sm font-semibold text-primaryDarker">
        {location}
      </h3>
      <p className="mt-2 text-xs leading-5 text-justify text-primaryDarker">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, dicta.
        Commodi voluptatibus quaerat, iste modi asperiores accusamus temporibus,
        obcaecati illum repellat enim suscipit nihil dolores, sequi possimus
        perferendis veniam odit.
      </p>

      <Button className="w-full mt-5" variant={"outlined"}>
        Ver no Google Maps
      </Button>
    </div>
  );
}
