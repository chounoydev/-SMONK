import React from "react";
import { Send } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] text-gray-600 pt-16 pb-10 mt-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        
        {/* LEFT SIDE */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <img
              src="smonk.jpg"
              alt="SpaceMonkey Logo"
              className="w-12 h-12 rounded-full object-cover border border-gray-300"
            />
            <h2 className="font-semibold text-lg text-gray-900">
              SpaceMonkey
            </h2>
          </div>

          <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
            The next generation of meme coins. Built by the community, for the community.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3 mt-5">
            <a
              href="https://t.me/smonk2026"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
            >
              <Send className="w-4 h-4 text-gray-700" />
            </a>

            <a
              href="https://x.com/Thedev2026"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
            >
              <FaXTwitter className="w-4 h-4 text-gray-700" />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - QUICK LINKS */}
        <div className="md:text-right">
          <h3 className="text-gray-900 font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <a href="#home" className="hover:text-black transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-black transition">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-black transition">
                Features
              </a>
            </li>
            <li>
              <a href="#token" className="hover:text-black transition">
                Token
              </a>
            </li>
            <li>
              <a href="#roadmap" className="hover:text-black transition">
                Roadmap
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
        <span>
          © {new Date().getFullYear()} SpaceMonkey. Community driven. Meme powered.
        </span>

        <div className="flex gap-6">
          <a href="#" className="hover:text-black transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-black transition">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

