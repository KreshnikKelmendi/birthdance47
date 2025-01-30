import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import poster6 from "../assets/birthdance2025/TUNNEL.mp4";
import muteIcon from '../assets/off.png';
import unmuteIcon from '../assets/on.png';
import { FaDownload, FaPause, FaPlay } from 'react-icons/fa';

const TiranaPoster = () => {
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Autoplay blocked:", error);
            });
        }
    }, []);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div className="relative w-full h-full">
            <video
                ref={videoRef}
                className="w-full h-full"
                autoPlay
                playsInline
                loop
                muted={isMuted}
            >
                <source src={poster6} type="video/mp4" />
            </video>

            {/* Mute/Unmute Button with Animation */}
            <div className="absolute top-[-35px] left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                           <motion.button
                               onClick={toggleMute}
                               className="flex items-center space-x-2 text-[#FFD200] px-3 py-2"
                               whileHover={{ scale: 1.1, rotate: 5 }}
                               whileTap={{ scale: 0.9 }}
                               animate={isMuted ? { scale: [1, 1.1, 1], opacity: [1, 0.8, 1] } : {}}
                               transition={isMuted ? { repeat: Infinity, duration: 1.2, ease: "easeInOut" } : {}}
                           >
                               <p className='text-[11px] font-custom3'>Play music</p>
                               {isMuted ? <FaPlay className="h-4 w-4" /> : <FaPause className="h-4 w-4" />}
                           </motion.button>
                       </div>

            {/* Download Button */}
            <a
                href={poster6}
                download="birthdance4.mp4"
                className="absolute bottom-[-40px] lg:bottom-[-50px] left-1/2 transform -translate-x-1/2 flex items-center justify-center text-#FF4B2B text-[11px] lg:text-sm border-[#FFD200] border-b-[2px] hover:shadow-md shadow-black hover:border-none hover:text-black hover:scale-105 transition duration-300 ease-out font-custom3 p-1 lg:p-2"
            >
                Download Poster <FaDownload className="ml-1" />
            </a>
        </div>
    );
};

export default TiranaPoster;
