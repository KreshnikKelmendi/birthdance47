import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import secretLogo from "../assets/Secret47---Logo.png"; // Adjust the path as needed

const ThirdBanner = () => {
  const { ref, inView } = useInView({ threshold: 0.4 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("expanded");
    } else {
      controls.start("initial");
    }
  }, [inView, controls]);

  // Variants for the logo expansion
  const logoVariants = {
    initial: {
      scale: 1,
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      transition: { duration: 1, ease: "easeInOut" },
    },
    expanded: {
      scale: 1,
      width: "100vw",
      height: "100vh",
      borderRadius: "0%",
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  // Variants for the wave-like stagger animation for the title
  const waveVariants = {
    initial: { opacity: 0, y: 50 },
    expanded: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2, // Staggered animation for each word
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  // Variants for each word animation with wave effect
  const wordVariants = {
    initial: { opacity: 0, y: 20 },
    expanded: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  return (
    <div className="lg:min-h-screen h-[70vh] flex items-center justify-center relative overflow-x-hidden overflow-y-hidden lg:py-16 bg-[#00000071]">
      {/* Expanding Logo */}
      <motion.div
        ref={ref}
        className="absolute flex items-center justify-center z-10 lg:py-10"
        variants={logoVariants}
        initial="initial"
        animate={controls}
      >
        <img
          src={secretLogo}
          alt="Logo"
          className="w-full h-full object-contain opacity-15"
        />
      </motion.div>

      {/* Wave Animation for Title */}
      <motion.div
        className="text-center z-20 px-4 sm:px-6 md:px-8"
        variants={waveVariants}
        initial="initial"
        animate={inView ? "expanded" : "initial"}
      >
        {/* First Line */}
        <motion.h1 className="text-4xl sm:text-4xl lg:text-8xl lg:tracking-[1px] text-white font-custom1 mb-4 sm:mb-6 flex justify-center">
          {"I love Youuuu, Unleash the Beat!".split(" ").map((word, index) => (
            <motion.div
              key={index}
              className="inline-block mx-1 tracking-[1px] lg:mx-2" // Add space between words
              variants={wordVariants}
            >
              {word}
            </motion.div>
          ))}
        </motion.h1>

        {/* Second Line */}
        <motion.h2 className="text-lg sm:text-xl lg:text-4xl font-semibold text-gray-400 font-custom flex justify-center">
          {"Feel the rhythm, ride the wave.".split(" ").map((word, index) => (
            <motion.div
              key={index}
              className="inline-block mx-2" // Add space between words
              variants={wordVariants}
            >
              {word}
            </motion.div>
          ))}
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default ThirdBanner;
