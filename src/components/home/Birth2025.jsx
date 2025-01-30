import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Footer from '../footer/Footer';
import Media from './Media';
import Navbar from '../navbar/Navbar';
import { birth2025 } from '../data/birthdance2025data';
import { Link } from 'react-router-dom';
import Hero2025 from '../days2025/Hero2025';
import AudioPlayer from '../days2025/AudioPlayer';
import musicFile from '../assets/music47.mp3';

const GridItem = ({ item }) => {
  const [ref, inView] = useInView({
    rootMargin: '-100px 0px',
  });

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const transition = {
    duration: 0.5,
    ease: 'easeOut',
  };

  return (
    <div
      className="col-span-1 relative group overflow-hidden transition-all duration-300"
      ref={ref}
    >
      {/* Main Media */}
      <Link
          to={item.route}
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smoth',
            })
          }
        >
      <div className="relative">
        <Media image={item.image} mediaType={item.mediaType} />
      </div>

      {/* Small Image on Hover */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2  -translate-y-full opacity-0 group-hover:translate-y-4 group-hover:opacity-100 transition-all duration-300">
        <img
          src={item.image}
          alt={item.title}
          className="w-20 h-20 object-cover rounded-full border-2 border-white"
        />
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-opacity-75 flex flex-col bg-gray-950 items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
        {/* <p className="text-white text-xl font-custom3 uppercase mb-2">{item.title}</p> */}
        
          <button
            className="border-b-2 border-white text-white px-4 py-2 hover:bg-black hover:text-white transition-all"
          >
            See Details
          </button>
     
      </div>
         </Link>
    </div>
  );
};

const Birth2025 = () => {
  return (
    <div className="font-custom2 relative bg-[#F4ECE9]">
      <Navbar />
      <Hero2025 />
      <div className="tracking-tighter lg:tracking-normal mb-8 lg:pt-8 px-5 lg:px-16">
        {/* <p className="text-base w-fit lg:w-[55%] font-custom3 text-white">
          BirthDance is one of the most iconic nights/weekends in this part of the world, where we present the most amazing artists & with guests that fly from all over the world to be part of the dancefloors.
        </p> */}
      </div>
      <p className='text-center font-custom3 uppercase text-[12px] animate-bounce'>Click posters for full info</p>
      <AudioPlayer audioSrc={musicFile} />
      <div className="grid grid-cols-1  lg:grid-cols-3 justify-center ">
        {birth2025?.map((item, index) => (
          <GridItem key={index} item={item} />
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Birth2025;
