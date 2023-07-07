import QuickSearchTag  from "./QuickSearchTag ";

export default function QuickSearch() {
  return (
    <div className="container p-5 mx-">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h1 className="px-5 font-medium text-grayPrimary whitespace-nowrap">
          Tente pesquisar por
        </h1>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>

      <div className="flex justify-between w-full mt-5">
        <QuickSearchTag size={35} source={"/hotel-icon.png"} alt={"Hotel"} text={"Hotel"} />
        <QuickSearchTag size={35} source={"/farm-icon.png"} alt={"Fazenda"} text={"Fazenda"} />
        <QuickSearchTag size={35} source={"/cottage-icon.png"} alt={"Chalé"} text={"Chalé"} />
        <QuickSearchTag size={35} source={"/inn-icon.png"} alt={"Pousada"} text={"Pousada"} />
      </div>
    </div>
  );
}
