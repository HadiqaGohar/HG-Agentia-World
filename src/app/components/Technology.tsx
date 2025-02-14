'use client'
import { motion } from "framer-motion";
import { FaBrain, FaMicrochip, FaCode, FaGlobe } from "react-icons/fa";

const technologies = [
  { title: "Neural Networks", description: "Advanced neural architectures for complex decision making", icon: <FaBrain size={30} /> },
  { title: "Deep Learning", description: "Sophisticated deep learning models for pattern recognition", icon: <FaMicrochip size={30} /> },
  { title: "Advanced ML", description: "Cutting-edge machine learning algorithms", icon: <FaCode size={30} /> },
  { title: "Global Scale", description: "Distributed AI processing across global networks", icon: <FaGlobe size={30} /> },
];

const TechnologySection = () => {
  return (
    <div className="text-center py-10 bg-black text-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 ">
        Powered by Advanced AI
      </h2>
      <p className="text-gray-400 mt-2">Built on cutting-edge neural architectures</p>

      {/* Cards */}
      <div className="mt-8 flex justify-center gap-6 flex-wrap">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ rotateY: 30 }} // Rotate 30% on hover
            transition={{ duration: 0.4 }}
            className="w-64 p-6 bg-[#111] rounded-lg shadow-lg border border-gray-800 hover:border-purple-500 cursor-pointer transform perspective-1000"
          >
            <div className="flex justify-center items-center w-14 h-14 mx-auto rounded-lg bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 ">
              {tech.icon}
            </div>
            <h3 className="text-xl font-semibold mt-4">{tech.title}</h3>
            <p className="text-gray-400 mt-2">{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechnologySection;
