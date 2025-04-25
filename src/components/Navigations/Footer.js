import Link from "next/link";
import React from "react";
import Logo from "../Icons/Logo";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { PiArrowRight, PiArrowRightThin } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 px-4">
      <div className="container max-w-[1200px] mx-auto px-8">
        <div className="flex flex-row justify-between items-start">
          {/* Logo */}
          <div className="text-xl font-bold flex items-center justify-center">
            <Link href="#" className="flex items-center justify-center">
              <Logo />
              <div className="max-w-[50px] text-3xs ml-2 font-light">
                Jaldhara Polytubes
              </div>
            </Link>
          </div>
          <div className="flex">
            {/* Links */}
            <div>
              <p className="font-bold text-white">Resources</p>
              <nav className="space-x-6 text-3xs flex flex-col">
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
            {/* newsletter */}
            <div className="newsletter">
              <p>Join our newsletter</p>
              <p>Stay up to date on releases.</p>
              <form id="newsletter-subscription">
                <input
                  className="border-[1px] border-solid border-[rgba(0,0,0,0.1)] bg-white/20 px-3 py-2 rounded-lg"
                  type="email"
                />
                <button
                  className="border-[1px] border-solid border-[rgba(0,0,0,0.1)] font-bold bg-white text-primary ml-2 px-3 py-2 rounded-lg"
                  type="submit"
                >
                  <PiArrowRight />
                </button>
              </form>
              <p>We care about your data in our privacy policy.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">&copy; Jaldhara Polytubes 2025.</p>
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
