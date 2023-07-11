"use client";

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { addDays, differenceInDays } from "date-fns";
import { Controller, useForm } from "react-hook-form";

interface TripReservationProps {
  tripId: string;
  maxGuests: number;
  pricePerDay: number;
  reservationStartDate: Date;
  reservationEndDate: Date;
}

interface TripReservationForm {
  guests: number;
  startDate: Date | null;
  endDate: Date | null;
  amountOfReservations: number;
}

export default function TripReservation({
  tripId,
  maxGuests,
  pricePerDay,
  reservationStartDate,
  reservationEndDate,
}: TripReservationProps) {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    setError,
    watch,
  } = useForm<TripReservationForm>();

  const onSubmit = async (data: TripReservationForm) => {
    const response = await fetch("http://localhost:3000/api/trips/check", {
      method: "POST",
      body: JSON.stringify({
        startDate: data.startDate,
        endDate: data.endDate,
        tripId: tripId,
      }),
    });

    const res = await response.json();
    console.log({ res });

    if (res?.error?.message === "TRIP_ALREADY_RESERVED") {
      setError("startDate", {
        type: "manual",
        message: "Esta data já está reservada.",
      });

      setError("endDate", {
        type: "manual",
        message: "Esta data já está reservada.",
      });
    }

    if (res?.error?.message === "INVALID_START_DATE") {
      setError("startDate", {
        type: "manual",
        message: "Data inválida.",
      });
    }

    if (res?.error?.message === "INVALID_END_DATE") {
      setError("endDate", {
        type: "manual",
        message: "Data inválida.",
      });
    }
  };

  const startDate = watch("startDate");
  const endDate = watch("endDate");
  const amount = watch("amountOfReservations");

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
              minDate={reservationStartDate}
              maxDate={endDate ? addDays(endDate, -1) : reservationEndDate}
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
              minDate={startDate ? addDays(startDate, 1) : reservationStartDate}
              maxDate={reservationEndDate}
            />
          )}
        />
      </div>

      <Controller
        name="amountOfReservations"
        control={control}
        render={({ field: { onChange } }) => (
          <Input
            type="number"
            min={1}
            max={maxGuests}
            {...register("guests", {
              validate: {
                biggerThanZero: (value) =>
                  value > 0 || "Número de hóspedes precisa maior que zero.",
                maximumAmount: (value) =>
                  value <= maxGuests || `Número de hóspede (max: ${maxGuests})`,
              },
              required: {
                value: true,
                message: "Número de hóspedes é obrigatório.",
              },
            })}
            onChange={onChange}
            placeholder={`Número de hóspede (max: ${maxGuests})`}
            error={!!errors?.guests}
            errorMessage={errors?.guests?.message}
          />
        )}
      />

      <div className="flex justify-between">
        <p className="text-sm font-medium text-primaryDarker">Total: </p>
        <p className="text-sm font-medium text-primaryDarker">
          R$
          {startDate && endDate && amount
            ? differenceInDays(endDate, startDate) * pricePerDay
            : "0"}
        </p>
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
