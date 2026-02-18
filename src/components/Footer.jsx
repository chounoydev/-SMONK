import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 py-12 mt-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-8">
        
        {/* Logo & Brand */}
        <div className="flex items-center space-x-4">
          <img
            src="/albertII.png"
            alt="SpaceMonkey Logo"
            className="w-16 h-16 rounded-full object-cover border border-gray-300 shadow-sm"
          />
          <span className="font-semibold text-lg text-gray-900">
            SpaceMonkey ($SMONK)
          </span>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#home" className="hover:text-black transition">
            Home
          </a>
          <a href="#about" className="hover:text-black transition">
            About
          </a>
          <a href="#features" className="hover:text-black transition">
            Features
          </a>
          <a href="#token" className="hover:text-black transition">
            Tokenomics
          </a>
          <a href="#roadmap" className="hover:text-black transition">
            Roadmap
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} SpaceMonkey ($SMONK). All rights reserved.  
        <span className="block mt-2">
          This website is for informational purposes only and does not constitute financial advice.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

