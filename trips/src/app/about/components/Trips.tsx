import { prisma } from "@/lib/prisma";

const getTrips = async () => {
  return await prisma.trip.findMany();
};

const Trips = async () => {
  const data = await getTrips();

  console.log({ data });

  return <h1>Trips</h1>;
};

export default Trips;
