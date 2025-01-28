import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import logo from "../assets/47---BLACK.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // New state for mobile dropdown

  const dropdownRef = useRef(null); // Reference to the dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsMobileDropdownOpen(false); // Close mobile dropdown when the menu opens/closes
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", to: "/" },
    { name: "My Biography", to: "/my-biography" },
    { name: "Photos", to: "/photos" },
  ];

  const dropdownLinks = [
    { name: "Birthdance 2024", to: "/birthdance/2024" },
    { name: "Birthdance 2025", to: "/birthdance/2025" },
  ];

  return (
    <motion.nav
      className={`w-full relative top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-transparent" : "bg-transparent"
      } lg:px-6`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex items-center justify-center lg:justify-center pt-6">
        {/* Logo */}
        <motion.div
          className="flex items-center"
          initial={{ rotate: -180 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 1 }}
        >
          <Link to="/">
            <img
              className="px-4 lg:mx-1 lg:w-[130px] w-24 h-auto object-contain z-50"
              src={logo}
              alt="Logo"
            />
          </Link>
          
        </motion.div>

        {/* Desktop Links */}
        {/* <div className="hidden md:flex space-x-12 items-center lg:pl-2">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="text-white text-3xl active uppercase tracking-[1px] font-medium font-custom1 hover:text-gray-300"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                })
              }
            >
              {link.name}
            </Link>
          ))}

      
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="text-white text-3xl active uppercase tracking-[1px] font-medium font-custom1 flex items-center hover:text-gray-300"
            >
              Birthdance
              <motion.span
                className="ml-0"
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.span>
            </button>

            {isDropdownOpen && (
              <motion.div
                className="absolute mt-2 lg:bg-gradient-to-t from-[#1d171733] to-[#ffffff49] shadow-lg rounded-tl-[25px] rounded-br-[25px] w-72"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
              >
                <div className="flex flex-col py-2">
                  {dropdownLinks.map((dropdownLink, index) => (
                    <Link
                      key={index}
                      to={dropdownLink.to}
                      className="px-4 py-3 text-white text-xl tracking-[0.5px] font-custom hover:rounded-tl-[25px] rounded-br-[25px] hover:bg-gradient-to-r from-[#FF0903] to-[#5c0200] hover:text-white"
                      onClick={() =>
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        })
                      }
                    >
                      {dropdownLink.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div> */}

        {/* Mobile Menu Button */}
        <div className="hidden">
          {/* <button
            className="text-white pr-5 focus:outline-none text-4xl"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
          >
            {isOpen ? "x" : "☰"}
          </button> */}
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-gray-50 shadow-md mx-5"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex flex-col space-y-4 px-5 py-4">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="text-gray-800 text-4xl tracking-[1px] font-custom1 uppercase font-medium hover:text-gray-600"
                onClick={() => {
                  setIsOpen(false); // Close the menu
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth", // Scroll to top smoothly
                  });
                }}
              >
                {link.name}
              </Link>
            ))}

            {/* Birthdance Dropdown for Mobile */}
            <div>
              <button
                onClick={toggleMobileDropdown}
                className="text-gray-800 text-4xl tracking-[1px] font-custom1 uppercase font-medium flex items-center hover:text-gray-600"
              >
                Birthdance
                <motion.span
                  className="ml-2 text-xl"
                  animate={{ rotate: isMobileDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </button>

              {isMobileDropdownOpen && (
                <motion.div
                  className="mt-2 bg-gray-50 shadow-lg rounded-lg"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="flex flex-col py-2">
                    {dropdownLinks.map((dropdownLink, index) => (
                      <Link
                        key={index}
                        to={dropdownLink.to}
                        className="px-4 py-2 text-black font-custom text-xl tracking-[1px] hover:bg-gray-100 rounded-lg"
                        onClick={() => {
                          setIsOpen(false); // Close the menu
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth", // Scroll to top smoothly
                          });
                        }}
                      >
                        {dropdownLink.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
