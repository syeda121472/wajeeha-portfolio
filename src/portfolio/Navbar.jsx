import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { label: "home", path: "/" },
    { label: "about", path: "/about" },
    { label: "resume", path: "/resume" },
    { label: "skills", path: "/skills" },
    { label: "projects", path: "/project" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0d1117] via-[#1e293b] to-[#0d1117] text-white shadow-lg backdrop-blur-sm">
      <nav className="flex items-center justify-between px-6 md:px-20 py-4">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          <span className="text-green-400">Wajeeha</span>Ali
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10 text-sm font-medium">
          {menuItems.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                className="capitalize hover:text-green-400 hover:underline underline-offset-4 transition duration-300"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Call-to-Action (Desktop) */}
        <Link
          to="/contactme"
          className="hidden md:inline-block px-4 py-2 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-full transition duration-300"
        >
          Let's Talk
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-[#0d1117] border-t border-gray-700">
          {menuItems.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium capitalize hover:text-green-400 transition duration-300"
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contactme"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-4 py-2 mt-2 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-full transition duration-300"
          >
            Let's Talk
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
