import { FaEnvelope, FaGlobe, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="bg-black text-white py-16 px-8">
         <div className="text-center mb-12">
                <h2 className="text-4xl my-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Get in Touch
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                Ready to transform your business with AI?
                </p>
            </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Contact Information */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-purple-400">
              <FaEnvelope />
              <span>contact@agentiaworld.com</span>
            </div>
            <div className="flex items-center gap-3 text-purple-400">
              <FaGlobe />
              <span>www.agentiaworld.com</span>
            </div>
            <div className="flex items-center gap-4 mt-4 text-gray-400 text-2xl">
              <FaGithub className="cursor-pointer hover:text-white" />
              <FaLinkedin className="cursor-pointer hover:text-white" />
              <FaTwitter className="cursor-pointer hover:text-white" />
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div>
          {/* <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-400 mb-6">
            Ready to transform your business with AI?
          </p> */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-gray-900 p-3 rounded-lg text-white focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-gray-900 p-3 rounded-lg text-white focus:outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-gray-900 p-3 rounded-lg text-white focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              className="w-full bg-gray-900 p-3 rounded-lg text-white focus:outline-none h-32"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 rounded-lg text-white text-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}