"use client"
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
      <div className="">
        <nav className="flex items-center justify-between px-6 py-4 bg-white text-white">
          <div className="">
            <Image src="/images/creatorsLogo.png" alt="Creators Logo" width={200} height={60} />
          </div>
          <div className="hidden  md:flex space-x-8 text-black py-4 mr-8">
            <Link href="/" className="hover:underline">Home</Link>
            <a href="#about" className="hover:underline">About Us</a>
            <a href="#campaigns" className="hover:underline">Campaigns</a>
            <a href="#services" className="hover:underline">Our Services</a>
            <a href="#creators" className="hover:underline">Creators</a>
            <a href="#clients" className="hover:underline">Clients</a>
          </div>
          <Button className="hidden md:block bg-black cursor-pointer hover:bg-yellow-400 hover:text-black text-white border border-[0.5px] border-black  px-6 relative">
            Enquire Now
            <Image
              src="/images/cursorBorderImage.png"
              alt="Cursor"
              width={24}
              height={24}
              className="absolute -bottom-2 -right-2"
            />
          </Button>
          <div className="md:hidden">
            <Menu onClick={() => setIsMenuOpen(!isMenuOpen)} className="cursor-pointer" />
          </div>
        </nav>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white text-black flex flex-col items-center space-y-4 py-4">
            <a href="#" className="hover:text-yellow-400">Home</a>
            <a href="#" className="hover:text-yellow-400">About Us</a>
            <a href="#" className="hover:text-yellow-400">Campaigns</a>
            <a href="#" className="hover:text-yellow-400">Our Services</a>
            <a href="#" className="hover:text-yellow-400">Creators</a>
            <a href="#" className="hover:text-yellow-400">Clients</a>
            <Button className="bg-yellow-400 text-black">Enquire Now</Button>
          </div>
        )}
      </div>
    );
}
  