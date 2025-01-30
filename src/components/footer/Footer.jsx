import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', icon: FaInstagramSquare, url: 'https://www.instagram.com/secret47file/' },
    { name: 'Facebook', icon: FaFacebookSquare, url: 'https://www.facebook.com/gentianr' },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const location = useLocation();

  // Define background and text colors based on route
  const routeStyles = {
    '/birthdance/day-1': {
      bgColor: '#D9C1DF',
      textColor: '#000000',
      quote: `“You don't stop dancing because you grow old! You grow old because you stop dancing.”`,
    },
    '/birthdance/day-2': {
      bgColor: '#EFEFEF',
      textColor: '#000000',
      quote: '“Progress is dancing to the same song you used to cry to.”',
    },
    '/birthdance/day-3': {
      bgColor: '#F08168',
      textColor: '#000000',
      quote: '“I wanna dance with somebody (Who loves me)!”',
    },
    '/birthdance/day-4': {
      bgColor: '#000000',
      textColor: '#FF4B2B',
      quote: `“Don't ever be too shy to dance your heart out!”`,
    },
    '/birthdance/day-5': {
      bgColor: '#00EDBF',
      textColor: '#000000',
      quote: '“Every dance tells a story!”',
    },
    '/birthdance/day-6': {
      bgColor: '#000000',
      textColor: '#FFD200',
      quote: '“Some dance to remember... some dance to forget.”',
    },
  };

  const currentStyle =
    routeStyles[location.pathname] || {
      bgColor: '#F4ECE9',
      textColor: '#000000',
      quote: '“The best way to predict the future is to create it.”',
    };

  const socialVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  return (
    <div
      className="pb-20 pt-9 lg:py-24 px-5 lg:px-0 text-center"
      style={{ backgroundColor: currentStyle.bgColor, color: currentStyle.textColor }}
    >
      {/* Social Links Section */}
      <p className="text-2xl lg:tracking-[1px] font-custom3">That SECRET!</p>
      <div ref={ref} className="flex justify-center items-center mt-6">
        {socialLinks.map(({ name, icon: Icon, url }, index) => (
          <motion.a
            href={url}
            target="_blank"
            rel="noreferrer"
            key={name}
            className="group relative overflow-hidden flex flex-col items-center justify-center w-20 h-16 lg:h-20 border hover:border-white transition duration-300"
            style={{ border: currentStyle.textColor }}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden' }
            custom={index}
            variants={socialVariants}
          >
            {/* Hover Background */}
            <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

            {/* Icon */}
            <Icon
              size={30}
              className="relative z-10 group-hover:text-white transition duration-300"
              style={{ color: currentStyle.textColor }}
            />

            {/* Name (visible only on hover) */}
            <span className="absolute bottom-[2px] py-2 flex justify-center items-center opacity-0 group-hover:opacity-100 z-10 text-[10px] font-custom2 font-medium transition duration-300">
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
        className="px-5 lg:px-0 text-xl lg:text-2xl lg:w-[30%] mx-auto font-custom3 italic"
      >
        <p className='mt-7'>{currentStyle.quote}</p>
      </motion.div>
    </div>
  );
};

export default Footer;
