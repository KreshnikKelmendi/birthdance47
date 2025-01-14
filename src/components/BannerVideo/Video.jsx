import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import video1 from "../assets/Secret47 BirthDance at Zone Club.mp4";
import videoPoster from "../assets/Birthdance 2 (2).mp4";
import Navbar from "../navbar/Navbar";
import muteIcon from "../assets/off.png";
import unmuteIcon from "../assets/on.png";

const Video = () => {
  const videoRef = useRef(null);
  const posterVideoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPosterMuted, setIsPosterMuted] = useState(true);
  const [isPosterPlaying, setIsPosterPlaying] = useState(false);
  const [count, setCount] = useState(0);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

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
    <div className="relative h-screen w-full bg-[#00000071]">
      <Navbar />

      {/* Main Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover lg:opacity-65"
        playsInline
        autoPlay
        loop
        muted={isMuted}
      >
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

      {/* Text Content */}
      <div className="absolute hidden lg:block bottom-24 md:top-32 lg:top-1/2 left-5 md:left-8 lg:left-16 transform lg:-translate-y-1/2 text-white z-10">
        <motion.h1
          className="text-6xl md:text-6xl lg:text-7xl 2xl:text-9xl font-bold font-custom1 uppercase tracking-[3px]"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Birthdance
          <motion.span
            className="2xl:text-[12.6vh] font-custom ml-5 text-[#FF0903]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {count}
          </motion.span>
        </motion.h1>
        <motion.p
          className="mt-4 text-sm md:text-lg lg:text-[18px] max-w-xs md:max-w-md lg:max-w-lg font-custom2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        >
          {/* Birthdance47 returns from February 19-23, 2025, for five days of electrifying music, dance, and unforgettable energy. 
          Experience top DJs, live performances, and vibrant visuals in a celebration of rhythm and connection. Don’t miss it! */}
        </motion.p>
        <motion.button
          className="relative mt-6 font-custom1 uppercase px-4 md:px-6 w-[180px] md:w-[220px] rounded-tl-[20px] rounded-br-[20px] py-2 md:py-3 bg-gradient-to-r from-[#FF0903] to-[#5c0200] text-white tracking-[1px] font-medium text-lg md:text-2xl shadow-lg overflow-hidden transition duration-300 group"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
            type: "spring",
            stiffness: 120,
          }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#5c0200] to-[#FF0903] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out z-0"></span>
          <span className="relative z-10">Full info Soon</span>
        </motion.button>
      </div>

      {/* Poster Video */}
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
              {/* Birthdance47 returns from February 19-23, 2025, for five days of electrifying music, dance, and unforgettable energy. 
           Experience top DJs, live performances, and vibrant visuals in a celebration of rhythm and connection. Don’t miss it! */}
            </motion.p>
            <motion.button
              className="relative mt-6 font-custom1 uppercase px-4 md:px-6 w-full py-4 md:w-[220px] rounded-tl-[20px] rounded-br-[20px] md:py-3 bg-gradient-to-r from-[#FF0903] to-[#5c0200] text-white tracking-[1px] font-medium text-lg md:text-2xl shadow-lg overflow-hidden transition duration-300 group"
              initial={{ scale: 0 }}
              animate={{
                scale: [1, 1.05, 1], // Scaling effect loop
              }}
              transition={{
                duration: 1.5, // Total time for one cycle
                repeat: Infinity, // Loop infinitely
                repeatType: "mirror", // Alternate between scale states
                ease: "easeInOut", // Smooth easing
              }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#5c0200] to-[#FF0903] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out z-0"
                animate={{
                  scaleX: [0, 2, 0], // Repeat the scaling of the gradient background
                }}
                transition={{
                  duration: 4, // Matches the main button's cycle
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

      {/* Mute/Unmute Button */}
      <button
        className="absolute bottom-1 right-2 hidden lg:block lg:left-14 w-fit md:bottom-8 md:right-8 z-20 p-3 lg:bg-gray-950 bg-opacity-50 rounded-full"
        onClick={toggleMute}
      >
        <img
          src={isMuted ? muteIcon : unmuteIcon}
          alt={isMuted ? "Unmute" : "Mute"}
          className="w-4 h-4"
        />
      </button>

      {/* Scroll Arrow */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 md:h-10 md:w-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Video;
