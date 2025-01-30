import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import muteIcon from '../assets/off.png';
import unmuteIcon from '../assets/on.png';
import logo from "../assets/47---WHITE.png"
import TiranaPoster from './TiranaPoster';

const Day6 = () => {
    const users = [
        { name: 'WinMusicFreedom', made: "Albania", link: 'https://www.instagram.com/winmusicfreedomalbania/' },
    ];

    const location = [
        { name: 'Tunel', made: "Tirana", link: 'https://www.instagram.com/tunelmusicvenue/' },
    ];

    const music = [
        // { name: 'Laila', made: "Swiss", link: 'https://www.instagram.com/lailammusic/' },
        // { name: 'Nadal', made: "France", link: 'https://www.instagram.com/nadal_jr/' },
        // { name: 'Rayo', made: "Montenegro", link: 'https://www.instagram.com/rayo_positive_crew/' },
        // { name: 'Noki', made: "Home", link: 'https://www.instagram.com/lakuru_/' },
        // { name: 'Secret47', made: "Yours", link: 'https://www.instagram.com/secret47file/' },
        { name: `Secret LineUP`, made: "", link: '' },
    ];

    const produced = [
        { name: 'Trekuartista', made: "Powered", link: 'https://www.instagram.com/trekuartista/' },
        { name: 'Arian Ahmeti', made: "Art & Logo", link: 'https://www.instagram.com/trekuartista/' },
        { name: 'Moki Wear', made: "Kimono", link: 'https://www.instagram.com/moki.wear/' },
        { name: 'Faces & Places', made: "Hotel", link: 'https://www.instagram.com/facesandplaces.al/' },
        { name: 'Unknown', made: "Make up", link: '' },
        { name: 'Unknown', made: "Live Art", link: '' },
        { name: 'Adrianus', made: "Magic", link: 'https://www.instagram.com/adriankqiku/' },
    ];

    const love = [
        { name: 'Danier Shkurti', made: "The 1", link: 'https://www.instagram.com/danier.sh/' },
    ];

    return (
        <div className="text-[#FFD200] bg-black">
            {/* <Navbar /> */}
            <div className='flex justify-center items-center'>
                <Link to="/">
                    <img
                        className="px-4 lg:mx-1 pt-6 lg:w-[130px] w-24 flex justify-center items-center h-auto object-contain z-50"
                        src={logo}
                        alt="Logo"
                    />
                </Link>
            </div>

            <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between lg:px-0 py-6 lg:py-20">
                {/* Main Content */}
                <div className="w-full px-5 lg:px-16 flex flex-col lg:flex-row">
                    <div className='block lg:hidden'>
                        <TiranaPoster />
                    </div>
                    <div className='lg:w-1/2 pt-3 lg:pt-0'>
                        <p className="text-2xl lg:text-4xl font-bold text-[#FFD200] leading-tight font-custom3 uppercase">

                            <span className="text-xl lg:text-5xl text-[#FFD200]">1ST BIRTHDANCE IN TIRANA</span>
                            <span className="flex text-xl lg:text-3xl pt-1 items-center">
                                01.03.2025 Saturday - TUNEL
                            </span>
                        </p>

                        <p className="text-[15px] lg:text-lg text-[#FFD200] mt-3 lg:pr-5 font-custom3">
                            22:00h / Limited Capacity / Please Reserve with TUNEL
                        </p>


                        <div className="grid lg:grid-cols-1">
                            <div className="my-8 grid lg:grid-cols-1 gap-1 lg:gap-2 pt-4 lg:border-none w-full lg:w-fit rounded-[25px]">
                                <p className="uppercase text-center lg:text-left font-custom3 text-2xl lg:text-3xl tracking-[1px] text-[#FFD200]">
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
                                            <button className="flex items-center justify-between w-72 lg:w-[300px] py-3 px-4 border-b-[2px] border-[#FFD200] text-[#FFD200] hover:shadow-md hover:shadow-white hover:border-none hover:text-white font-custom2">
                                                <div className="flex items-center space-x-3">
                                                    <FaInstagram color="#FFD200" className="w-6 h-6" />
                                                    <span className="text-sm lg:text-base font-custom3">{user.name}</span>
                                                </div>
                                                {user.made && (
                                                    <span className="text-[10px] lg:text-[10px] font-custom3 text-[#FFD200]">
                                                        {user.made}
                                                    </span>
                                                )}
                                            </button>
                                        </a>
                                    </div>
                                ))}
                            </div>

                            <div className="my-6 grid lg:grid-cols-1 gap-1 lg:gap-2 lg:border-none w-full lg:w-fit rounded-[25px]" >
                                <p className="uppercase text-center lg:text-left font-custom3 text-2xl lg:text-3xl tracking-[1px] text-[#FFD200]">
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
                                            <button className="flex items-center justify-between w-72 lg:w-[300px] py-3 px-4 border-b-[2px] border-[#FFD200] text-[#FFD200] hover:shadow-md hover:shadow-white hover:border-none hover:text-white font-custom2">
                                                <div className="flex items-center space-x-3">
                                                    <FaInstagram color="#FFD200" className="w-6 h-6" />
                                                    <span className="text-sm lg:text-base font-custom3">{user.name}</span>
                                                </div>
                                                {user.made && (
                                                    <span className="text-[10px] lg:text-[10px] font-custom3 text-[#FFD200]">
                                                        {user.made}
                                                    </span>
                                                )}
                                            </button>
                                        </a>
                                    </div>
                                ))}
                            </div>

                            <div className="my-8 grid lg:grid-cols-1 gap-1 lg:gap-2 lg:border-none w-full lg:w-fit rounded-[25px]">
                                <p className="uppercase text-center lg:text-left font-custom3 text-2xl lg:text-3xl tracking-[1px] text-[#FFD200]">
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
                                            <button className="flex items-center justify-between w-72 lg:w-[300px] py-3 px-4 border-b-[2px] border-[#FFD200] text-[#FFD200] hover:shadow-md hover:shadow-white hover:border-none hover:text-whitefont-custom2">
                                                <div className="flex items-center space-x-3">
                                                    <FaInstagram color="#FFD200" className="w-6 h-6" />
                                                    <span className="text-sm lg:text-base font-custom3">{user.name}</span>
                                                </div>
                                                {user.made && (
                                                    <span className="text-[10px] lg:text-[10px] font-custom3 text-[#FFD200]">
                                                        {user.made}
                                                    </span>
                                                )}
                                            </button>
                                        </a>
                                    </div>
                                ))}
                            </div>

                            <div className="my-8 grid lg:grid-cols-1 gap-1 lg:gap-2 lg:border-none w-full lg:w-fit rounded-[25px]">
                                <p className="uppercase text-center lg:text-left font-custom3 text-2xl lg:text-3xl tracking-[1px] text-[#FFD200]">
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
                                            <button className="flex items-center justify-between w-72 lg:w-[300px] py-3 px-4 border-b-[2px] border-[#FFD200] text-[#FFD200] hover:shadow-md hover:shadow-white hover:border-none hover:text-white font-custom2">
                                                <div className="flex items-center space-x-3">
                                                    <FaInstagram color="#FFD200" className="w-6 h-6" />
                                                    <span className="text-sm lg:text-base font-custom3">{user.name}</span>
                                                </div>
                                                {user.made && (
                                                    <span className="text-[10px] lg:text-[10px] font-custom3 text-[#FFD200]">
                                                        {user.made}
                                                    </span>
                                                )}
                                            </button>
                                        </a>
                                    </div>
                                ))}
                            </div>

                            <div className="my-8 grid lg:grid-cols-1 gap-1 lg:gap-2 lg:border-none w-full lg:w-fit rounded-[25px]">
                                <p className="uppercase text-center lg:text-left font-custom3 text-2xl lg:text-3xl tracking-[1px] text-[#FFD200]">
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
                                            <button className="flex items-center justify-between w-72 lg:w-[300px] py-3 px-4 border-b-[2px] border-[#FFD200] text-[#FFD200] hover:shadow-md hover:shadow-white hover:border-none hover:text-white font-custom2">
                                                <div className="flex items-center space-x-3">
                                                    <FaInstagram color="#FFD200" className="w-6 h-6" />
                                                    <span className="text-sm lg:text-base font-custom3">{user.name}</span>
                                                </div>
                                                {user.made && (
                                                    <span className="text-[10px] lg:text-[10px] font-custom3 text-[#FFD200]">
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
                    <div className='hidden lg:flex lg:w-1/2 sticky top-0 h-fit justify-center items-center border-[3px] border-[#FFD200]'>
                        <TiranaPoster />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Day6;
