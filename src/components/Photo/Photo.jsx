import React from 'react';
import Navbar from '../navbar/Navbar';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import img1 from "../assets/secret-photo (1).jpg"
import img2 from "../assets/secret-photo (2).jpg"
import img3 from "../assets/secret-photo (3).jpg"
import img4 from "../assets/secret-photo (4).jpg"
import img5 from "../assets/secret-photo (5).jpg"
import img6 from "../assets/secret-photo (6).jpg"
import img7 from "../assets/secret-photo (7).jpg"
import img8 from "../assets/secret-photo (8).jpg"

const Photo = () => {
  const photos = [
    { id: 1, src:img1, alt: 'Beautiful Landscape 1' },
    { id: 2, src: img2, alt: 'Beautiful Landscape 2' },
    { id: 3, src: img3, alt: 'Beautiful Landscape 3' },
    { id: 4, src: img7, alt: 'Beautiful Landscape 4' },
    { id: 5, src: img5, alt: 'Beautiful Landscape 5' },
    { id: 6, src: img6, alt: 'Beautiful Landscape 6' },
    { id: 7, src: img4, alt: 'Beautiful Landscape 7' },
    { id: 8, src: img8, alt: 'Beautiful Landscape 8' },
  ];

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-[#00000071] text-white">
      <Navbar />
      <div className=" mx-auto py-5 lg:py-10 px-6 lg:px-16">
        <p className='text-center font-custom2 text-gray-600'>Secret 47 / Photos</p>
        <p className="text-6xl mt-6 font-bold font-custom1 tracking-[1px] text-center mb-10">
           Photos 
        </p>
        <motion.div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              className="overflow-hidden"
              variants={itemVariants}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-[28vh] lg:h-[55vh] object-cover hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Photo;
