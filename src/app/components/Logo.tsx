import React from "react";
import { BsRobot } from "react-icons/bs";

function Logo() {
  return (
    <div className="flex items-center space-x-2">
      {/* Robot Icon */}
      <BsRobot size={25} className="text-purple-500" />

      {/* Gradient Logo Text (Starts White, Transitions to Gradient) */}
      <h1 className="text-white bg-gradient-to-r from-white via-purple-500 to-blue-500 bg-clip-text text-transparent text-lg font-semibold">
        Agentia World
      </h1>
    </div>
  );
}

export default Logo;
