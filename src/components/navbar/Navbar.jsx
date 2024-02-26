// Navbar.js

import React from 'react';
import { motion } from 'framer-motion';
import logo from "../assets/IMG_2824.png";

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
        className="flex items-center justify-center bg-[#b8a575] border-b border-b-[#6d5027] border-opacity-15 py-4 px-5 z-50 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="font-bold text-2xl cursor-pointer flex items-center font-custom text-gray-800">
          <span className="text-3xl text-indigo-600 pt-2">
            <motion.img 
              className="w-[127px] h-[64px] object-contain"
              src={logo} 
              alt="" 
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={logoVariants}
              whileHover={{ rotate: 360, transition: { duration: 1 }, loop: Infinity }}
            />
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
