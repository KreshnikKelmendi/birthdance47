import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import images
import image1 from '../assets/secret1.jpg';
import image2 from '../assets/secret2.jpg';
import image3 from '../assets/secret3.jpg';
import image4 from '../assets/secret4.jpg';
import image5 from '../assets/secret5.jpg';
import image6 from '../assets/secret6.jpg';

const BiographyInHomePage = () => {
    const images = [image1, image2, image3, image4, image5, image6];

    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2, // Delay between each child animation
            },
        },
    };

    // Intersection Observer
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2, // Trigger when 20% of the element is in view
    });

    return (
        <div className="lg:py-10 py-6 px-5 lg:px-1 lg:mt-8">
            {/* Info Section */}
            {/* <section className="flex items-center justify-center gap-4 mb-10">
                <img
                    src={image1}
                    alt="Profile"
                    className="w-12 h-12 rounded-full"
                />
                <h1 className="text-lg font-medium text-gray-700">
                    Biography Information
                </h1>
            </section> */}

            {/* Cards Wrapper */}
            <motion.section
                className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 h-[60vh] lg:h-[55vh] lg:px-14 mx-auto gap-2"
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                {images.map((image, index) => (
                    <motion.a
                        key={index}
                    
                        className={`group relative block w-full bg-cover rounded-[25px] bg-center overflow-hidden ${
                            [1, 3, 5].includes(index) ? 'lg:mt-[50px]' : ''
                        }`}
                        style={{
                            backgroundImage: `url(${image})`,
                        }}
                        variants={cardVariants}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                    >
                        <div className="absolute inset-0  bg-opacity-50 group-hover:bg-opacity-15 transition duration-300"></div>
                        <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                            {/* Optional content */}
                        </div>
                    </motion.a>
                ))}
            </motion.section>
        </div>
    );
};

export default BiographyInHomePage;
