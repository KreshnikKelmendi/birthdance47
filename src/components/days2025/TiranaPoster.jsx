import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import poster6 from "../assets/birthdance2025/Tunnel (1) (1).mp4";
import muteIcon from '../assets/off.png';
import unmuteIcon from '../assets/on.png';
import { FaDownload } from 'react-icons/fa';

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
            <motion.button
                onClick={toggleMute}
                className="absolute top-0 left-0 bg-black/50 p-2 rounded-full shadow-lg"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                animate={isMuted ? { scale: [1, 1.1, 1], opacity: [1, 0.8, 1] } : {}}
                transition={isMuted ? { repeat: Infinity, duration: 1.2, ease: "easeInOut" } : {}}
            >
                <img src={isMuted ? muteIcon : unmuteIcon} alt="Sound Toggle" className="h-6 w-6" />
            </motion.button>

            {/* Download Button */}
            <a
                href={poster6}
                download="TiranaPoster.mp4"
                className="lg:absolute lg:bottom-4 lg:left-1/2 lg:-translate-x-1/2 flex items-center justify-end lg:text-black text-white text-sm hover:text-white hover:scale-105 hover:duration-300 ease-out font-custom3 font-semibold pt-1 rounded-lg transition"
            >
                Download Poster <FaDownload className='ml-2' />
            </a>
        </div>
    );
};

export default TiranaPoster;
