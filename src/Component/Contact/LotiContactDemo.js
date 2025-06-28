import React, { useState } from "react";
import AnimatedGradientBackground from "./LotiContact";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Mail, Linkedin, Github, MessageSquare, X } from "lucide-react";
import ChatPage from '../ChatBot/Chatbot'

const MessageBox = ({ onClose }) => (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-70  flex justify-center items-center">
    <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-[600px] mt-12 max-w-md text-black relative">
      <button onClick={onClose} className="absolute top-3 right-3 text-black mt-5 hover:text-red-500">
        <X size={24} />
      </button>
      <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
      <ChatPage/>
    </div>
  </div>
);

const DemoVariant1 = () => {
  const [showMessageBox, setShowMessageBox] = useState(false);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black text-gray-300">
      {/* Backgrounds */}
      <AnimatedGradientBackground />
      <div className="absolute inset-0 z-0 animate-pulse bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800 via-transparent to-transparent opacity-20" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-wide">
          Contact Us
        </h1>

        {/* Lottie Animation */}
        <div className="w-full max-w-md mx-auto mb-10">
          <DotLottieReact
            src="https://lottie.host/8cf4ba71-e5fb-44f3-8134-178c4d389417/0CCsdcgNIP.json"
            loop
            autoplay
          />
        </div>

        {/* Contact Section */}
        <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row justify-between items-center md:items-start gap-12 text-left">
          {/* Left: Contact Links */}
          <div className="flex flex-col gap-6 text-xl md:text-2xl items-start w-full md:w-1/2">
            <a href="mailto:akshatydv15@email.com" className="flex items-center gap-4 hover:text-white transition duration-300">
              <Mail size={32} /> akshatydv15@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/akshat-yadav-600a01304/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-white transition duration-300">
              <Linkedin size={32} /> LinkedIn
            </a>
            <a href="http://github.com/aakshat15" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-white transition duration-300">
              <Github size={32} /> GitHub
            </a>
            <button
              onClick={() => setShowMessageBox(true)}
              className="flex items-center gap-4 hover:text-white transition duration-300"
            >
              <MessageSquare size={32} /> Message
            </button>
          </div>

          {/* Right: Description */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl md:text-5xl font-semibold text-white mb-4 pb-6">
              Freelance Opportunities
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              Have an exciting project you need help with? <br />
              Send me an email or contact me via instant message!
            </p>
          </div>
        </div>
      </div>

      {/* Message Box Component */}
      {showMessageBox && <MessageBox onClose={() => setShowMessageBox(false)} />}
    </div>
  );
};

export default DemoVariant1;
