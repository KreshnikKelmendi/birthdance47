import React, { useState } from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
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
  const [ref, inView] = useInView({
    threshold: 0.1,
    rootMargin: '-100px 0px',
  });

  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const transition = {
    duration: 0.5,
    ease: "easeOut",
  };

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={transition}
      className='col-span-1'
    >
      <div className="relative overflow-hidden rounded-lg justify-center items-center">
        <img src={item.image} alt={item.title} className="w-full object-cover" />
      </div>
      <div className={`mt-4 ${item.bgColor} mx-auto`}>
        <p className="text-sm text-blue-900 mb-2">{item.date}</p>
        <p className='test-base font-bold uppercase text-[#6d5027]'>
          <span animate={showDetails ? 'visible' : 'hidden'} variants={variants} transition={transition}>
            {item.title}
          </span>
        </p>
        <p className="text-sm text-blue-900 mb-4">{item.day}</p>
        {showDetails && (
          <>
            <motion.p className="text-sm text-justify tracking-tighter text-gray-800" variants={variants} transition={transition}>
              {item.content}
            </motion.p>
          </>
        )}
      </div>
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="mt-2 text-sm text-[#6d5027] border-b rounded-sm border-[#6d5027] hover:scale-110 font-semibold focus:outline-none"
      >
        {showDetails ? 'See Less' : 'See More'}
      </button>
    </motion.div>
  );
};

const Banner = () => {
  return (
    <div className='font-custom bg-[#b8a575] relative py-5 lg:py-10 px-10'>
      <div className="text-center mb-8">
        <p className="text-sm w-60 font-bold mx-auto text-[#6d5027]">SECRET<span className='text-lg'>47</span> BIRTHDANCE, PRISTINA MARCH 01, 02, 03</p>
        {/* <h2 className="text-3xl font-semibold text-white mt-4">FEATURED EVENT</h2> */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 justify-center">
        {data?.map((item, index) => (
          <GridItem key={index} item={item} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-1 right-0 m-1 flex flex-col items-end space-y-5"
      >
        <FaInstagram size={30} color="#6d5027" />
        <FaFacebook size={30} color="#6d5027" />
      </motion.div>
    </div>
  );
};

export default Banner;
