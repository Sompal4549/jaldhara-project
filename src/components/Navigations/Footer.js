import Link from "next/link";
import React from "react";
import Logo from "../Icons/Logo";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { PiArrowRight } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 px-4">
      <div className="container max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Logo */}
          <div className="text-xl font-bold flex items-center justify-center">
            <Link href="#" className="flex items-center justify-center">
              <Logo height={50} width={30} />
              <div className="max-w-[50px] text-xs ml-2 font-bold">
                Jaldhara Polytubes
              </div>
            </Link>
          </div>
          {/* newsletter mobile*/}
          <div className="newsletter block md:hidden mt-8">
            <p className="text-[#D4D4D4] font-bold">Join our newsletter</p>
            <p className="text-[#D4D4D4]">Stay up to date on releases.</p>
            <form
              id="newsletter-subscription"
              className="my-4 flex items-center"
            >
              <input
                className="border-[1px] border-solid border-[rgba(0,0,0,0.1)] bg-white/20 px-3 py-2 rounded-lg"
                type="email"
                placeholder="Enter your email"
              />
              <button
                className="border-[1px] border-solid border-[rgba(0,0,0,0.1)] font-bold bg-white text-primary ml-2 px-3 py-2 rounded-lg"
                type="submit"
              >
                <PiArrowRight className="text-sm" />
              </button>
            </form>
            <p className="text-[#D4D4D4] my-4">
              We care about your data in our privacy policy.
            </p>
          </div>
          <div className="flex gap-10">
            {/* Links */}
            <div className="mr-5">
              <p className="font-bold text-white/80">Resources</p>
              <nav className="space-x-6 text-3xs flex flex-col gap-4 mt-4">
                <Link href="#">Home</Link>
                <Link href="#">About us</Link>
                <Link href="#">Careers</Link>
                <Link href="#">Our Products</Link>
              </nav>
            </div>
            {/* newsletter desktop*/}
            <div className="newsletter hidden md:block">
              <p className="text-[#D4D4D4] font-bold">Join our newsletter</p>
              <p className="text-[#D4D4D4]">Stay up to date on releases.</p>
              <form
                id="newsletter-subscription"
                className="my-4 flex items-center"
              >
                <input
                  className="border-[1px] border-solid border-[rgba(0,0,0,0.1)] bg-white/20 px-3 py-2 rounded-lg"
                  type="email"
                  placeholder="Enter your email"
                />
                <button
                  className="border-[1px] border-solid border-[rgba(0,0,0,0.1)] font-bold bg-white text-primary ml-2 px-3 py-2 rounded-lg"
                  type="submit"
                >
                  <PiArrowRight className="text-sm" />
                </button>
              </form>
              <p className="text-[#D4D4D4] my-4">
                We care about your data in our privacy policy.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-white/50 h-[2px] my-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-2xs leading-3xs capitalize">
            &copy; Jaldhara Polytubes 2025.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              <FaTwitter />
            </a>
            <a href="#" className="hover:underline">
              <FaInstagram />
            </a>
            <a href="#" className="hover:underline">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:underline">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
