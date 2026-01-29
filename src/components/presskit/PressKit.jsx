import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPlay, FaDownload } from 'react-icons/fa';
import whiteLogo from "../assets/47---WHITE.png";
import bannerVideo from "../assets/superkit/banner-secret.mp4";
import muteIcon from "../assets/off.png";
import unmuteIcon from "../assets/on.png";

// Import videos from superkit folder
import video1 from "../assets/superkit/video-2.mp4";
import video2 from "../assets/superkit/video-1.mp4";
import video3 from "../assets/superkit/video-3.mp4";
import video4 from "../assets/superkit/video-4.mp4";
import video5 from "../assets/superkit/video-5.mp4";


const videos = [
    { id: 1, src: video1, title: "Video 1", colSpan: "md:col-span-1", rowSpan: "md:row-span-2", height: "h-[400px] md:h-[86vh]" },
    { id: 2, src: video2, title: "Video 2", colSpan: "md:col-span-1", rowSpan: "md:row-span-1", height: "h-[300px] md:h-[42.5vh]" },
    { id: 3, src: video3, title: "Video 3", colSpan: "md:col-span-1", rowSpan: "md:row-span-1", height: "h-[300px] md:h-[42.5vh]" },
    { id: 4, src: video4, title: "Video 4", colSpan: "md:col-span-1", rowSpan: "md:row-span-1", height: "h-[300px] md:h-[42.5vh]" },
    { id: 5, src: video5, title: "Video 5", colSpan: "md:col-span-1", rowSpan: "md:row-span-1", height: "h-[300px] md:h-[42.5vh]" },
];

// Biography content component
const BiographyContent = ({ isExpanded }) => {
    const biographyText = `From New York to Pristina & beyond, few have not heard about him and enjoyed his charismatic personality. Notorious event planner & dj, known to organize some of the best parties in New York and beyond, Genti has a deep passion not only for music but for bringing it to the masses. As a promoter he's organized over 500 nights & played over 2000

Genti was born with a silver turntable in his mouth. Well, Kind of. His aunt Ilirjana, a famous pop singer, took him to see his uncle Ilir (the first DJ in Kosova) playing at a club. He was 5-years-old, the legal age to party in Kosovo. He watched his uncle on the turntables mixing funk and soul music, feeling the energy it gave to people, made his first Nightmove on an un-suspecting 7 year old girl, and knew right there and then that music would be a big part of his life.

When Cd's finally arrived in Kosovo around 1997, he received a copy of Kruder and Dorfmeisters DJ Kicks & Thievery Corporation Sounds of Thievery Hi-Fi which had a huge impact on his thoughts about music.

Then came New York City - Twilo/Vinyl - Danny Tenagia/Danny Howells/Lee Burridge etc. In the winter of 2000, Genti, his brother Noki & Probus founded Buyrum, a promotional company that began renting loft spaces and various clubs, organizing boat parties, gigs at hotel penthouses and lounges throughout the city, with crowds who shared a love for music and a sense of belonging. Buyrum opened its doors to various artists who jammed at the parties – singers, percussionists, guitar, sax players, DJs and VJs, who became and remained dedicated contributors. In 2005, New York Times wrote a very favorable review on Buyrum parties. This year will be the Annual 24th year Halloween night.

In 2003, he established Music Logistics, a company that creates unique sound identity for upscale companies such as hotels, boutiques, restaurants, etc.

In 2005, he co-founded the More Lounge in mid-town Manhattan, a successful small restorant/club that hosted different events every day of the week & the best afterhours place at the time, that kept the doors open until the sun came up.

He worked with the top promoters, musicians, fashion designers and DJs in New York, played in the best clubs such as Cielo, Crobar, Pacha, Spirit, Sullivan Room, Le Souk etc, also Kazantip & Exit Festival, Katerholzig - Berlin, London, Miami, Brazil, San Francisco, Swiss, Amsterdam, Los Angeles - Voodoo, Paris, Morocco, Burning man etc. Playing next to DJ's: Acid Pauli, Ricardo Villalobos, Nu, Luciano, Lee Burridge, Black Coffee, Mira, Livio & Roby, Tale of Us, Seth Troxler, Sabo, Nic Fanciulli, Naka, Audiofly, Satoshi Tomiie, Funk D'void, Pascal Feos, Richard Dorfmeister, Loco Dice, Lee Jones, Terry Francis, Terje Bakke, Eddie Richards, Toton, Heidi, Italoboyz, Adultnapper, Dave Mothersole, Johnny D, Oxia, Luke Fair, M.A.N.D.Y, FEX, Chaim, Andrea Oliva, Kabale und Liebe, Dave Seaman, Anja Schneider, Sonja Moonear, Timo Mass, Adriatique, Guti, Goldcap, Laura Jones, Nina Kraviz, Ame, Dixon, Be Svendsen, Eduardo Castillo, Shonky and many more ….

In 2006 a big decision was made: He cut his hair and went back to Kosova/Prishtina, brought the experience home and founded Spray Club with his cousin Bersant. In two years, Spray became world famous, booking over 60 International Dj's a year. Dj Mag had a two page story that followed later.

Now, he plays regularly at top 10 best clubs in the world www.nordstern.com & he is part of UNUM festival & Epizode in Albania & was part of the team at White Ocean (biggest stage in Burning man) & Habitas

`;

    const words = biographyText.split(' ');
    const previewWords = words.slice(0, 350);
    const displayText = isExpanded ? biographyText : previewWords.join(' ') + '...';

    return (
        <div className="space-y-6 text-sm lg:text-base leading-[1.9] font-custom2 text-black">
            {displayText.split('\n\n').map((paragraph, index) => {
                if (!paragraph.trim()) return null;
                
                return (
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="text-justify"
                    >
                        {paragraph.includes('www.nordstern.com') ? (
                            <>
                                {paragraph.split('www.nordstern.com')[0]}
                                <a href="https://www.nordstern.com" target="_blank" rel="noopener noreferrer" className="text-[#FF0903] hover:underline font-semibold">www.nordstern.com</a>
                                {paragraph.split('www.nordstern.com')[1]}
                            </>
                        ) : (
                            paragraph
                        )}
                    </motion.p>
                );
            })}
            
            {isExpanded && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="pt-8 mt-8 border-t-2 border-[#FF0903] border-opacity-20"
                >
                    <p className="text-xl lg:text-2xl font-semibold italic text-center text-[#FF0903] leading-relaxed">
                        Genti is a very positive force. On his free time he likes long walks on short piers and enjoys picnics with sashimi & homemade lemonde
                    </p>
                </motion.div>
            )}
        </div>
    );
};

const PressKit = () => {
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [videoMutedStates, setVideoMutedStates] = useState({});
    const [isBiographyExpanded, setIsBiographyExpanded] = useState(false);
    const videoRef = useRef(null);
    const videoContainerRef = useRef(null);
    const videoRefs = useRef({});

    useEffect(() => {
        // Try to autoplay on mount
        if (videoRef.current) {
            videoRef.current.play().then(() => {
                setIsPlaying(true);
            }).catch(error => {
                console.log("Autoplay blocked:", error);
            });
        }
    }, []);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement && videoContainerRef.current) {
            videoContainerRef.current.requestFullscreen().then(() => {
                setIsFullscreen(true);
            }).catch(err => {
                console.log("Error attempting to enable fullscreen:", err);
            });
        } else {
            document.exitFullscreen().then(() => {
                setIsFullscreen(false);
            });
        }
    };

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    return (
        <div className="min-h-screen text-white relative">
            {/* Custom Header with White Logo Centered */}
            <header className="w-full px-4 lg:px-8 py-4 lg:py-6 flex items-center justify-center z-50 relative">
                <Link to="/">
                    <motion.img
                        src={whiteLogo}
                        alt="Logo"
                        className="w-24 lg:w-32 h-auto object-contain"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </Link>
            </header>
            
            {/* Absolute Video Section */}
            <div 
                ref={videoContainerRef}
                className="absolute top-0 left-0 w-full h-screen z-0"
            >
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    playsInline
                    loop
                    muted={isMuted}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                >
                    <source src={bannerVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Video Controls Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* Play/Pause Button - Center (only show when paused) */}
                    {!isPlaying && (
                        <motion.button
                            onClick={togglePlayPause}
                            className="pointer-events-auto z-20 p-4 lg:p-6 bg-black bg-opacity-60 rounded-full hover:bg-opacity-80 transition-all duration-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaPlay className="text-white text-2xl lg:text-4xl ml-1" />
                        </motion.button>
                    )}

                    {/* Mute Button - Bottom Left */}
                    <motion.button
                        onClick={toggleMute}
                        className="pointer-events-auto absolute bottom-4 left-4 lg:bottom-8 lg:left-8 p-3 lg:p-4 bg-black bg-opacity-60 rounded-full hover:bg-opacity-80 transition-all duration-300 z-20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <img
                            src={isMuted ? muteIcon : unmuteIcon}
                            alt={isMuted ? "Unmute" : "Mute"}
                            className="w-5 h-5 lg:w-6 lg:h-6"
                        />
                    </motion.button>

                    {/* Fullscreen Button - Bottom Right */}
                    <motion.button
                        onClick={toggleFullscreen}
                        className="pointer-events-auto absolute bottom-4 left-16 lg:bottom-8 lg:left-24 p-3 lg:p-4 bg-black bg-opacity-60 rounded-full hover:bg-opacity-80 transition-all duration-300 z-20 text-white text-lg lg:text-xl"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isFullscreen ? '⤓' : '⛶'}
                    </motion.button>
                </div>
            </div>

            {/* Biography Section - Beautiful with Read More */}
            <div className="relative z-10 px-4 lg:px-16 py-16 lg:py-6" style={{ marginTop: '80vh' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Title */}
                    <motion.div
                        className="mb-12 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl lg:text-6xl font-bold font-custom1 uppercase text-black mb-3">
                            Secret<span className="text-[#FF0903] font-custom ml-2">47</span>
                        </h2>
                        <div className="w-24 h-0.5 bg-[#FF0903] mx-auto mb-4"></div>
                        <p className="text-lg lg:text-xl font-custom2 text-gray-700 italic">
                            Life 47% of it
                        </p>
                    </motion.div>

                    {/* Biography Content */}
                    <div className="bg-white bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-lg border border-black border-opacity-5">
                        <BiographyContent isExpanded={isBiographyExpanded} />
                        
                        {!isBiographyExpanded && (
                            <div className="mt-8 text-center">
                                <button
                                    onClick={() => setIsBiographyExpanded(true)}
                                    className="px-6 py-3 text-black font-custom2 uppercase tracking-wide rounded-lg hover:shadow-lg transition-all duration-300"
                                >
                                    Read More
                                </button>
                            </div>
                        )}
                        
                        {isBiographyExpanded && (
                            <div className="mt-8 text-center">
                                <button
                                    onClick={() => {
                                        setIsBiographyExpanded(false);
                                        window.scrollTo({ top: window.scrollY - 500, behavior: 'smooth' });
                                    }}
                                    className="px-6 py-3  text-black font-custom2 uppercase tracking-wide rounded-lg hover:bg-gray-700 transition-all duration-300"
                                >
                                    Show Less
                                </button>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>

            {/* Videos Section */}
            <div className="relative z-10 px-4 lg:px-16 py-12 lg:py-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl lg:text-3xl font-bold font-custom1 uppercase mb-8 text-center text-black"
                >
                    Videos
                </motion.h2>
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
                    {videos.map((video, index) => {
                        const isVideoMuted = videoMutedStates[video.id] !== undefined ? videoMutedStates[video.id] : true;
                        
                        const toggleVideoMute = () => {
                            const videoElement = videoRefs.current[video.id];
                            if (videoElement) {
                                videoElement.muted = !isVideoMuted;
                                setVideoMutedStates(prev => ({
                                    ...prev,
                                    [video.id]: !isVideoMuted
                                }));
                            }
                        };

                        return (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative ${video.colSpan} ${video.rowSpan} ${video.height} rounded-lg overflow-hidden border border-black border-opacity-10 group`}
                            >
                                <video
                                    ref={(el) => (videoRefs.current[video.id] = el)}
                                    className="w-full h-full object-cover"
                                    playsInline
                                    loop
                                    muted={isVideoMuted}
                                    autoPlay
                                >
                                    <source src={video.src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                {/* Mute/Unmute Button */}
                                <button
                                    onClick={toggleVideoMute}
                                    className="absolute bottom-4 left-4 p-3 bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full transition-all duration-300 z-10"
                                >
                                    <img
                                        src={isVideoMuted ? muteIcon : unmuteIcon}
                                        alt={isVideoMuted ? "Unmute" : "Mute"}
                                        className="w-3 h-3 lg:w-3 lg:h-3"
                                    />
                                </button>
                                {/* Download Button */}
                                <a
                                    href={video.src}
                                    download={`video-${video.id}.mp4`}
                                    className="absolute bottom-4 right-4 p-3 bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full transition-all duration-300 z-10"
                                >
                                    <FaDownload className="text-white text-sm" />
                                </a>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* SoundCloud Section - At the End */}
            <div className="relative z-10 px-4 lg:px-16 py-12 lg:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className=" mx-auto"
                >
                    <h2 className="text-2xl lg:text-3xl font-bold font-custom1 uppercase mb-4 text-center text-black">
                        Music
                    </h2>
                    <p className="text-sm lg:text-base text-black text-center mb-6 font-custom2">
                        Listen Secret from minutes 47
                    </p>
                    <div className="mb-6">
                        <iframe
                            width="100%"
                            height="166"
                            scrolling="no"
                            frameBorder="no"
                            allow="autoplay"
                            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/goldcap/the-goldcast-147-oct-17-2025&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&start_track=0"
                            className="w-full"
                            title="SoundCloud Player"
                        ></iframe>
                    </div>
                    <div className="text-center">
                        <a
                            href="https://soundcloud.com/goldcap/the-goldcast-147-oct-17-2025#t=47:00"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm lg:text-base text-[#FF0903] hover:underline font-custom2"
                        >
                            Listen on SoundCloud →
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PressKit;
