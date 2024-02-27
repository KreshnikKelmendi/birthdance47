import React from 'react';
import { motion } from 'framer-motion';
import logo from "../assets/Secret47 - Logo.png";

const Navbar = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const logoVariants = {
    hidden: { rotate: -180 },
    visible: { rotate: 0 }
  };

  return (
    <motion.div 
      className="w-full sticky"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="flex items-center justify-center border-opacity-15 py-4 px-5 z-50 relative"
      >
        <div className="font-bold text-2xl cursor-pointer flex items-center font-custom text-gray-800">
            <img 
              className="w-[127px] h-[64px] object-contain logo"
              src={logo} 
              alt="" 
              style={{
                animation: 'rotateAnimation 17s infinite linear', // Adjust duration and other properties as needed
              }}
            />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
