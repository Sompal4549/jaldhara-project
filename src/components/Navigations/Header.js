import Link from "next/link";
import React from "react";
import Logo from "@/components/Icons/Logo";
import Image from "next/image";
const Header = () => {
  return (
    <header className="fixed font-manrope-sans top-[40px] text-white w-full z-50 left-0 right-0">
      <div className="w-full max-w-[1300px] flex justify-between rounded-lg items-center px-8 py-4 mx-auto shadow-md bg-primary">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center justify-center">
          <Link href="#" className="flex items-center justify-center">
            <Logo />
            <div className="max-w-[50px] text-3xs ml-2 font-light">
              Jaldhara Polytubes
            </div>
          </Link>
        </div>
        {/* Menu items */}
        <nav className="space-x-6 text-3xs hidden md:block">
          <Link href="#" className="hover:text-indigo-600">
            Home
          </Link>
          <Link href="#" className="hover:text-indigo-600">
            About us
          </Link>
          <Link href="#" className="hover:text-indigo-600">
            Careers
          </Link>
          <Link href="#" className="hover:text-indigo-600">
            Our Products
          </Link>
        </nav>
        {/* Contact Us */}
        <div className="contact-us hidden md:block">
          <button className="bg-[#FF622D] text-white px-5 py-2 rounded hover:bg-[#FF622D] transition">
            Contact Us
          </button>
        </div>
        {/* Hamburger icon */}
        <div className="hamburger-menu block md:hidden">
          <Image
            alt="menu-icon"
            width={15}
            height={15}
            src="./menu.svg"
            className="cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
