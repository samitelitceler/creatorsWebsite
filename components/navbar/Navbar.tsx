"use client";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import Modal from "@/components/Modal";
import ContactForm from "../../components/Contactform";
import localFont from 'next/font/local'

const neueMachina = localFont({
  src: '../../public/fonts/NeueMachina-InktrapUltrabold.otf'
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);


  // Disable scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);
  console.log(isMenuOpen);


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
    <header className="relative w-full overflow-x-auto no-scrollbar">

      <div className="relative overflow-hidden">
        <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4 bg-white shadow-md w-full overflow-x-auto no-scrollbar">
          {/* Logo */}
          <div>
            <Image
              src="/images/creatorsLogo.png"
              alt="Creators Logo"
              width={140}
              height={40}
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          {/* Desktop Nav Links + Button (shown only on large screens) */}
          <div className="hidden lg:flex items-center space-x-8 text-black whitespace-nowrap ml-auto">
            <Link href="/" className="text-sm md:text-md font-normal hover:underline">Home</Link>
            <a href="#about" className="text-sm md:text-md font-normal hover:underline">About Us</a>
            <a href="#services" className="text-sm md:text-md font-normal hover:underline">Our Services</a>
            <a href="#campaigns" className="text-sm md:text-md font-normal hover:underline">Campaigns</a>
            <a href="#creators" className="text-sm md:text-md font-normal hover:underline">Creators</a>
            <a href="#clients" className="text-sm md:text-md font-normal hover:underline">Clients</a>

            <button onClick={() => setShowForm(true)} className={`${neueMachina.className} ml-4 cursor-pointer flex items-center gap-2 h-10 px-5 rounded-md bg-black text-white text-sm font-medium border border-black hover:scale-105 transition-all duration-300 hover:bg-yellow-400 hover:text-black border-b-2 border-r-2 border-b-[#FDD300] border-r-[#FDD300] whitespace-nowrap`}>
              Enquire Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>




          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            {isMenuOpen ? (
              <X id="menu-icon" onClick={() => setIsMenuOpen(false)} className="cursor-pointer text-black w-8 h-8" />
            ) : (
              <Menu id="menu-icon" onClick={() => setIsMenuOpen(true)} className="cursor-pointer text-black w-8 h-8" />
            )}
          </div>

        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300" onClick={() => setIsMenuOpen(false)} />
        )}

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden fixed top-0 right-0 w-11/12 max-w-xs h-screen bg-white rounded-l-3xl shadow-2xl px-6 text-black flex flex-col items-end space-y-6 py-6 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-50`}
        >
          {/* Close Button */}
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2 shadow-md transition-colors">
            <X className="w-7 h-7 text-black" />
          </button>

          {/* Logo */}
          <div className="flex items-center w-full justify-center mb-8 mt-2">
            <Image src="/images/creatorsLogo.png" alt="Creators Logo" width={140} height={40} className="w-auto h-10 sm:h-12" />
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col w-full gap-4 mt-4">
            <a href="#" className="hover:text-yellow-400 px-4 py-3 text-lg sm:text-xl rounded-lg transition-colors font-semibold hover:bg-yellow-50 active:bg-yellow-100">Home</a>
            <a href="#about" className="hover:text-yellow-400 px-4 py-3 text-lg sm:text-xl rounded-lg transition-colors font-semibold hover:bg-yellow-50 active:bg-yellow-100">About Us</a>
            <a href="#services" className="hover:text-yellow-400 px-4 py-3 text-lg sm:text-xl rounded-lg transition-colors font-semibold hover:bg-yellow-50 active:bg-yellow-100">Our Services</a>
            <a href="#campaigns" className="hover:text-yellow-400 px-4 py-3 text-lg sm:text-xl rounded-lg transition-colors font-semibold hover:bg-yellow-50 active:bg-yellow-100">Campaigns</a>
            <a href="#creators" className="hover:text-yellow-400 px-4 py-3 text-lg sm:text-xl rounded-lg transition-colors font-semibold hover:bg-yellow-50 active:bg-yellow-100">Creators</a>
            <a href="#clients" className="hover:text-yellow-400 px-4 py-3 text-lg sm:text-xl rounded-lg transition-colors font-semibold hover:bg-yellow-50 active:bg-yellow-100">Clients</a>
          </nav>

          {/* CTA Button */}
          <Button 
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 rounded-full bg-black text-white border border-black px-8 py-4 font-bold text-lg transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:scale-105 w-full mt-8 shadow-lg"
          >
            <span>Enquire Now</span>
            <ArrowRight />
          </Button>
        </div>
      </div>
      <Modal open={showForm} onClose={() => setShowForm(false)}>
        <ContactForm />
      </Modal>
    </header>
  );
}
