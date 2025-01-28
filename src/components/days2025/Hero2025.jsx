import React from "react";
import { motion } from "framer-motion";

const textContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Stagger letters for a wave-like effect
    },
  },
};

const textWave = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Hero2025 = () => {
  const line1 = "BIRTHDANCE".split("");
  const line2 = "SECRET".split("");
  const line3 = "FOURTY SEVEN".split(" ");

  return (
    <div className="text-black px-4 lg:px-10 pt-10 flex flex-col justify-center lg:justify-start items-start mx-auto lg:items-start h-[34vh] lg:h-fit space-y-4">
      {/* Line 1 */}
      <motion.div
        className="flex"
        variants={textContainer}
        initial="hidden"
        animate="visible"
      >
        {line1.map((char, index) => (
          <motion.span
            key={index}
            className="font-custom3 text-[12vw] lg:text-[10vw] leading-none inline-block"
            variants={textWave}
            whileHover={{
              y: [0, -5, 0], // Delicate float up and down
              textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)", // Glow effect
              transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse", // Smooth hover animation
              },
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

      {/* Line 2 */}
      <motion.div
        className="flex items-center"
        variants={textContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex">
          {line2.map((char, index) => (
            <motion.span
              key={index}
              className="font-custom3 text-[12vw] lg:text-[10vw] leading-none inline-block"
              variants={textWave}
              whileHover={{
                y: [0, -5, 0],
                textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
                transition: {
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Details */}
        <motion.div
          className="block text-[10px] lg:leading-10 lg:text-3xl pl-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="font-custom3">19.02 - 01.03</p>
          <p className="font-custom3">PRISHTINA FIVE NIGHTS</p>
          <p className="font-custom3">TIRANA FIRST TIME</p>
        </motion.div>
      </motion.div>

      {/* Line 3 */}
      <motion.div
        className="flex"
        variants={textContainer}
        initial="hidden"
        animate="visible"
      >
        {line3.map((word, index) => (
          <motion.span
            key={index}
            className="font-custom3 text-[12vw] lg:text-[10vw] leading-none mx-1 inline-block"
            variants={textWave}
            whileHover={{
              y: [0, -5, 0],
              textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
              transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero2025;
