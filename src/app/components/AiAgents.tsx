'use client'
import { FaRobot, FaNetworkWired, FaShieldAlt } from "react-icons/fa";

const aiAgents = [
  { title: "Autonomous Agents", description: "Self-learning AI systems for real-time decision-making", icon: <FaRobot size={30} /> },
  { title: "Distributed AI", description: "AI-powered networks for large-scale automation", icon: <FaNetworkWired size={30} /> },
  { title: "Secure AI Agents", description: "Privacy-focused AI with end-to-end encryption", icon: <FaShieldAlt size={30} /> },
];

const AIAgents = () => {
  return (
    <div className="text-center py-10 bg-black text-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
        AI Agents
      </h2>
      <p className="text-gray-400 mt-2">Empowering industries with intelligent AI-driven agents</p>

      {/* Cards */}
      <div className="mt-8 flex justify-center gap-6 flex-wrap">
        {aiAgents.map((agent, index) => (
          <div
            key={index}
            className="w-72 p-6 bg-[#111] text-left  hover:scale-105 rounded-lg shadow-lg border border-gray-800 hover:border-purple-500 transition-all duration-300"
          >
            <div className="flex  justify-center items-center w-14 h-14 mr-auto rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
              {agent.icon}
            </div>
            <h3 className="text-xl font-semibold mt-4">{agent.title}</h3>
            <p className="text-gray-400 mt-2">{agent.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIAgents;
