import React from 'react'
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  return (
    <>
    <p className='text-center text-[#E1306C] text-change font-bold mt-5 lg:mt-4'>*Click on ALL Instagram ICONS for more*</p>
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

  <div className='text-white text-center mt-4'>
     <p>Track: Secret47 & Jay Fase ft. Ardit Gjebrea - EJA</p>
     <a className='text-yellow-500 text-sm hover:text-red-500' href='https://www.instagram.com/sol.selectas?igsh=MW1maXM4MWZva2R2ZA%3D%3D' target='_blank' rel='noreferrer'>Released Soon on Sol Selectas</a>
  </div>
  </>
  )
}

export default Footer