import React from 'react';
import secret47 from '../assets/secret47.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SecondBanner = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Triggers only once
    threshold: 0.2, // 20% visibility to trigger
  });

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Start from bottom
    visible: { opacity: 1, y: 0, transition: { type: 'tween', duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-5 lg:px-16 relative lg:pt-12 bg-[#00000071]"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {/* Left Image Section */}
      <motion.div
        className="relative lg:w-1/2 w-full h-full"
        variants={itemVariants}
      >
        <img
          src={secret47}
          alt="Secret"
          className="w-full lg:w-full lg:h-[85vh] object-cover rounded-tl-[25px] rounded-br-[25px]"
        />
      </motion.div>

      {/* Right Red Background Section */}
      <motion.div
        className="lg:w-1/2 w-full py-12 lg:py-0 bg-gradient-to-r from-[#1d171733] to-[#ffffff49] rounded-tl-[25px] lg:absolute mt-[-25px] lg:right-16 rounded-br-[25px] text-white flex flex-col justify-center lg:h-[350px] 2xl:h-[450px] lg:ml-[-50px] p-8"
        variants={itemVariants}
      >
        {/* Title */}
        <motion.h1
          className="text-5xl lg:text-8xl lg:tracking-[1px] font-bold mb-4 font-custom1"
          variants={itemVariants}
        >
          Birthdance
        </motion.h1>

        <motion.p
          className="text-sm w-full lg:text-base font-medium mb-6 font-custom2 2xl:w-[60%]"
          variants={itemVariants}
        >
          A celebration of life, rhythm, and the moments that make us feel alive. Let the music guide your soul and the dance bring you closer to your essence.
        </motion.p>

        {/* Button */}
        <motion.button
          className="relative font-custom1 uppercase px-6 w-[220px] rounded-tl-[25px] rounded-br-[25px] py-3 bg-gradient-to-r from-[#FF0903] to-[#5c0200] text-white tracking-[1px] font-medium text-2xl shadow-lg overflow-hidden transition duration-300 group"
          variants={itemVariants}
        >
          {/* Before pseudo-element for the hover fill effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-[#5c0200] to-[#FF0903] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out z-0"></span>

          {/* Button text */}
          <span className="relative z-10">See More</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default SecondBanner;
