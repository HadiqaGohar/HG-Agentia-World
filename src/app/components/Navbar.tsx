"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { BsRobot } from "react-icons/bs";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "#" },
    { name: "Technology", path: "#technology" },
    { name: "Features", path: "#features" },
    { name: "Agents", path: "#agents" },
    { name: "Pricing", path: "#pricing" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <header className="bg-black py-2 px-6 flex gap-8 justify-between items-center relative">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8 text-gray-300">
        {navLinks.map(({ name, path }) => (
          <div key={name} className="group flex flex-col items-center">
            <Link href={path} className="hover:text-white transition duration-300">
              {name}
            </Link>
            <hr className="w-0 group-hover:w-full border-b border-purple-500 transition-all duration-300" />
          </div>
        ))}
      </nav>

      {/* CTA Button (Desktop) */}
      <Link
        href="#contact"
        className="hidden md:flex bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500  px-5 py-2 rounded-full text-white font-semibold hover:scale-105 transition-transform"
      >
        Launch Console
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <CgMenuRight size={28} />
      </button>

      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-80 opacity-90 bg-gray-900 text-white p-6 flex flex-col z-50 shadow-lg border border-l-2 border-teal-500">
            {/* Close Button */}
            <button
              className="self-end text-3xl text-teal-500 hover:text-purple-400 transition"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <IoMdClose />
            </button>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-6 mt-8 text-lg flex-grow">
              {navLinks.map(({ name, path }) => (
                <Link
                  key={name}
                  href={path}
                  className="flex space-x-2 items-center gap-2 text-white group transition"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <BsRobot size={25} className="text-teal-400" />
                  </span>
                  <span className="group-hover:text-teal-400  transition-all duration-300">{name}</span>
                </Link>
              ))}
            </nav>

            {/* Move Button to Bottom */}
            <div className="mt-auto ">
              <Link
                href="#contact"
                className="w-full text-center bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 px-16  py-3 rounded-full text-white font-semibold hover:scale-105 transition-transform"
              >
                Launch Console
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

export default Navbar;
