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
            <a href="/" className="hover:text-slate-300 transition">Tasks</a>
            <a href="/tasklist" className="hover:text-slate-300 transition">List</a>
            <a href="/about" className="hover:text-slate-300 transition">About</a>
            <a href="/contact" className="hover:text-slate-300 transition">Contact</a>
          </div>
  
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
  
         {/* Mobile Links */}
        {isOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 bg-[#111] p-4 rounded-lg">
            <a href="/" className="hover:text-slate-300 transition">Tasks</a>
            <a href="/tasklist" className="hover:text-slate-300 transition">List</a>
            <a href="/about" className="hover:text-slate-300 transition">About</a>
            <a href="/contact" className="hover:text-slate-300 transition">Contact</a>
            </div>
        )}
      </nav>
    );
  }