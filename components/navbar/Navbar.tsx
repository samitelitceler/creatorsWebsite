"use client";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Disable scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target && !target.closest("#mobile-menu") && !target.closest("#menu-icon")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <nav className="flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 py-4 bg-white shadow-md">
        {/* Logo */}
        <div>
          <Image src="/images/creatorsLogo.png" alt="Creators Logo" width={140} height={40} className="w-auto h-10 sm:h-12" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 lg:space-x-8 text-black py-2 mr-2 ml-auto">
          <Link href="/" className="hover:underline text-base lg:text-xl font-normal">Home</Link>
          <a href="#about" className="hover:underline text-base lg:text-xl font-normal">About Us</a>
          <a href="#campaigns" className="hover:underline text-base lg:text-xl font-normal">Campaigns</a>
          <a href="#services" className="hover:underline text-base lg:text-xl font-normal">Our Services</a>
          <a href="#creators" className="hover:underline text-base lg:text-xl font-normal">Creators</a>
          <a href="#clients" className="hover:underline text-base lg:text-xl font-normal">Clients</a>
        </div>

        {/* Enquire Button (Desktop) */}
        <button className="hidden md:flex items-center gap-2 rounded-full bg-black text-white border border-black px-4 lg:px-6 py-2 lg:py-3 font-medium transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-yellow-400 hover:text-black border-b-2 border-r-2 border-b-[#FDD300] border-r-[#FDD300] ml-2">
          Enquire Now <ArrowRight className="w-5 h-5" />
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {isMenuOpen ? (
            <X id="menu-icon" onClick={() => setIsMenuOpen(false)} className="cursor-pointer text-black w-8 h-8" />
          ) : (
            <Menu id="menu-icon" onClick={() => setIsMenuOpen(true)} className="cursor-pointer text-black w-8 h-8" />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white px-4 text-black flex flex-col items-end space-y-6 py-4 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center w-full justify-between px-2 sm:px-4">
          <Image src="/images/creatorsLogo.png" alt="Creators Logo" width={140} height={40} className="w-auto h-10 sm:h-12" />
          <X id="menu-icon" onClick={() => setIsMenuOpen(false)} className="cursor-pointer items-end text-black w-8 h-8" />
        </div>

        <a href="#" className="hover:text-yellow-400 px-4 text-lg sm:text-xl">Home</a>
        <a href="#about" className="hover:text-yellow-400 px-4 text-lg sm:text-xl">About Us</a>
        <a href="#campaigns" className="hover:text-yellow-400 px-4 text-lg sm:text-xl">Campaigns</a>
        <a href="#services" className="hover:text-yellow-400 px-4 text-lg sm:text-xl">Our Services</a>
        <a href="#creators" className="hover:text-yellow-400 px-4 text-lg sm:text-xl">Creators</a>
        <a href="#clients" className="hover:text-yellow-400 px-4 text-lg sm:text-xl">Clients</a>
        <Button className="flex items-center gap-2 rounded-full bg-black text-white border border-black px-6 py-3 font-medium transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:scale-105 w-full sm:w-1/2 mx-auto mt-4">
          <span>Enquire Now</span>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
