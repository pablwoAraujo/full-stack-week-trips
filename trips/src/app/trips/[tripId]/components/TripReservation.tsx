"use client";

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { addDays, differenceInDays } from "date-fns";
import { Controller, useForm } from "react-hook-form";

interface TripReservationProps {
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
  maxGuests,
  pricePerDay,
  reservationStartDate,
  reservationEndDate,
}: TripReservationProps) {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TripReservationForm>();

  const onSubmit = (data: any) => {
    console.log({ data });
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
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            type="number"
            defaultValue={1}
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
            value={value}
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
            ? differenceInDays(endDate, startDate) * pricePerDay * amount
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
