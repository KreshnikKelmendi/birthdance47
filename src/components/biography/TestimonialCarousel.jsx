import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TestimonialCarousel = () => {
    // Testimonial data
    const testimonials = [
        {
            name: 'John Doe',
            title: 'Event Planner',
            testimonial: `DJ Secret47 is amazing! The music was absolutely perfect for the vibe I was going for at my event. My guests couldn't stop dancing. Highly recommend!`,
            image: 'https://your-image-url.jpg'
        },
        {
            name: 'Jane Smith',
            title: 'Wedding Coordinator',
            testimonial: `If you're looking for an unforgettable DJ, DJ Secret47 is your guy! The energy and music selection kept everyone entertained from start to finish.`,
            image: 'https://your-image-url.jpg'
        },
        {
            name: 'Carlos Ruiz',
            title: 'Party Host',
            testimonial: `DJ Secret47 made my birthday unforgettable! The mix of genres and seamless transitions were a hit with everyone!`,
            image: 'https://your-image-url.jpg'
        },
        {
            name: 'Emily Turner',
            title: 'Corporate Event Manager',
            testimonial: `DJ Secret47 brought the perfect balance of fun and professionalism to our corporate event. He tailored the music to our crowd perfectly!`,
            image: 'https://your-image-url.jpg'
        },
        {
            name: 'Sophia Lane',
            title: 'Event Organizer',
            testimonial: `From start to finish, DJ Secret47's performance was flawless. Everyone had an amazing time dancing to his beats!`,
            image: 'https://your-image-url.jpg'
        },
        {
            name: 'Michael Brown',
            title: 'Birthday Host',
            testimonial: `DJ Secret47 knows how to set the mood! Everyone at my party was asking about him. Highly recommended!`,
            image: 'https://your-image-url.jpg'
        }
    ];

    // State to manage the visibility of testimonials
    const [visibleTestimonials, setVisibleTestimonials] = useState(3);
    const [isExpanded, setIsExpanded] = useState(false);

    // Intersection Observer Hook
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    // Toggle testimonials visibility
    const toggleTestimonials = () => {
        if (isExpanded) {
            setVisibleTestimonials(3);
        } else {
            setVisibleTestimonials(testimonials.length);
        }
        setIsExpanded(!isExpanded);
    };

    // Animation Variants
    const animationVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <section>
            <div className="py-8 px-5 mx-auto text-center lg:py-16 lg:px-16">
                <div className="text-center mb-6 lg:mb-12">
                    <h2 className="text-3xl md:text-[65px] font-bold mb-6 font-custom1 leading-[75px]">
                        What people say about DJ Secret
                        <span className="font-custom ml-3 text-[#FF0903]">47</span>
                    </h2>
                    <p className="text-lg opacity-80 font-custom2">
                        Your event deserves the best music and vibes. Let me make your party unforgettable!
                    </p>
                </div>

                <motion.div
                    ref={ref}
                    className="grid mb-8 lg:mb-12 lg:grid-cols-3 gap-8 "
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                    }}
                >
                    {testimonials.slice(0, visibleTestimonials).map((testimonial, index) => (
                        <motion.figure
                            key={index}
                            variants={animationVariants}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col justify-center rounded-[25px] relative p-8 text-center border border-gray-500 lg:py-16 2xl:py-20 dark:bg-gray-800 dark:border-gray-700"
                        >
                            <blockquote className="mx-auto mb-8 max-w-2xl text-white dark:text-gray-400">
                                <h3 className="text-sm lg:text-base text-white dark:text-white font-custom2">
                                    {testimonial.testimonial}
                                </h3>
                            </blockquote>
                            <figcaption className="flex justify-center items-center space-x-3">
                                <img
                                    className="w-9 h-9 rounded-full"
                                    src={testimonial.image}
                                    alt="profile"
                                />
                                <div className="space-y-0.5 font-medium dark:text-white text-left">
                                    <div>{testimonial.name}</div>
                                    <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        {testimonial.title}
                                    </div>
                                </div>
                            </figcaption>
                            <svg className='opacity-15 absolute left-2 top-1 w-10 h-10 lg:w-[40px] lg:h-[40px]' fill="gray" width="60px" height="60px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d='M.78,8.89c0-3.07,1.53-4.3,4.3-4.34L5.38,6C3.78,6.17,3,7,3.1,8.31H4.54V12H.78Zm5.9,0c0-3.07,1.53-4.3,4.3-4.34L11.28,6C9.68,6.17,8.89,7,9,8.31h1.44V12H6.68Z' />
                                <path d='M16.94,15.11c0,3.07-1.53,4.3-4.3,4.34L12.35,18c1.6-.16,2.39-1,2.28-2.3H13.18V12h3.76Zm5.9,0c0,3.07-1.53,4.3-4.3,4.34L18.24,18c1.6-.16,2.39-1,2.28-2.3H19.08V12h3.76Z' />
                            </svg>
                            <svg className='opacity-15 absolute right-2 bottom-1 w-10 h-10 lg:w-[40px] lg:h-[40px]' fill="gray" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d='M.78,8.89c0-3.07,1.53-4.3,4.3-4.34L5.38,6C3.78,6.17,3,7,3.1,8.31H4.54V12H.78Zm5.9,0c0-3.07,1.53-4.3,4.3-4.34L11.28,6C9.68,6.17,8.89,7,9,8.31h1.44V12H6.68Z' />
                                <path d='M16.94,15.11c0,3.07-1.53,4.3-4.3,4.34L12.35,18c1.6-.16,2.39-1,2.28-2.3H13.18V12h3.76Zm5.9,0c0,3.07-1.53,4.3-4.3,4.34L18.24,18c1.6-.16,2.39-1,2.28-2.3H19.08V12h3.76Z' />
                            </svg>
                        </motion.figure>
                        
                    ))}
                </motion.div>

                <div className="text-center">
                    <button
                        onClick={toggleTestimonials}
                        className="relative mt-6 font-custom1 uppercase px-6 w-[220px] rounded-tl-[25px] rounded-br-[25px] py-3 bg-gradient-to-r from-[#FF0903] to-[#5c0200] text-white tracking-[1px] font-medium text-2xl shadow-lg overflow-hidden transition duration-300 group"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-[#5c0200] to-[#FF0903] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out z-0"></span>
                        <span className="relative z-10">{isExpanded ? 'Show less' : 'Show more...'}</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialCarousel;
