import { BsRobot } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-white text-lg font-semibold flex items-center gap-2">
            <span className="text-purple-500 text-xl gap-2"><BsRobot size={25} className="text-purple-500" /></span> Agentia World
          </h2>
          <p className="mt-2 text-sm">
            Next-generation AI agents powering the future of enterprise intelligence.
          </p>
          <div className="flex gap-3 mt-3">
            <FaGithub className="text-xl cursor-pointer hover:text-white" />
            <FaLinkedin className="text-xl cursor-pointer hover:text-white" />
            <FaTwitter className="text-xl cursor-pointer hover:text-white" />
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold">Product</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Features</li>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>API</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold">Company</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold">Legal</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Security</li>
            <li>Compliance</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; 2025 Agentia World. Powered by Panaversity. All rights reserved.
      </div>
    </footer>
  );
}