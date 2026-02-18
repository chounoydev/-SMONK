import React, { useState } from "react";

const Navbar = () => {
  const links = ["home", "about", "features", "token", "roadmap"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0B0F1A]/80 backdrop-blur-xl z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full overflow-hidden border border-purple-500/40 shadow-md bg-black flex items-center justify-center">
            <img
              src="/albertII.png"
              alt="SpaceMonkey Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="font-semibold text-lg md:text-xl text-white tracking-wide">
            SpaceMonkey <span className="text-purple-400">($SMONK)</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="capitalize hover:text-white transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0B0F1A] border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-6 text-gray-300">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className="capitalize hover:text-white transition text-base"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

