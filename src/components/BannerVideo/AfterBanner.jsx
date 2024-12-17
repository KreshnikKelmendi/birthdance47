import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import headphones from '../assets/vinyl.png'; // Image 2
import BiographyInHomePage from './BiographyInHomePage';

const AfterBanner = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger animation when 50% of the element is in view
    triggerOnce: true, // Play the animation only once
  });

  return (
    <>
      <div className="h-fit py-8 items-center bg-[#00000071]">
        <div
          className="text-white flex flex-col items-center text-center w-full"
          ref={ref}
        >
          {/* Centered Image 2 */}
          <motion.img
            className="w-24 h-24 sm:w-32 sm:h-32 object-cover"
            src={headphones}
            alt="headphones"
            animate={{ rotate: [0, 360] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: 'linear',
            }}
          />

          {/* Animated Text */}
          <motion.p
            className="mt-6 tracking-wide text-4xl sm:text-4xl lg:text-5xl xl:text-7xl font-custom1 px-4 lg:ml-[30px]"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1.2,
              ease: 'easeOut',
            }}
          >
            I love <span className="text-[#FF0903] uppercase">youuuuuu...</span>
          </motion.p>

          <p className="lg:w-[55%] 2xl:w-[40%] font-custom2 text-sm px-6 lg:px-0 lg:text-base mt-4 leading-[21.6px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sint, reprehenderit enim explicabo minus pariatur culpa doloremque nostrum, amet sunt ab veritatis eveniet deserunt in sapiente molestiae? Laboriosam, pariatur temporibus!
          </p>
        </div>
        <BiographyInHomePage />
      </div>
    </>
  );
};

export default AfterBanner;
