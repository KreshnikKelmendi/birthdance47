import React, { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa'; // Importing FontAwesome icons
import { motion } from 'framer-motion'; // Importing Framer Motion
import Birth2025 from '../home/Birth2025';
import musicFile from '../assets/music47.mp3'; // Adjust the path to your audio file

const Birthdance2025 = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handlePlayMusic = () => {
    const audio = audioRef.current;

    if (!isPlaying) {
      audio.play().then(() => {
        setIsPlaying(true); // Music started playing
      }).catch(error => console.log('Error playing audio:', error));
    } else {
      audio.pause(); // Pause the music if it's already playing
      setIsPlaying(false); // Set the state to paused
    }
  };

  // Track scroll position
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true); // Show the button when scrolled down 100px
    } else {
      setScrolled(false); // Hide the button when scrolled up
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, []);

  // Animation for the button
  const variants = {
    hidden: { x: '-100%' },
    visible: { 
      x: '0%', 
      transition: { type: 'spring', stiffness: 100, damping: 25 } 
    },
  };

  return (
    <div className="relative">
      {/* Button with icon to control music playback */}
      {scrolled && (
        <motion.button
          onClick={handlePlayMusic}
          className="fixed top-10 left-0 px-1 py-2 bg-black text-white z-50 flex items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          {/* Display the play icon if music is not playing, else show the pause icon */}
          {isPlaying ? (
            <FaPause size={12} />
          ) : (
            <FaPlay size={12} />
          )}
        </motion.button>
      )}

      <Birth2025 />

      <audio ref={audioRef} src={musicFile} preload="auto" loop />
    </div>
  );
};

export default Birthdance2025;
