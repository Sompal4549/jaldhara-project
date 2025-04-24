import Link from "next/link";
import React from "react";
import Logo from "@/components/Icons/Logo";
const Header = () => {
  return (
    <header className="fixed top-[40px] text-white w-full z-50 left-0 right-0">
      <div className="w-full max-w-[1300px] flex justify-between rounded-lg items-center px-4 py-3 mx-auto shadow-md bg-primary">
        <div className="text-xl font-bold">
          <Link href="#" className="flex">
            <Logo />
            <div></div>
          </Link>
        </div>
        <nav className="space-x-6 hidden md:block">
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
      </div>
    </header>
  );
};

export default Header;
