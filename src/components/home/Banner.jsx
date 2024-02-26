import React, { useState, useEffect } from 'react';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image1 from "../assets/image (3).png";
import image2 from "../assets/image2.png";

const data = [
  {
    title: "LAST DANCE WITH FAMILY",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectou adis aaspic acit item dolor sit amet consectour, lorem ipsum dolor sit amet consectour and amet consectour.",
    image: image1,
    date: 'Friday, March 01, 2024',
    day: '1st Day',
  },
  {
    title: "Concert Title 2",
    content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    image: image2,
    date: 'Saturday, March 02, 2024',
    day: '2nd Day',
  },
  {
    title: "LAST DANCE WITH FAMILY",
    content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: image2,
    date: 'Sunday, March 03, 2024',
    day: '3rd Day',
  },
];

const GridItem = ({ item }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.9,
    rootMargin: '-100px 0px',
  });

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  const transition = {
    duration: 0.5,
    ease: "easeOut",
  };

  // Close the modal when the "ESC" key is pressed
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

  // Close details
  const handleSeeLess = () => {
    setShowDetails(false);
  };

  // Open image
  const handleImageClick = () => {
    setShowImage(true);
  };

  // Close image
  const handleCloseImage = () => {
    setShowImage(false);
  };

  // Open details
  const handleSeeMore = () => {
    setShowDetails(true);
  };

  // Close details in modal
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
          className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
          onClick={handleCloseImage}
        >
          <motion.div
            className="max-w-screen-md max-h-screen-md w-full h-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking on the image
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
        className={`mt-4 ${item.bgColor} mx-auto`}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={textVariants}
        transition={transition}
      >
        <p className="text-sm text-blue-900 mb-2">{item.date}</p>
        <p className='test-base font-bold uppercase text-[#6d5027]'>
          <span>
            {item.title}
          </span>
        </p>
        <p className="text-sm text-blue-900 mb-4">{item.day}</p>
        {showDetails ? (
          <motion.p className="text-sm text-justify tracking-tighter text-gray-800" variants={textVariants} transition={transition}>
            {item.content}
          </motion.p>
        ) : null}
      </motion.div>
      {showDetails ? (
        <button
          onClick={handleSeeLess}
          className="mt-2 text-sm text-[#6d5027] border-b rounded-sm border-[#6d5027] hover:scale-110 font-semibold focus:outline-none"
        >
          See Less
        </button>
      ) : (
        <button
          onClick={handleSeeMore}
          className="mt-2 text-sm text-[#6d5027] border-b rounded-sm border-[#6d5027] hover:scale-110 font-semibold focus:outline-none"
        >
          See More
        </button>
      )}
    </div>
  );
};

const Banner = () => {
  return (
    <div className='font-custom bg-[#b8a575] relative py-5 lg:py-10 px-10'>
      <div className="text-center mb-8">
        <p className="text-sm w-60 font-bold mx-auto text-[#6d5027]">SECRET<span className='text-lg'>47</span> BIRTHDANCE, PRISTINA MARCH 01, 02, 03</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 justify-center">
        {data?.map((item, index) => (
          <GridItem key={index} item={item} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-1 right-0 mr-[3.5px] flex flex-col items-end space-y-5"
      >
        <a href='https://www.instagram.com/secret47file/' target='_blank' rel='noreferrer'>
          <FaInstagramSquare size={30} color="#6d5027" />
        </a>
        <a href='https://www.facebook.com/gentianr' target='_blank' rel='noreferrer'>
          <FaFacebookSquare size={30} color="#6d5027" />
        </a>
      </motion.div>
    </div>
  );
};

export default Banner;
