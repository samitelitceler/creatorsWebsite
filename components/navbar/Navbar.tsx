"use client";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Disable scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }
  }, [isMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement; // Type assertion
      if (target && !target.closest("#mobile-menu") && !target.closest("#menu-icon")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        {/* Logo */}
        <div>
          <Image src="/images/creatorsLogo.png" alt="Creators Logo" width={200} height={60} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-black py-4 mr-8">
          <Link href="/" className="hover:underline">Home</Link>
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#campaigns" className="hover:underline">Campaigns</a>
          <a href="#services" className="hover:underline">Our Services</a>
          <a href="#creators" className="hover:underline">Creators</a>
          <a href="#clients" className="hover:underline">Clients</a>
        </div>

        {/* Enquire Button (Desktop) */}
        <Button className="hidden md:block bg-black cursor-pointer hover:bg-yellow-400 hover:text-black text-white border border-[0.5px] border-black px-6 relative">
          Enquire Now
          <Image
            src="/images/cursorBorderImage.png"
            alt="Cursor"
            width={24}
            height={24}
            className="absolute -bottom-2 -right-2"
          />
        </Button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {isMenuOpen ? (
            <X id="menu-icon" onClick={() => setIsMenuOpen(false)} className="cursor-pointer text-black" />
          ) : (
            <Menu id="menu-icon" onClick={() => setIsMenuOpen(true)} className="cursor-pointer text-black" />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white px-4 text-black flex flex-col items-left space-y-6 py-4 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
           <div className="flex items-center w-full justify-between px-4">
          <Image src="/images/creatorsLogo.png" alt="Creators Logo" width={200} height={60} />
         <X id="menu-icon" onClick={() => setIsMenuOpen(false)} className="cursor-pointer items-end text-black" />
        </div>

       
       
        <a href="#" className="hover:text-yellow-400 px-4 text-lg">Home</a>
        <a href="#about" className="hover:text-yellow-400 px-4 text-lg">About Us</a>
        <a href="#campaigns" className="hover:text-yellow-400 px-4 text-lg">Campaigns</a>
        <a href="#services" className="hover:text-yellow-400 px-4 text-lg">Our Services</a>
        <a href="#creators" className="hover:text-yellow-400 px-4 text-lg">Creators</a>
        <a href="#clients" className="hover:text-yellow-400 px-4 text-lg">Clients</a>
        <Button className="bg-yellow-400 w-1/2 text-black  px-8 py-2">Enquire Now</Button>
      </div>
    </div>
  );
}
