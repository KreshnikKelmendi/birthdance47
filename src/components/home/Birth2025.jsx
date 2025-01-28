import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Footer from '../footer/Footer';
import Media from './Media';
import Navbar from '../navbar/Navbar';
import { birth2025 } from '../data/birthdance2025data';
import { Link } from 'react-router-dom';
import Hero2025 from '../days2025/Hero2025';

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

  const handleDownload = () => {
    if (item.video && item.video.endsWith('.mp4')) {
      fetch(item.video)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = item.title || 'video.mp4';
          link.click();
          window.URL.revokeObjectURL(url);
        })
        .catch(error => {
          console.error('Error downloading video:', error);
        });
    } else if (item.video && item.video.endsWith('.htm')) {
      fetch(item.video)
        .then(response => response.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const videoUrl = doc.querySelector('video source')?.src;

          if (videoUrl) {
            fetch(videoUrl)
              .then(response => response.blob())
              .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = item.title || 'video.mp4';
                link.click();
                window.URL.revokeObjectURL(url);
              })
              .catch(error => {
                console.error('Error downloading video from .htm:', error);
              });
          } else {
            console.error('Video URL not found inside the .htm file');
          }
        })
        .catch(error => {
          console.error('Error fetching .htm file:', error);
        });
    } else {
      const link = document.createElement('a');
      link.href = item.image;
      link.download = item.title || 'image';
      link.click();
    }
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
              behavior: 'smooth',
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

      {/* Original Commented Sections */}
      {/* <div
        className="mt-4 mx-auto flex justify-between items-center"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={textVariants}
        transition={transition}
      >
        <p className="text-sm mb-2" style={{ color: item.textColor }}>
          {item.date}
        </p>
        <button
          onClick={handleDownload}
          className="text-[11px] text-white py-2 rounded-lg hover:text-blue-600"
          title="Download this poster and Share it only with LOVE"
        >
          Download
        </button>
      </div> */}
      {/* <div className="mt-4">
        <p className="text-base font-bold text-white">
          <span style={{ color: item.textColor }}>{item.title}</span>
        </p>
        <p style={{ color: item.textColor }}>{item.subtitle}</p>
        <p className="text-sm mb-4" style={{ color: item.textColor }}>
          {item.day}
        </p>
      </div> */}
      {/* Single Button */}
      {/* <div className="mt-4">
        <Link to={item.route} onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }>
          <button
            className="text-white border-b-2 text-sm"
            style={{ borderColor: item.textColor }}
          >
            Show Details
          </button>
        </Link>
      </div> */}
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
