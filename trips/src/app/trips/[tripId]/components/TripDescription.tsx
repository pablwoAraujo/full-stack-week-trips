interface TripDesciptionProps {
  description: string;
}

export default function TripDesciption({ description }: TripDesciptionProps) {
  return (
    <div className="flex flex-col p-5">
      <h2 className="font-semibold text-primaryDarker">Sobre a viagem</h2>
      <p className="mt-1 text-xs leading-5 text-justify text-primaryDarker">
        {description}
      </p>
    </div>
  );
}
