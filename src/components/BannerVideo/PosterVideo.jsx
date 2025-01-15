import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import videoPoster from "../assets/Birthdance 2 (2).mp4";
import muteIcon from "../assets/off.png";
import unmuteIcon from "../assets/on.png";

const PosterVideo = () => {
      const posterVideoRef = useRef(null);
     const [isPosterMuted, setIsPosterMuted] = useState(true);
      const [isPosterPlaying, setIsPosterPlaying] = useState(false);
      const [count, setCount] = useState(0);

    const togglePosterMute = () => {
        if (posterVideoRef.current) {
          posterVideoRef.current.muted = !isPosterMuted;
          setIsPosterMuted(!isPosterMuted);
        }
      };
    
      const togglePosterPlay = () => {
        if (posterVideoRef.current) {
          if (isPosterPlaying) {
            posterVideoRef.current.pause();
          } else {
            posterVideoRef.current.play();
          }
          setIsPosterPlaying(!isPosterPlaying);
        }
      };

      useEffect(() => {
          if (count < 47) {
            const interval = setInterval(() => {
              setCount((prev) => prev + 1);
            }, 40);
            return () => clearInterval(interval);
          }
        }, [count]);
  return (
      <div className="absolute lg:top-1/2 lg:-translate-y-1/2 px-5 lg:px-0 lg:right-16 flex items-center justify-center">
            <div className="w-[100%] sm:w-[70%] md:w-[60%] lg:w-[65vh] h-auto rounded-lg z-20 relative">
              <div className="lg:hidden py-6 text-white z-10">
                <motion.h1
                  className="text-6xl md:text-6xl lg:text-7xl 2xl:text-9xl font-bold font-custom1 uppercase tracking-[3px]"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  Birthdance
                  <motion.span
                    className="2xl:text-[11.6vh] font-custom ml-2 text-[#FF0903]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  >
                    {count}
                  </motion.span>
                </motion.h1>
                <motion.p
                  className="text-sm md:text-lg lg:text-[18px] lg:max-w-lg font-custom2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                >
          
                </motion.p>
                <motion.button
                  className="relative mt-6 font-custom1 uppercase px-4 md:px-6 w-full py-4 md:w-[220px] rounded-tl-[20px] rounded-br-[20px] md:py-3 bg-gradient-to-r from-[#FF0903] to-[#5c0200] text-white tracking-[1px] font-medium text-lg md:text-2xl shadow-lg overflow-hidden transition duration-300 group"
                  initial={{ scale: 0 }}
                  animate={{
                    scale: [1, 1.05, 1], 
                  }}
                  transition={{
                    duration: 1.5, 
                    repeat: Infinity, 
                    repeatType: "mirror",
                    ease: "easeInOut", 
                  }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-[#5c0200] to-[#FF0903] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out z-0"
                    animate={{
                      scaleX: [0, 2, 0], 
                    }}
                    transition={{
                      duration: 4, 
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }}
                  ></motion.span>
                  <span className="relative z-10 text-3xl">Full info Soon</span>
                </motion.button>
    
              </div>
              <video
                ref={posterVideoRef}
                className="w-full h-auto object-cover cursor-pointer shadow-lg rounded-lg"
                onClick={togglePosterPlay}
                autoPlay
                playsInline
                loop
                muted={isPosterMuted}
              >
                <source src={videoPoster} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                className="absolute bottom-4 left-4 p-2 bg-gray-950 bg-opacity-50 rounded-full"
                onClick={togglePosterMute}
              >
                <img
                  src={isPosterMuted ? muteIcon : unmuteIcon}
                  alt={isPosterMuted ? "Unmute" : "Mute"}
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>
  )
}

export default PosterVideo