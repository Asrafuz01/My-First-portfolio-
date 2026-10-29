"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About & Skills", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm fixed w-full top-0 z-50 border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-xl font-extrabold text-blue-950 tracking-tight">
              Dev<span className="text-sky-500">.Portfolio</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 font-semibold text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-blue-950 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-blue-950 text-white px-5 py-2.5 rounded-xl hover:bg-sky-600 transition-all shadow-sm font-bold text-xs uppercase tracking-wider"
            >
              Contact Me
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-950 p-2 rounded-lg hover:bg-slate-100"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl px-4 pt-3 pb-6 space-y-2 absolute w-full left-0">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-slate-600 hover:text-blue-950 py-2.5 px-3 rounded-lg hover:bg-slate-50 font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 px-3">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block bg-blue-950 text-white text-center py-3 rounded-xl font-bold text-sm shadow-md"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
