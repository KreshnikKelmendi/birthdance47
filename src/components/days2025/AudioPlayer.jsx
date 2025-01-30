import React, { useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AudioPlayer = ({ audioSrc }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayMusic = () => {
    const audio = audioRef.current;
    if (!isPlaying) {
      audio.play().then(() => setIsPlaying(true)).catch(err => console.log('Error playing audio:', err));
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex items-center justify-center mb-4 space-x-2">
        <p className='font-custom3 text-[12px] uppercase'>play music</p>
      <motion.button
        onClick={handlePlayMusic}
        className="px-3 animate-pulse py-2 bg-black text-white flex items-center justify-center"
        whileTap={{ scale: 0.9 }}
      >
        {isPlaying ? <FaPause size={8} /> : <FaPlay size={8} />}
      </motion.button>
      <audio ref={audioRef} src={audioSrc} preload="auto" loop />
    </div>
  );
};

export default AudioPlayer;
