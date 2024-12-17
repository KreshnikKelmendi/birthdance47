import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../navbar/Navbar';
import dsd from "../assets/secret-photo (9).jpg"; // Your image import
import TestimonialCarousel from './TestimonialCarousel';
import Svg from './Svg';

const AnimatedCounter = ({ from, to, duration }) => {
    const [count, setCount] = useState(from);
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            const increment = (to - from) / (duration * 60);
            let currentCount = from;
            const interval = setInterval(() => {
                currentCount += increment;
                if (currentCount >= to) {
                    currentCount = to;
                    clearInterval(interval);
                }
                setCount(Math.round(currentCount));
            }, 1000 / 60); // 60 FPS

            return () => clearInterval(interval);
        }
    }, [inView, from, to, duration]);

    return (
        <motion.span
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl lg:text-6xl font-bold text-[#FF0903]"
        >
            {count}+
        </motion.span>
    );
};

const Biography = () => {
    return (
        <div className="min-h-screen text-white bg-[#00000071]">
            <Navbar />

            {/* Hero Section */}
            <div className="lg:px-16 px-6 pt-12 flex justify-between">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className=""
                >
                    <h1 className="font-bold">
                        DJ <span className="text-white font-custom1 text-6xl lg:text-8xl ml-2">Secret<span className="font-custom ml-4 text-[#FF0903]">47</span></span>
                    </h1>
                    <p className="text-gray-400 text-lg lg:text-base mt-4 font-custom2 text-left mx-auto">
                        Immerse yourself in the rhythm of a global sensation.
                    </p>
                </motion.div>
            </div>

            {/* Biography Section with Image */}
            <div className="mt-12 px-6 lg:px-16 flex flex-col lg:flex-row gap-12">
                {/* Biography Text */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="lg:w-1/2 bg-gradient-to-t lg:bg-gradient-to-l from-[#1d171733] to-[#ffffff49] lg:h-[60vh] shadow-lg p-8 font-custom2 flex flex-col justify-center items-center rounded-tl-[25px] rounded-br-[25px]"
                >
                    <p className="text-lg leading-relaxed">
                        <span className="font-bold">DJ Secret47</span>, a global music sensation, has captivated audiences
                        with his electrifying beats and enigmatic stage presence. His journey began in underground clubs,
                        where his unique ability to blend genres set him apart.
                    </p>
                    <p className="mt-4 text-lg leading-relaxed">
                        Headlining major festivals and producing chart-topping tracks, DJ Secret47’s mission to unite people
                        through music continues to inspire fans worldwide.
                    </p>
                </motion.div>

                {/* Image Section with Blur Animation */}
                <motion.div
                    initial={{ opacity: 0, x: 30, filter: "blur(30px)" }} // Initial blur
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} // No blur once in view
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="lg:w-1/2 h-[45vh] lg:h-[60vh]"
                >
                    <img
                        src={dsd} // Image source
                        alt="DJ Secret47"
                        className="w-full h-full object-cover rounded-tl-[25px] rounded-br-[25px] relative" // Styling for the image
                    />
                 <Svg />
                </motion.div>
            </div>

            {/* Animated Stats Section */}
            <div className="mt-16 px-6 lg:px-16 pb-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {[{ label: 'Years Active', value: 10 }, { label: 'Global Performances', value: 200 }, { label: 'Tracks Produced', value: 50 }].map(
                        ({ label, value }) => (
                            <div
                                key={label}
                                className="bg-gradient-to-t from-[#1d171733] to-[#ffffff49] text-center rounded-lg shadow-lg p-6 font-custom h-fit lg:h-[30vh] flex flex-col justify-center items-center"
                            >
                                <AnimatedCounter from={0} to={value} duration={1.5} />
                                <p className="text-gray-400 text-lg mt-4 font-custom2">{label}</p>
                            </div>
                        )
                    )}
                </motion.div>

            </div>
            <TestimonialCarousel />
        </div>

    );
};

export default Biography;
