import { prisma } from "@/lib/prisma";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import TripHeader from "./components/TripHeader";

type TypeTripDetails = {
  params: { tripId: string };
};

const getTripDetails = async (tripId: string) => {
  const trip = await prisma.trip.findUnique({ where: { id: tripId } });

  return trip;
};

export default async function TripDetails({ params }: TypeTripDetails) {
  const trip = await getTripDetails(params.tripId);

  if (trip === null) return null;

  return (
    <div className="container mx-auto">
      <TripHeader trip={trip} />
    </div>
  );
}
