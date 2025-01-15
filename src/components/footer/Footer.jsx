import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaMusic,
  FaSnapchatGhost,
  FaSpotify,
  FaTiktok,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/secret47file/' },
    { name: 'Facebook', icon: FaFacebookF, url: 'https://www.facebook.com/gentianr' },
    // { name: 'Spotify', icon: FaSpotify, url: 'https://open.spotify.com/' },
    // { name: 'Music', icon: FaMusic, url: 'https://twitter.com/' },
    // { name: 'Snapchat', icon: FaSnapchatGhost, url: 'https://www.snapchat.com/' },
    // { name: 'Tiktok', icon: FaTiktok, url: 'https://www.snapchat.com/' },
  ];

  const footerMenu = [
    { name: 'HOME', url: '/' },
    { name: 'MY BIOGRAPHY', url: '/my-biography' },
    { name: 'PHOTOS', url: '/photos' },
    { name: 'BIRTHDANCE', url: '/contact' },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const socialVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  return (
    <div className="py-12 lg:py-32 px-5 lg:px-0 text-center text-white bg-[#00000071]">
      {/* Social Links Section */}
      <p className="text-white font-bold text-3xl lg:tracking-[1px] font-custom1">That SECRET!</p>
      <div
        ref={ref}
        className="flex justify-center items-center mt-6"
      >
        {socialLinks.map(({ name, icon: Icon, url }, index) => (
          <motion.a
            href={url}
            target="_blank"
            rel="noreferrer"
            key={name}
            className="group relative overflow-hidden shadow-2xl shadow-red-900 flex flex-col items-center justify-center w-20 h-16 lg:h-20 border border-slate-500 hover:border-white transition duration-300"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={index}
            variants={socialVariants}
          >
            {/* Hover Background */}
            <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

            {/* Icon */}
            <Icon
              size={30}
              className="relative z-10 text-white group-hover:text-black transition duration-300"
            />

            {/* Name (visible only on hover) */}
            <span className="absolute bottom-[2px] py-2 flex justify-center items-center opacity-0 group-hover:opacity-100 z-10 text-[10px] font-custom2 font-medium text-black transition duration-300">
              {name}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Animated Quote Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-20 px-5 lg:px-0 text-lg lg:text-2xl font-custom2 font-medium italic text-gray-300"
      >
        <p>
          "The best way to predict the future is to create it."
        </p>
      </motion.div>

      {/* Footer Menu and Copyright Section */}
      <div className="mt-20">
        <ul className="flex flex-wrap justify-center space-x-7 lg:space-x-12 mb-6 text-xl lg:text-3xl lg:tracking-[1px] font-medium font-custom1">
          {footerMenu.map(({ name, url }) => (
            <li key={name}>
              <Link
                href={url}
                className="hover:text-gray-300 transition duration-300"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-xs lg:text-sm font-custom2 text-gray-500">
          © {new Date().getFullYear()} Birthdance47 {">"} Secret47. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
