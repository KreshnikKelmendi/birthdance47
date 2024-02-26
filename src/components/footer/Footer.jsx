import React from 'react'
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="justify-center items-center flex mt-10 space-x-8"
  >
    <a href='https://www.instagram.com/secret47file/' target='_blank' rel='noreferrer' className='hover:scale-125'>
      <FaInstagramSquare size={30} color="#fff" />
    </a>
    <a href='https://www.facebook.com/gentianr' target='_blank' rel='noreferrer' className='hover:scale-125'>
      <FaFacebookSquare size={30} color="#fff" />
    </a>
  </motion.div>
  )
}

export default Footer