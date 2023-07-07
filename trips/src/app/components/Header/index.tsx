"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { status, data } = useSession();

  const handleLoginClick = () => signIn();
  const handleLogoutClick = () => {
    setMenuIsOpen(false);
    signOut();
  };
  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  return (
    <div className="container flex items-center justify-between p-5 py-0 h-[88px] mx-auto">
      <div className="relative h-[32px] w-[182px]">
        <Image src={"/logo.png"} fill alt={"logo"} />
      </div>

      {status === "unauthenticated" && (
        <button
          className={"text-primary text-sm font-semibold"}
          onClick={handleLoginClick}
        >
          Login
        </button>
      )}

      {status === "authenticated" && data.user && (
        <div
          className={
            "flex items-center gap-3 border-grayLighter p-2 px-3 border border-solid rounded-full relative"
          }
        >
          <AiOutlineMenu size={24} onClick={handleMenuClick} className="cursor-pointer"/>
          <Image
            height={30}
            width={30}
            alt={data.user.name!}
            src={data.user.image!}
            className={"rounded-full shadow-md"}
          />

          {menuIsOpen && (
            <div className="absolute left-0 z-50 flex items-center justify-center w-full h-full bg-white rounded-lg shadow-md top-14">
              <button
                className={"text-primary text-sm font-semibold"}
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
