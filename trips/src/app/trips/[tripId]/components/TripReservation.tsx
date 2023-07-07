"use client";

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";

interface TripReservationProps {
  trip: Trip;
}

export default function TripReservation({ trip }: TripReservationProps) {
  return (
    <div className="flex flex-col gap-4 px-5">
      <div className="flex gap-3">
        <DatePicker
          placeholderText="Data de Início"
          onChange={() => {}}
          className="w-full"
        />
        <DatePicker
          placeholderText="Data Final"
          onChange={() => {}}
          className="w-full"
        />
      </div>

      <Input placeholder={`Número de hóspede (max: ${trip.maxGuests})`} />

      <div className="flex justify-between">
        <p className="text-sm font-medium text-primaryDarker">Total: </p>
        <p className="text-sm font-medium text-primaryDarker">R$2500 </p>
      </div>

      <div className="w-full pb-10 border-b border-grayLighter">
        <Button className="w-full mt-3">Reservar agora</Button>
      </div>
    </div>
  );
}
