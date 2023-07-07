"use client";

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";
import { Controller, useForm } from "react-hook-form";

interface TripReservationProps {
  trip: Trip;
}

interface TripReservationForm {
  guests: number;
  startDate: Date | null;
  endDate: Date | null;
}

export default function TripReservation({ trip }: TripReservationProps) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TripReservationForm>();

  const onSubmit = (data: any) => {
    console.log({ data });
  };

  return (
    <div className="flex flex-col gap-4 px-5">
      <div className="flex gap-3">
        <Controller
          name="startDate"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Data inicial é obrigatória.",
            },
          }}
          render={({ field }) => (
            <DatePicker
              placeholderText="Data de Início"
              className="w-full"
              onChange={field.onChange}
              selected={field.value}
              error={!!errors?.startDate}
              errorMessage={errors?.startDate?.message}
            />
          )}
        />

        <Controller
          name="endDate"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Data final é obrigatória.",
            },
          }}
          render={({ field }) => (
            <DatePicker
              placeholderText="Data Final"
              className="w-full"
              onChange={field.onChange}
              selected={field.value}
              error={!!errors?.endDate}
              errorMessage={errors?.endDate?.message}
            />
          )}
        />
      </div>

      <Input
        {...register("guests", {
          required: {
            value: true,
            message: "Número de hóspedes é obrigatório.",
          },
        })}
        placeholder={`Número de hóspede (max: ${trip.maxGuests})`}
        error={!!errors?.guests}
        errorMessage={errors?.guests?.message}
      />

      <div className="flex justify-between">
        <p className="text-sm font-medium text-primaryDarker">Total: </p>
        <p className="text-sm font-medium text-primaryDarker">R$2500 </p>
      </div>

      <div className="w-full pb-10 border-b border-grayLighter">
        <Button
          onClick={() => handleSubmit(onSubmit)()}
          className="w-full mt-3"
        >
          Reservar agora
        </Button>
      </div>
    </div>
  );
}
