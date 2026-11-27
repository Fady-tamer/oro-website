"use client";

// icons
import { IoBagOutline } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";

// components
import Logo from "../logo";

// context
import { useMainContext } from "@/context/MainContext";

const Navbar = () => {
  const { openMobileMenu, setOpenMobileMenu } = useMainContext();

  return (
    <header className="px-10 py-8 flex justify-between items-center">
      <div
        onClick={() => {
          setOpenMobileMenu(!openMobileMenu);
        }}
        className="lg:hidden"
      >
        <FaBarsStaggered size={20} />
      </div>

      {/* logo */}
      <Logo />

      <div className="hidden lg:flex items-center gap-10 font-semibold">
        <a href="">New Arrivals</a>
        <a href="">Men</a>
        <a href="">Women</a>
        <a href="">Classics</a>
        <a href="">Sale</a>
      </div>

      <div className="flex items-center gap-4 cursor-pointer">
        <div className="relative mx-2">
          <IoBagOutline size={20} />
          <span className="absolute -top-3 -right-3 w-4 h-4 rounded-full text-xs text-white text-center bg-brand-navy">
            0
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
