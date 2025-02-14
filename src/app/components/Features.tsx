'use client'
import { motion } from "framer-motion";
import { FaBrain, FaMicrochip, FaCode, FaGlobe } from "react-icons/fa";

const neuralCapabilities = [
  { title: "Autonomous Learning", description: "Self-evolving neural networks that adapt through reinforcement learning", icon: <FaBrain size={30} /> },
  { title: "Multi-Modal Intelligence", description: "AI capable of processing text, voice, and visual data", icon: <FaMicrochip size={30} /> },
  { title: "Cognitive Integration", description: "Seamless integration with advanced neural APIs", icon: <FaCode size={30} /> },
  { title: "Ethical AI Framework", description: "Built-in ethical guidelines ensuring responsible AI", icon: <FaGlobe size={30} /> },
];

const Features = () => {
  return (
    <div className="text-center py-10 bg-black text-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 ">
        Neural Capabilities
      </h2>
      <p className="text-gray-400 mt-2">Powered by next-generation artificial intelligence</p>

      {/* Cards */}
      <div className="mt-8 flex justify-center gap-6 flex-wrap">
        {neuralCapabilities.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ rotateY: 30 }} // Rotate 30% on hover
            transition={{ duration: 0.4 }}
            className="w-64 p-6 bg-[#111] rounded-lg shadow-lg border border-gray-800 hover:border-purple-500 cursor-pointer transform perspective-1000"
          >
            <div className="flex justify-center items-center w-14 h-14 mx-auto rounded-lg bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 ">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-400 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
