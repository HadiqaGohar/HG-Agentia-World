"use client";
import React from "react";
import { BsRobot } from "react-icons/bs";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-black text-white">
      {/* Top Badge */}
      <div className="bg-gray-800 text-xs px-4 py-1 rounded-full flex items-center space-x-2">
        <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
        <span className="text-gray-300">POWERED BY PANAVERSITY</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-4">
        <span className="bg-gradient-to-r from-purple-500 to-teal-500 text-transparent bg-clip-text">
          Enterprise AI Agents
        </span>
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-2 text-gray-300">
        for the Future
      </h2>

      {/* Chatbox UI with Typewriter Effect */}
      <div className="mt-6 py-4 bg-gray-900 p-4 rounded-lg w-full max-w-md flex items-center gap-4 shadow-lg">
        {/* Icon */}
        <span className="text-purple-400">
          <BsRobot size={25} />
        </span>

        {/* Typewriter Text */}
        <div className="text-gray-400">
          <Typewriter
            words={[
              "Hello! I'm your AI agent.",
              "How can I enhance your business?",
              "Ask me anything!",
            ]}
            loop={true}
            cursor
            cursorColor="white"
            
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-md">
        {/* Primary Button */}
        <Link
          href="#"
          className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 px-6 py-3 rounded-full text-white font-semibold overflow-hidden hover:scale-105 transition-transform"
        >
          <p>Deploy Your AI Agent</p> <FaChevronRight />
          <span className="absolute inset-0 w-full h-full bg-white opacity-20 blur-md transform -translate-x-full hover:translate-x-full transition-all duration-700 ease-in-out"></span>
        </Link>

        {/* Secondary Button */}
        <Link
          href="#"
          className="bg-gray-800 px-6 py-3 rounded-full text-white font-semibold hover:bg-gray-700 transition"
        >
          Watch Demo
        </Link>
      </div>
    </section>
  );
};

export default Hero;
