import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../navbar/Navbar';
import { FaCalendarCheck, FaDownload, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import poster5 from "../assets/birthdance2025/day-5.png"

const Day5 = () => {
    const users = [
        { name: 'WinMusicFreedom', link: 'https://www.instagram.com/WinMusicFreedom' },
        { name: 'Red Bull', made: "Kosova", link: 'https://www.instagram.com/redbullkosova/' },
        { name: 'Gekos Group ', made: "Drinks", link: 'https://www.instagram.com/gekosgroup/' },
        { name: 'Super Bock ', made: "Kosova", link: 'https://www.instagram.com/superbock.kosova/' },

        // { name: 'Waiting4you', made: "", link: '' },
    ];

    const location = [
        { name: 'edhe', made: "", link: 'https://www.instagram.com/e.dh.e/' },

    ];

    const music = [
        { name: 'Shuki', made: "5min StandUp", link: 'https://www.instagram.com/shukimentor/' },
        { name: 'Yoga', made: "Drith", link: 'https://www.instagram.com/drith_yoga/' },
        { name: 'Marti', made: "Hip Hop", link: '' },
        { name: 'Laila', made: "Swiss", link: 'https://www.instagram.com/lailammusic/' },
        { name: 'Nadal', made: "France", link: 'https://www.instagram.com/nadal_jr/' },
        { name: 'Rayo', made: "Montenegro", link: 'https://www.instagram.com/rayo_positive_crew/' },
        { name: 'Noki', made: "Home", link: 'https://www.instagram.com/lakuru_/' },
        // { name: 'Nesim Maxhuni', made: "Drum session", link: 'https://www.instagram.com/nesimmaxhuni/' },
        { name: 'Secret47', made: "Yours", link: 'https://www.instagram.com/secret47file/' },

    ];

    const produced = [
        { name: 'Trekuartista', made: "Powered", link: 'https://www.instagram.com/trekuartista/' },
        { name: 'Arian Ahmeti', made: "Art & Logo", link: 'https://www.instagram.com/arianahmetiart/' },
        { name: 'Trekuartista Print', made: "Gifts47", link: 'https://www.instagram.com/trekuartistaprintinghouse/' },
        { name: 'Elios Dhora', made: "Photographer", instagram: 'https://www.instagram.com/prettylightsz/'},
        { name: 'Erald Halili', made: "Visual Storyteller", instagram: 'https://www.instagram.com/erald.halili/'},
        { name: 'Crust N Crumb', made: "Juices & Desserts", link: 'https://www.instagram.com/crustncrumb.ks/' },
        { name: 'Pharmaser', made: "Pharmacy", link: 'https://www.instagram.com/pharmaser_/' },
        { name: 'Moon Artwork', made: "Make up", link: 'https://www.instagram.com/moon_artwork.lk/' },
        { name: 'Duka Alfa Studio', made: "Love Sound", link: 'https://www.instagram.com/dukalfaudio/' },
        { name: 'Garden', made: "Hotels", link: 'https://www.instagram.com/garden_hotels/' },
        { name: 'Zana Artist', made: "Live Art", link: 'https://www.instagram.com/zanaartist/' },
        { name: 'Tonny Gravity', made: "Calisthenics", link: 'https://www.instagram.com/__tonnygravity__/' },
        { name: 'Agon', made: "Magic", link: 'https://www.instagram.com/agonmagic/' },
        { name: 'Reks Ballon', made: "Ballons", link: 'https://www.instagram.com/reksballoon/' },
    ];

    const love = [
        { name: 'edhe', made: "Family", link: 'https://www.instagram.com/e.dh.e/' },
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
        <div className="text-black bg-[#00EDBF]">
            <Navbar />
            <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between lg:px-0 py-6 lg:py-20">
                {/* Back Button */}
                {/* <div className="absolute top-0 w-fit lg:right-6 left-5 lg:left-16 lg:my-4 z-10 border-[1px] hover:opacity-100 rounded-l-[25px] hover:bg-gradient-to-r from-[#FF0903] to-[#5c0200] hover:text-white opacity-35">
                    <Link
                        to="/birthdance/2025"
                        className="inline-flex items-center text-black rounded-full px-4 font-custom2 lg:px-8 "
                    >
                        <span className="mr-2 text-lg">↩</span> Back
                    </Link>
                </div> */}

                {/* Main Content */}
                <div className="w-full px-5 lg:px-16 flex flex-col-reverse lg:flex-row">
                    <div className='lg:w-1/2 pt-14 lg:pt-0'>
                        <p className="text-2xl lg:text-4xl font-bold text-black leading-tight font-custom3 uppercase">

                            <span className="text-xl lg:text-5xl text-black">Last dance<p>with healthy food, yoga...</p></span>
                            <span className="flex text-xl lg:text-3xl pt-1 items-center">
                                23.02.2025 Sunday - EDHE
                            </span>
                            {/* <span className="flex pt-1 items-center">
                            Wednesday
                        </span> */}
                        </p>
                        <div className='flex font-custom3 justify-between lg:justify-start items-center mt-3'>
                            <div>
                                <p className="text-base lg:text-lg text-black lg:pr-5 font-custom3">
                                    13:00h WITH KIDS
                                </p>
                                <p className="text-base lg:text-lg text-black lg:pr-5 font-custom3">
                                    16:00h ADULTS ONLY
                                </p>
                            </div>
                            <div>
                                <p className='uppercase'>Limited Capacity</p>
                            </div>
                        </div>

                        {/* <p className="text-sm lg:text-sm underline underline-offset-4 text-pink-800 mt-2 lg:pr-5 font-custom3">
                        Organized by Yllka Brada & Secret47
                    </p> */}

                        <div className="grid lg:grid-cols-1">
                            <div
                                className="my-8 grid lg:grid-cols-1 gap-1 lg:gap-2 pt-4 lg:border-none w-full lg:w-fit rounded-[25px]"

                            >
                                <p className="uppercase text-center lg:text-left font-custom3 text-2xl lg:text-3xl text-black">
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
                                            <button className="flex items-center justify-between w-72 lg:w-[300px] py-3 px-4 border-b-[2px] border-black text-black hover:shadow-md hover:shadow-black hover:border-none hover:text-black font-custom2">
                                                {/* E majta */}
                                                <div className="flex items-center space-x-3">
                                                    <FaInstagram color="black" className="w-6 h-6" />
                                                    <span className="text-sm lg:text-base font-custom3">{user.name}</span>
                                                </div>

                                                {/* E djathta */}
                                                {user.made && (
                                                    <span className="text-[10px] lg:text-[10px] font-custom3 text-black">
                                                        {user.made}
                                                    </span>
                                                )}
                                            </button>
                                        </a>
                                    </div>
                                ))}


                            </div>
                            <div
                                className="my-8 grid lg:grid-cols-1 gap-1 lg:gap-2 lg:border-none w-full lg:w-fit rounded-[25px]"

                            >
                                <p className="uppercase text-center lg:text-left font-custom3 text-2xl lg:text-3xl text-black">
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
                                            <button className="flex items-center justify-between w-72 lg:w-[300px] py-3 px-4 border-b-[2px] border-black text-black hover:shadow-md hover:shadow-black hover:border-none hover:text-black font-custom2">
                                                {/* E majta */}
                                                <div className="flex items-center space-x-3">
                                                    <FaInstagram color="black" className="w-6 h-6" />
                                                    <span className="text-sm lg:text-base font-custom3">{user.name}</span>
                                                </div>

                                                {/* E djathta */}
                                                {user.made && (
                                                    <span className="text-[10px] lg:text-[10px] font-custom3 text-black">
                                                        {user.made}
                                                    </span>
                                                )}
                                            </button>
                                        </a>
                                    </div>
                                ))}


                            </div>

                            <div
                                className="my-8 grid lg:grid-cols-1 gap-1 lg:gap-2 lg:border-none w-full lg:w-fit rounded-[25px]"

                            >
                                <p className="uppercase text-center lg:text-left font-custom3 text-2xl lg:text-3xl text-black">
                                    Artists
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
                                            <button className="flex items-center justify-between w-72 lg:w-[300px] py-3 px-4 border-b-[2px] border-black text-black hover:shadow-md hover:shadow-black hover:border-none hover:text-black font-custom2">
                                                {/* E majta */}
                                                <div className="flex items-center space-x-3">
                                                    <FaInstagram color="black" className="w-6 h-6" />
                                                    <span className="text-sm lg:text-base font-custom3">{user.name}</span>
                                                </div>

                                                {/* E djathta */}
                                                {user.made && (
                                                    <span className="text-[10px] lg:text-[10px] font-custom3 text-black">
                                                        {user.made}
                                                    </span>
                                                )}
                                            </button>
                                        </a>
                                    </div>
                                ))}


                            </div>
                            <div
                                className="my-8 grid lg:grid-cols-1 gap-1 lg:gap-2 lg:border-none w-full lg:w-fit rounded-[25px]"

                            >
                                <p className="uppercase text-center lg:text-left font-custom3 text-2xl lg:text-3xl text-black">
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
                                            <button className="flex items-center justify-between w-72 lg:w-[300px] py-3 px-4 border-b-[2px] border-black text-black hover:shadow-md hover:shadow-black hover:border-none hover:text-black font-custom2">
                                                {/* E majta */}
                                                <div className="flex items-center space-x-3">
                                                    <FaInstagram color="black" className="w-6 h-6" />
                                                    <span className="text-sm lg:text-base font-custom3">{user.name}</span>
                                                </div>

                                                {/* E djathta */}
                                                {user.made && (
                                                    <span className="text-[10px] lg:text-[10px] font-custom3 text-black">
                                                        {user.made}
                                                    </span>
                                                )}
                                            </button>
                                        </a>
                                    </div>
                                ))}


                            </div>
                            <div
                                className="my-8 grid lg:grid-cols-1 gap-1 lg:gap-2 lg:border-none w-full lg:w-fit rounded-[25px]"

                            >
                                <p className="uppercase text-center lg:text-left font-custom3 text-2xl lg:text-3xl text-black">
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
                                            <button className="flex items-center justify-between w-72 lg:w-[300px] py-3 px-4 border-b-[2px] border-black text-black hover:shadow-md hover:shadow-black hover:border-none hover:text-black font-custom2">
                                                {/* E majta */}
                                                <div className="flex items-center space-x-3">
                                                    <FaInstagram color="black" className="w-6 h-6" />
                                                    <span className="text-sm lg:text-base font-custom3">{user.name}</span>
                                                </div>

                                                {/* E djathta */}
                                                {user.made && (
                                                    <span className="text-[10px] lg:text-[10px] font-custom3 text-black">
                                                        {user.made}
                                                    </span>
                                                )}
                                            </button>
                                        </a>
                                    </div>
                                ))}


                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:sticky top-0 h-fit flex justify-center items-center border-[2px] border-black relative">
                        <img src={poster5} alt="Poster" />

                        {/* Download Button */}
                        <a
                            href={poster5}
                            download="birthdance2.png"
                            className="absolute bottom-[-40px] lg:bottom-[-50px] lg:left-1/2 lg:-translate-x-1/2 flex items-center text-black text-[11px] lg:text-sm border-black border-b-[2px] hover:shadow-md shadow-black hover:border-none hover:text-black hover:scale-105 hover:duration-300 ease-out font-custom3 p-1 lg:p-2 transition"
                        >
                            Download Poster <FaDownload className="ml-1" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Day5;
