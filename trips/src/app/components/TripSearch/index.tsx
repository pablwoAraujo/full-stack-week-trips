"use client";

import Button from "../../../components/Button";
import CurrencyInput from "../../../components/CurrencyInput";
import DatePicker from "../../../components/DatePicker";
import Input from "../../../components/Input";

export default function TripSearch() {
  return (
    <div className="container p-5 mx-auto bg-center bg-no-repeat bg-cover bg-search-background">
      <h1 className="text-2xl font-semibold text-center text-primaryDarker">
        Encontre sua próxima <span className="text-primary">viagem!</span>
      </h1>

      <div className="flex flex-col gap-4 mt-5">
        <Input placeholder="Onde você quer ir?" />

        <div className="flex gap-4">
          <DatePicker
            placeholderText="Primeira data"
            onChange={() => {}}
            className="w-full"
          />

          <CurrencyInput placeholder="Orçamento" allowDecimals={false} />
        </div>
        <Button onClick={() => {}}>Buscar</Button>
      </div>
    </div>
  );
}
