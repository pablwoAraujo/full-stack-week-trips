import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-5 bg-walterWhite">
      <Image
        src={"/logo.png"}
        width={133}
        height={23}
        alt={"Full Stack Week"}
      />

      <p className="text-sm font-medium text-center text-primaryDarker">
        Desenvolvido por{" "}
        <span className="font-semibold text-primary">Pablwo Araújo</span> <br />{" "}
        Durante a{" "}
        <span className="font-semibold text-primary">Full Stack Week</span>.
      </p>
    </div>
  );
}
