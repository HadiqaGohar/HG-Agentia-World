import { FaCheckCircle } from "react-icons/fa";

const Pricing = () => {
    return (
        <div className="bg-black text-white py-16 px-4 ">
            <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                    Choose Your Plan
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Scale your AI capabilities with our flexible pricing
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-8 max-w-screen-xl mx-auto">
                {/* Starter Plan */}
                <div className="bg-transparent p-8 rounded-xl shadow-lg w-full md:w-1/3 border border-blue-500 relative hover:scale-105 technology-card">
                    <div className="absolute inset-0 bg-blue-900 opacity-50 rounded-xl"></div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold my-4">Starter</h3>
                        <p className="text-4xl font-bold mb-4">
                            $499<span className="text-lg">/month</span>
                        </p>
                        <ul className="mt-4 space-y-2 text-gray-300">
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-blue-400" /> 2 AI Agent Instances
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-blue-400" /> Basic Neural Processing
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-blue-400" /> 24/7 Support
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-blue-400" /> Weekly Analytics
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-blue-400" /> Basic Integration Support
                            </li>
                        </ul>
                        <button className="mt-6 w-full py-2 rounded-lg text-white bg-gradient-to-r from-blue-500 via-blue-500 to-purple-500">
                            Get Started
                        </button>
                    </div>
                </div>


                {/* Professional Plan */}
                <div className="bg-transparent p-8 rounded-xl shadow-lg w-full md:w-1/3 border border-purple-500 relative hover:scale-105 technology-card ">
                    <div className="absolute inset-0 bg-purple-900 opacity-50 rounded-xl"></div>
                    <div className="relative z-10 ">
                        <h3 className="text-xl font-bold my-4">Professional</h3>
                        <p className="text-4xl font-bold mb-4">
                            $999<span className="text-lg">/month</span>
                        </p>
                        <ul className="mt-4 space-y-2 text-gray-300">
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-blue-300" /> 10 AI Agent Instances
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-blue-300" /> Advanced Neural Networks
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-blue-300" /> Priority Support
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-blue-300" /> Real-time Analytics
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-blue-300" /> Custom Integration
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-blue-300" /> API Access
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-blue-300" /> Advanced Security
                            </li>
                        </ul>
                        <button className="mt-6 w-full py-2 rounded-lg text-white bg-gradient-to-r from-purple-500 via-purple-500 to-blue-500">
                            Get Started
                        </button>

                    </div>
                </div>

                {/* Enterprise Plan */}
                <div className="bg-transparent p-8 rounded-xl shadow-lg w-full md:w-1/3 border border-blue-500 relative hover:scale-105 technology-card">
                    <div className="absolute inset-0 bg-blue-900 opacity-50 rounded-xl"></div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold my-4">Enterprise</h3>
                        <p className="text-4xl font-bold mb-4">$Custom</p>
                        <ul className="mt-4 space-y-2 text-gray-300">
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-blue-400" /> Unlimited Agents
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-blue-400" /> Full Neural Suite
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-blue-400" /> Dedicated Support Team
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-blue-400" /> Advanced Analytics Dashboard
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-blue-400" /> Custom Development
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-blue-400" /> Full API Access
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-blue-400" /> Enterprise Security
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-blue-400" /> Custom Training
                            </li>
                        </ul>
                        <button className="mt-6 w-full py-2 rounded-lg text-white bg-gradient-to-r from-blue-500 via-blue-500 to-purple-500">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
