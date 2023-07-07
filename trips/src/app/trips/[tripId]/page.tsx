import { prisma } from "@/lib/prisma";
import TripDesciption from "./components/TripDescription";
import TripHeader from "./components/TripHeader";
import TripHighlights from "./components/TripHighlights";
import TripReservation from "./components/TripReservation";

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
      <TripReservation trip={trip} />
      <TripDesciption description={trip.description} />
      <TripHighlights highlights={trip.highlights}/>
    </div>
  );
}
