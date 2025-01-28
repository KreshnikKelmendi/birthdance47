import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../navbar/Navbar';
import { FaCalendarCheck, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../assets/47---WHITE.png"

import poster4 from "../assets/birthdance2025/ArAund.mp4"

const Day4 = () => {
    const users = [
        { name:'Jagermeister', made: "Kosovo", instagram:'https://www.instagram.com/jagermeisterko/'},
        { name: 'WinMusicFreedom', link: 'https://www.instagram.com/WinMusicFreedom' },
        { name: 'Red Bull', made: "Kosova", link: 'https://www.instagram.com/redbullkosova/' },

    ];

    const location = [
        { name: 'ZONE', made: "CLUB", link: 'https://www.instagram.com/zoneclub/' },
       
    ];

    const music = [
        { name: `Unknown Secret's`, made: "", link: '' },

    ];

    const produced = [
        { name: 'Kuju', made: "Visuals",link: 'https://www.instagram.com/kujulightfestival/' },
        { name: 'FOTO GAGI', made: "47 Gifts",link: 'https://www.instagram.com/gagi_giftshop/' },
        { name: 'PM Creative Studio', made: "47",link: 'https://www.instagram.com/pellumbmetastudio/' },
        { name: 'Dekor Tropikal', made: "Decor",link: 'https://www.instagram.com/dekortropikal/' },

        { name: 'Trekuartista', made: "Powered",link: 'https://www.instagram.com/trekuartista/' },
        { name: 'Arian Ahmeti', made: "Art & Logo", link: 'https://www.instagram.com/trekuartista/' },
        { name: 'Elios Dhora', made: "Photographer", instagram: 'https://www.instagram.com/prettylightsz/'},
        { name: 'Erald Halili', made: "Visual Storyteller", instagram: 'https://www.instagram.com/erald.halili/'},
        { name: 'Next Level', made: "Artobatics", instagram: 'https://www.instagram.com/nxtlvl_events_entertainment/' },
        { name:'Moritz Eis', made: "Ice Cream", instagram: 'https://www.instagram.com/moritzeiskosovo/' },
        { name:'Bagolina Eatery', made: "Coffee 8am", instagram: 'https://www.instagram.com/bagolinaeatery/' },
        { name:'Matisse Patisserie', made: "Cake47", instagram: 'https://www.instagram.com/matisse.patisserie/' },
        { name:'Kujtim Arifi', made: "Lights", instagram: 'https://www.instagram.com/kujtiimarifi/'},
        { name: 'Duka Alfa Studio', made: "Love Sound", link: 'https://www.instagram.com/dukalfaudio/' },
        { name: 'Garden', made: "Hotels", link: 'https://www.instagram.com/garden_hotels/' },
        { name: 'Moon Artwork', made: "Make up", link: 'https://www.instagram.com/moon_artwork.lk/' },
        { name: 'Donat Krasniqi', made: "Live Art", link: 'https://www.instagram.com/donatkrasniqi_/' },
        { name: 'Adrianus', made: "Magic", link: 'https://www.instagram.com/adriankqiku/' },
        { name: 'Reks Ballon', made: "Ballons", link: 'https://www.instagram.com/reksballoon/' },
    ];

    const love = [
        { name: 'Kushtrim Sahiti', made: "Lumturia jonë", link: 'https://www.instagram.com/kushtrimsahiti/' },
        { name: 'Yllka Brada', made: "My ♥", link: 'https://www.instagram.com/yllkabradaofficial/' },
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
        <div className="text-[#FF4B2B] bg-black">
            {/* <Navbar /> */}
            <div className='flex justify-center items-center'>
            <Link to="/">
            <img
              className="px-4 lg:mx-1 lg:w-[130px] w-24 flex justify-center items-center h-auto object-contain z-50"
              src={logo}
              alt="Logo"
            />
          </Link>
          </div>
            <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between lg:px-0 py-12 lg:py-20">
                {/* Back Button */}
                <div className="absolute top-0 w-fit lg:right-6 left-5 lg:left-16 lg:my-4 z-10 border-[1px] hover:opacity-100 rounded-l-[25px] hover:bg-gradient-to-r from-[#FF0903] to-[#5c0200] hover:text-white opacity-35">
                    <Link
                        to="/birthdance/2025"
                        className="inline-flex items-center text-[#FF4B2B] rounded-full px-4 font-custom2 lg:px-8 "
                    >
                        <span className="mr-2 text-lg">↩</span> Back
                    </Link>
                </div>
               
                {/* Main Content */}
                <div className="w-full px-5 lg:px-16 flex flex-col lg:flex-row">
                <div className=' lg:w-1/2 pb-4 h-fit lg:hidden justify-center items-center '>
                    <video loop muted playsInline autoPlay src={poster4} alt='w-full h-full' />
                </div>
                    <div className='lg:w-1/2'>
                    
                    <p className="text-2xl lg:text-4xl font-bold text-[#FF4B2B] leading-tight tracking-[1px] font-custom3 uppercase">
                          
                        <span className="text-3xl lg:text-5xl text-[#FF4B2B">Main Marathon Dance</span> 
                        <span className="flex text-3xl pt-1 items-center">
                            22.02.2025 Saturday
                        </span>
                        {/* <span className="flex pt-1 items-center">
                            Wednesday
                        </span> */}
                    </p>
                    <p className="text-base lg:text-lg text-[#FF4B2B] mt-3 lg:pr-5 font-custom3">
                        23:00h ZONE CLUB / Please Reserve with ZONE
                    </p>
                   
                    {/* <p className="text-sm lg:text-sm underline underline-offset-4 text-pink-800 mt-2 lg:pr-5 font-custom3">
                        Organized by Yllka Brada & Secret47
                    </p> */}

                    <div className="grid lg:grid-cols-1">
                        <div
                            className="my-8 grid lg:grid-cols-1 gap-3 lg:gap-2 pt-4 lg:border-none w-full lg:w-fit rounded-[25px]"
                           
                        >
                            <p className="uppercase text-center lg:text-left font-custom3 text-3xl lg:text-3xl tracking-[1px] text-[#FF4B2B]">
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
                                        <button className="flex items-center w-[250px] justify-start space-x-3 font-custom2 py-3 px-4 border-b-[2px] border-[#FF4B2B] text-[#FF4B2B] hover:bg-gradient-to-r from-[#FF0903] to-[#5c0200] hover:text-white">
                                            <FaInstagram color='#FF4B2B' className="w-6 h-6" />
                                            <span className="text-sm lg:text-base font-custom3">{user.name}</span>
                                            {user.made && (
                                                <span className="text-[10px] lg:text-[10px] font-custom3 text-[#FF4B2B]">{user.made}</span>
                                                )}

                                        </button>
                                    </a>
                                </div>
                            ))}

                            
                        </div>
                        <div
                            className="my-8 grid lg:grid-cols-1 gap-3 lg:gap-2 lg:border-none w-full lg:w-fit rounded-[25px]"
                            
                        >
                            <p className="uppercase text-center lg:text-left font-custom3 text-3xl lg:text-3xl tracking-[1px] text-[#FF4B2B]">
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
                                        <button className="flex items-center w-[250px] justify-start space-x-3 font-custom2 py-3 px-4 border-b-[2px] border-[#FF4B2B] text-[#FF4B2B] hover:bg-[#D9C1DF] hover:text-black">
                                            <FaInstagram color='#FF4B2B' className="w-6 h-6" />
                                            <span className="text-sm lg:text-base font-custom3">{user.name}</span>
                                            {user.made && (
                                                <span className="text-[10px] lg:text-[10px] font-custom3 text-[#FF4B2B]">{user.made}</span>
                                            )}
                                        </button>
                                    </a>
                                </div>
                            ))}

                            
                        </div>

                        <div
                            className="my-8 grid lg:grid-cols-1 gap-3 lg:gap-2 lg:border-none w-full lg:w-fit rounded-[25px]"
                        
                        >
                            <p className="uppercase text-center lg:text-left font-custom3 text-3xl lg:text-3xl tracking-[1px] text-[#FF4B2B]">
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
                                        <button className="flex items-center w-[250px] justify-start space-x-3 font-custom2 py-3 px-4 border-b-[2px] border-[#FF4B2B] text-[#FF4B2B] hover:bg-gradient-to-r from-[#FF0903] to-[#5c0200] hover:text-white">
                                            {/* <FaInstagram color='#FF4B2B' className="w-6 h-6" /> */}
                                            <span className="text-sm lg:text-base font-custom3">{user.name}</span>
                                            {user.made && (
                                                <span className="text-[10px] lg:text-[10px] font-custom3 text-[#FF4B2B]">{user.made}</span>
                                                )}
                                        </button>
                                    </a>
                                </div>
                            ))}

                            
                        </div>
                        <div
                            className="my-8 grid lg:grid-cols-1 gap-3 lg:gap-2 lg:border-none w-full lg:w-fit rounded-[25px]"
                         
                        >
                            <p className="uppercase text-center lg:text-left font-custom3 text-3xl lg:text-3xl tracking-[1px] text-[#FF4B2B]">
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
                                        <button className="flex items-center w-[260px] justify-start space-x-3 font-custom2 py-3 px-4 border-b-[2px] border-[#FF4B2B] text-[#FF4B2B] hover:bg-gradient-to-r from-[#FF0903] to-[#5c0200] hover:text-white">
                                            <FaInstagram color='#FF4B2B' className="w-6 h-6" />
                                            <span className="text-sm lg:text-base font-custom3">{user.name}</span>
                                            {user.made && (
                                                <span className="text-[10px] lg:text-[10px] font-custom3 text-white">{user.made}</span>
                                            )}
                                        </button>
                                    </a>
                                </div>
                            ))}

                            
                        </div>
                        <div
                            className="my-8 grid lg:grid-cols-1 gap-3 lg:gap-2 lg:border-none w-full lg:w-fit rounded-[25px]"
                           
                        >
                            <p className="uppercase text-center lg:text-left font-custom3 text-3xl lg:text-3xl tracking-[1px] text-[#FF4B2B]">
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
                                        <button className="flex items-center w-[270px] justify-start space-x-3 font-custom2 py-3 px-4 border-b-[2px] border-[#FF4B2B] text-[#FF4B2B] hover:bg-gradient-to-r from-[#FF0903] to-[#5c0200] hover:text-white">
                                            <FaInstagram color='#FF4B2B' className="w-6 h-6" />
                                            <span className="text-sm lg:text-base font-custom3">{user.name}</span>
                                            {user.made && (
                                                <span className="text-[10px] lg:text-[10px] font-custom3 text-white">{user.made}</span>
                                            )}
                                        </button>
                                    </a>
                                </div>
                            ))}

                            
                        </div>
                    </div>
                </div>
                <div className='hidden lg:w-1/2 sticky top-0 h-fit lg:flex justify-center items-center '>
                    <video loop muted playsInline autoPlay src={poster4} alt='w-full h-full' />
                </div>
                </div>
            </div>
        </div>
    );
};

export default Day4;
