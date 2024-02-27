import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image1 from "../assets/poster1.png";
import image2 from "../assets/poster2.png";
import image3 from "../assets/poster3.png";
import Footer from '../footer/Footer';

const data = [
  {
    title: "LAST DANCE WITH FAMILY",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectou adis aaspic acit item dolor sit amet consectour, lorem ipsum dolor sit amet consectour and amet consectour.",
    image: image1,
    date: 'Friday, March 01, 2024',
    day: '1st Day',
    textColor: '#FF5454'
  },
  {
    title: "Concert Title 2",
    content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    image: image2,
    date: 'Saturday, March 02, 2024',
    day: '2nd Day',
    textColor: "#06D04F"
  },
  {
    title: "LAST DANCE WITH FAMILY",
    content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: image3,
    date: 'Sunday, March 03, 2024',
    day: '3rd Day',
    textColor: '#7C6DE7'
  },
];

const GridItem = ({ item }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [ref, inView] = useInView({
    rootMargin: '-100px 0px',
  });

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, filter: 'blur(20px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 1, ease: 'easeInOut' } },
  };

  const transition = {
    duration: 0.5,
    ease: "easeOut",
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape' && (showDetails || showImage)) {
        setShowDetails(false);
        setShowImage(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [showDetails, showImage]);


  const handleSeeLess = () => {
    setShowDetails(false);
  };


  const handleImageClick = () => {
    setShowImage(true);
  };


  const handleCloseImage = () => {
    setShowImage(false);
  };


  const handleSeeMore = () => {
    setShowDetails(true);
  };


  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <div className='col-span-1'>
      <div className="relative overflow-hidden rounded-lg justify-center items-center" ref={ref}>
        <img
          src={item.image}
          alt={item.title}
          className="w-full object-cover cursor-pointer"
          onClick={handleImageClick}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={imageVariants}
        />
      </div>
      {showImage && (
        <motion.div
          key="modal-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed p-2 z-50 top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
          onClick={handleCloseImage}
        >
          <motion.div
            className="max-w-screen-md max-h-screen-md w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain cursor-pointer"
              initial={{ filter: 'blur(10px)' }}
              animate={{ filter: 'blur(0px)' }}
              transition={{ duration: 0.5 }}
            />
            {/* Close button for image modal */}
            <button
              onClick={handleCloseImage}
              className="absolute top-2 right-2 text-white text-sm bg-gray-800 px-2 py-1 rounded-full"
            >
              X
            </button>
          </motion.div>
        </motion.div>
      )}
      <motion.div
        className={`mt-4 mx-auto`}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={textVariants}
        transition={transition}
      >
        <p className={`text-sm mb-2`} style={{ color: item.textColor }}>{item.date}</p>
        <p className='test-base font-bold uppercase text-white'>
          <span style={{ color: item.textColor }}>
            {item.title}
          </span>
        </p>
        <p className={`text-sm mb-4`} style={{ color: item.textColor }}>{item.day}</p>
        {showDetails ? (
          <motion.p className="text-sm text-justify tracking-tighter text-white" variants={textVariants} transition={transition}>
            {item.content}
          </motion.p>
        ) : null}
      </motion.div>
      {showDetails ? (
        <button
          onClick={handleSeeLess}
          className="mt-2 text-sm text-white border-b rounded-sm border-[#6d5027] hover:scale-110 font-semibold focus:outline-none"
        >
          Hide Details
        </button>
      ) : (
        <button
          onClick={handleSeeMore}
          className="mt-2 text-sm text-white border-b rounded-sm border-white hover:scale-110 font-semibold focus:outline-none" style={{ borderColor: item.textColor }}
        >
          Show Details
        </button>
      )}
    </div>
  );
};

const Banner = () => {
  return (
    <div className='font-custom bg-secret relative py-5 lg:py-10 px-10'>
      <div className="text-center mb-8">
        <p className="text-base w-fit lg:w-60 font-bold mx-auto text-white">SECRET47 BIRTHDANCE 2024 <br /> PRISTINA MARCH 01, 02, 03</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 justify-center">
        {data?.map((item, index) => (
          <GridItem key={index} item={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Banner;
