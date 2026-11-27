"use client";

// icons
import { IoClose } from "react-icons/io5";

// components
import Logo from "../logo";

// context
import { useMainContext } from "@/context/MainContext";

const MobileMenu = () => {
  const { openMobileMenu, setOpenMobileMenu } = useMainContext();

  return (
    <div
      className={`absolute top-0 left-0 z-10 p-4 w-full h-full flex flex-col gap-10 text-brand-white bg-brand-navy duration-300 ${openMobileMenu ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="flex justify-between items-center">
        <Logo />
        <div
          onClick={() => {
            setOpenMobileMenu(!openMobileMenu);
          }}
          className="w-10 h-10 flex justify-center items-center rounded-2xl text-brand-navy bg-brand-white"
        >
          <IoClose size={25} />
        </div>
      </div>
      <div className="flex flex-col gap-5 font-semibold">
        <a href="">New Arrivals</a>
        <a href="">Men</a>
        <a href="">Women</a>
        <a href="">Classics</a>
        <a href="">Sale</a>
      </div>
    </div>
  );
};

export default MobileMenu;
