import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../navbar/Navbar';
import { FaCalendarCheck, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import poster2 from "../assets/birthdance2025/day-2.png"

const Day2 = () => {
    const users = [
        // { name: 'WinMusicFreedom', link: 'https://www.instagram.com/WinMusicFreedom' },
        { name: 'Red Bull Kosova', link: 'https://www.instagram.com/redbullkosova/' },

    ];

    const location = [
        { name: 'Grape', made: "Hotel Garden", link: 'https://www.instagram.com/grapemembers/' },
       
    ];

    const music = [
        { name: 'Veleyle', link: 'https://www.instagram.com/veleyle/' },
        { name: 'Laila', link: 'https://www.instagram.com/lailammusic/' },
        { name: 'Nadal', link: 'https://www.instagram.com/nadal_jr/' },
        { name: 'Secret47', link: 'https://www.instagram.com/secret47file/' },
        

    ];

    const produced = [
        { name: 'Trekuartista', made: "Powered",link: 'https://www.instagram.com/trekuartista/' },
        { name: 'Arian Ahmeti', made: "Art & Logo", link: 'https://www.instagram.com/trekuartista/' },
        { name: 'Duka Alfa Studio', made: "Love Sound", link: 'https://www.instagram.com/dukalfaudio/' },
        { name: 'Garden', made: "Hotels", link: 'https://www.instagram.com/garden_hotels/' },
        { name: 'Moon Artwork', made: "Make up", link: 'https://www.instagram.com/moon_artwork.lk/' },
        { name: 'Donat Krasniqi', made: "Live Art", link: 'https://www.instagram.com/donatkrasniqi_/' },
        { name: 'Adrianus', made: "Magic", link: 'https://www.instagram.com/adriankqiku/' },
        { name: 'Reks Ballon', made: "Ballons", link: 'https://www.instagram.com/reksballoon/' },
    ];

    const love = [
        { name: 'Yllka Brada', made: "My ♥", link: 'https://www.instagram.com/yllkabradaofficial/' },
        { name: 'Valdrin Drenovci', made: "The 1", link: 'https://www.instagram.com/yllkabradaofficial/' },

    ];

    // const { ref: containerRef, inView: containerInView } = useInView({
    //     triggerOnce: true,
    // });

    // const iconAnimation = {
    //     hidden: { opacity: 0, x: -50 }, // Starts closer to reduce vibration
    //     visible: (index) => ({
    //         opacity: 1,
    //         x: 0, // Moves smoothly to its final position
    //         transition: {
    //             duration: 0.5, // Faster animation
    //             delay: index * 0.15, // Staggered delay for a faster sequence
    //             ease: 'easeInOut', // Smooth and natural easing
    //         },
    //     }),
    // };

    return (
        <div className="text-black bg-[#EFEFEF]">
            <Navbar />

            <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between lg:px-0 py-12 lg:py-20">
                {/* Back Button */}
                <div className="absolute top-0 w-fit lg:right-6 left-5 lg:left-16 lg:my-4 z-10 border-[1px] hover:opacity-100 rounded-l-[25px] hover:bg-gradient-to-r from-[#FF0903] to-[#5c0200] hover:text-white opacity-35">
                    <Link
                        to="/birthdance/2025"
                        className="inline-flex items-center text-black rounded-full px-4 font-custom2 lg:px-8 "
                    >
                        <span className="mr-2 text-lg">↩</span> Back
                    </Link>
                </div>

                {/* Main Content */}
                <div className="w-full px-5 lg:px-16 flex flex-col lg:flex-row">
                    <div className='lg:w-1/2'>
                    <p className="text-2xl lg:text-4xl font-bold text-black leading-tight tracking-[1px] font-custom3 uppercase">
                          
                        <span className="text-3xl lg:text-5xl text-black">White Theme Dance <span className='text-xl'>(white only)</span></span> <br />
                        <span className="flex text-3xl pt-1 items-center">
                            20.02.2025 Thursday
                        </span>
                        {/* <span className="flex pt-1 items-center">
                            Wednesday
                        </span> */}
                    </p>
                    <p className="text-base lg:text-lg text-black mt-3 lg:pr-5 font-custom3">
                        22:00h Grape / Limited Capacity / Please Reserve with Grape
                    </p>
                    <p className="text-base lg:text-lg text-black mt-3 lg:pr-5 font-custom3">
                        Dress Code <span className='bg-white p-2'>WHITE</span>only allowed
                        <p className='text-sm flex flex-col justify-start pt-2'>Organized by Yllka Brada & Secret47</p>
                    </p>
                    {/* <p className="text-sm lg:text-sm underline underline-offset-4 text-pink-800 mt-2 lg:pr-5 font-custom3">
                        Organized by Yllka Brada & Secret47
                    </p> */}

                    <div className="grid lg:grid-cols-1">
                        <div
                            className="my-8 grid lg:grid-cols-1 gap-3 lg:gap-2 pt-4 lg:border-none w-full lg:w-fit rounded-[25px]"
                           
                        >
                            <p className="uppercase text-center lg:text-left font-custom3 text-3xl lg:text-3xl tracking-[1px] text-black">
                                Made Possible
                            </p>
                     

                            {/* Instagram Users */}
                            {users?.map((user, index) => (
                                <div
                                    key={user.name}
                                    className="flex items-center justify-center lg:justify-start transform duration-300 lg:w-80"
                                    initial="hidden"
                                  
                                    custom={index}
                                >
                                    <a
                                        href={user.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <button className="flex items-center w-[250px] justify-start space-x-3 font-custom2 py-3 px-4 border-b-[2px] border-black text-black hover:bg-gradient-to-r from-[#FF0903] to-[#5c0200] hover:text-white">
                                            <FaInstagram color='black' className="w-6 h-6" />
                                            <span className="text-sm lg:text-base font-custom3">{user.name}</span>
                                            {user.made && (
                                                <span className="text-sm lg:text-base font-custom3 text-black">{user.made}</span>
                                                )}

                                        </button>
                                    </a>
                                </div>
                            ))}

                            
                        </div>
                        <div
                            className="my-8 grid lg:grid-cols-1 gap-3 lg:gap-2 lg:border-none w-full lg:w-fit rounded-[25px]"
                            
                        >
                            <p className="uppercase text-center lg:text-left font-custom3 text-3xl lg:text-3xl tracking-[1px] text-black">
                               Location
                            </p>
                         

                            {/* Instagram Users */}
                            {location?.map((user, index) => (
                                <div
                                    key={user.name}
                                    className="flex items-center justify-center lg:justify-start transform duration-300 lg:w-80"
                                    initial="hidden"
                                    
                                    custom={index}
                                >
                                    <a
                                        href={user.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <button className="flex items-center w-[250px] justify-start space-x-3 font-custom2 py-3 px-4 border-b-[2px] border-black text-black hover:bg-[#D9C1DF] hover:text-black">
                                            <FaInstagram color='black' className="w-6 h-6" />
                                            <span className="text-sm lg:text-base font-custom3">{user.name}</span>
                                            {user.made && (
                                                <span className="text-[10px] lg:text-[10px] font-custom3 text-gray-500">{user.made}</span>
                                            )}
                                        </button>
                                    </a>
                                </div>
                            ))}

                            
                        </div>

                        <div
                            className="my-8 grid lg:grid-cols-1 gap-3 lg:gap-2 lg:border-none w-full lg:w-fit rounded-[25px]"
                        
                        >
                            <p className="uppercase text-center lg:text-left font-custom3 text-3xl lg:text-3xl tracking-[1px] text-black">
                                Music
                            </p>
                         

                            {/* Instagram Users */}
                            {music?.map((user, index) => (
                                <div
                                    key={user.name}
                                    className="flex items-center justify-center lg:justify-start transform duration-300 lg:w-80"
                                    initial="hidden"
                                  
                                    custom={index}
                                >
                                    <a
                                        href={user.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <button className="flex items-center w-[250px] justify-start space-x-3 font-custom2 py-3 px-4 border-b-[2px] border-black text-black hover:bg-gradient-to-r from-[#FF0903] to-[#5c0200] hover:text-white">
                                            <FaInstagram color='black' className="w-6 h-6" />
                                            <span className="text-sm lg:text-base font-custom3">{user.name}</span>
                                        </button>
                                    </a>
                                </div>
                            ))}

                            
                        </div>
                        <div
                            className="my-8 grid lg:grid-cols-1 gap-3 lg:gap-2 lg:border-none w-full lg:w-fit rounded-[25px]"
                         
                        >
                            <p className="uppercase text-center lg:text-left font-custom3 text-3xl lg:text-3xl tracking-[1px] text-black">
                                Produced
                            </p>
                        

                            {/* Instagram Users */}
                            {produced?.map((user, index) => (
                                <div
                                    key={user.name}
                                    className="flex items-center justify-center lg:justify-start transform duration-300 lg:w-80"
                                    initial="hidden"
                                   
                                    custom={index}
                                >
                                    <a
                                        href={user.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <button className="flex items-center w-[260px] justify-start space-x-3 font-custom2 py-3 px-4 border-b-[2px] border-black text-black hover:bg-gradient-to-r from-[#FF0903] to-[#5c0200] hover:text-white">
                                            <FaInstagram color='black' className="w-6 h-6" />
                                            <span className="text-sm lg:text-base font-custom3">{user.name}</span>
                                            {user.made && (
                                                <span className="text-[10px] lg:text-[10px] font-custom3 text-gray-500">{user.made}</span>
                                            )}
                                        </button>
                                    </a>
                                </div>
                            ))}

                            
                        </div>
                        <div
                            className="my-8 grid lg:grid-cols-1 gap-3 lg:gap-2 lg:border-none w-full lg:w-fit rounded-[25px]"
                           
                        >
                            <p className="uppercase text-center lg:text-left font-custom3 text-3xl lg:text-3xl tracking-[1px] text-black">
                                MAX Love
                            </p>
                        

                            {/* Instagram Users */}
                            {love?.map((user, index) => (
                                <div
                                    key={user.name}
                                    className="flex items-center justify-center lg:justify-start transform duration-300 lg:w-80"
                                    initial="hidden"
                                 
                                    custom={index}
                                >
                                    <a
                                        href={user.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <button className="flex items-center w-[250px] justify-start space-x-3 font-custom2 py-3 px-4 border-b-[2px] border-black text-black hover:bg-gradient-to-r from-[#FF0903] to-[#5c0200] hover:text-white">
                                            <FaInstagram color='black' className="w-6 h-6" />
                                            <span className="text-sm lg:text-base font-custom3">{user.name}</span>
                                            {user.made && (
                                                <span className="text-[10px] lg:text-[10px] font-custom3 text-gray-500">{user.made}</span>
                                            )}
                                        </button>
                                    </a>
                                </div>
                            ))}

                            
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 sticky top-0 h-fit flex justify-center items-center '>
                    <img src={poster2} alt='w-full h-full' />
                </div>
                </div>
            </div>
        </div>
    );
};

export default Day2;
