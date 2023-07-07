import TripItem from "@/components/TripItem";
import { prisma } from "@/lib/prisma";
import { Trip } from "@prisma/client";

async function getTrips() {
  const trips = await prisma.trip.findMany({});

  return trips;
}

export default async function RecommendedTrips() {
  const data = await getTrips();

  return (
    <div className="container p-5 mx-auto">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className="px-5 font-medium text-grayPrimary whitespace-nowrap">
          Destinos Recomendados
        </h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>

      <div className="flex flex-col items-center gap-5 mt-5">
        {data.map((trip: Trip) => (
          <>
            <TripItem key={trip.id} trip={trip}/>
          </>
        ))}
      </div>
    </div>
  );
}
