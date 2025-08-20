"use client"

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="items-center text-white p-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 relative">
          {/* Logo */}
  
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="rounded-2xl hover:bg-amber-50 hover:text-gray-950 hover:scale-105 transition-transform">Tasks</a>

            <a href="/tasklist" className="rounded-2xl hover:bg-amber-50 hover:text-gray-950 hover:scale-105 transition-transform">List</a>

            <a href="/about" className="rounded-2xl hover:bg-amber-50 hover:text-gray-950 hover:scale-105 transition-transform">About</a>
            
            <a href="/contact" className="rounded-2xl hover:bg-amber-50 hover:text-gray-950 hover:scale-105 transition-transform">Contact</a>
          </div>
  
          {/* Mobile Menu Button */}
          <button className="md:hidden rounded-2xl hover:bg-amber-50 hover:text-gray-950 hover:scale-105 transition-transform" onClick={toggleMenu}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
  
         {/* Mobile Links */}
        {isOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 bg-[#111] p-4 rounded-lg">
            <a href="/" className="rounded-2xl hover:bg-amber-50 hover:text-gray-950 hover:scale-105 transition-transform">Tasks</a>
            <a href="/tasklist" className="rounded-2xl hover:bg-amber-50 hover:text-gray-950 hover:scale-105 transition-transform">List</a>
            <a href="/about" className="rounded-2xl hover:bg-amber-50 hover:text-gray-950 hover:scale-105 transition-transform">About</a>
            <a href="/contact" className="rounded-2xl hover:bg-amber-50 hover:text-gray-950 hover:scale-105 transition-transform">Contact</a>
            </div>
        )}
      </nav>
    );
  }