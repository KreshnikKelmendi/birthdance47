import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image1 from "../assets/updatePoster1.png";
import video1 from "../assets/finalVideo2.mp4";
import image3 from "../assets/posterUpdate3.png";
import Footer from '../footer/Footer';
import InstagramIcon from "../assets/instagram-icon.png";
import Download from './Download';
import Media from './Media';

const data = [
  {
    title: "BirthDance B2B SecretSS",
    subtitle: "at NOYA / Very Limited Capacity. Please reserve +38346772777",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectou adis aaspic acit item dolor sit amet consectour, lorem ipsum dolor sit amet consectour and amet consectour.",
    image: image1,
    mediaType:'image',
    date: '01.03.2024 Friday',
    textColor: '#FF5454',
    location:[{
      name:'Noya at 20:00h / Free event', instagram:'https://www.instagram.com/noyaprishtina/'
    }],
    firstSponsor:[{
      name:'Win Music Freedom', instagram:'https://www.instagram.com/winmusicfreedomkosova/'
    }],
    specialSponsor:[{
      name:'Red Bull Kosova', instagram:'https://www.instagram.com/redbullkosova/'
    }],
    arian:[{
      name:'Arian Ahmeti', instagram:'https://www.instagram.com/arianahmetiart/'
    }],
    art:[{
      name:'Trekuartista', instagram: 'https://www.instagram.com/trekuartista/'
    }],
    sound:[{
      name:'Duka alfa audio', instagram: 'https://www.instagram.com/dukalfaudio/'
    }],
    laser:[{
      name:'ARTin', instagram: 'https://www.instagram.com/artinsahiiti/'
    }],
    makeUp:[{
      name:'Flloja', instagram: 'https://www.instagram.com/flloja/'
    }],
    liveArt:[{
      name:'Donat Krasniqi', instagram: 'https://www.instagram.com/donatkrasniqi_/'
    }],
    magicBy:[{
      name:'Adrianus', instagram: 'https://www.instagram.com/adriankqiku/'
    }],
    ballons:[{
      name:'Reks Ballon', instagram: ' https://www.instagram.com/reksballoon/'
    }],
    specialLove:[{
      name:'Salih Sinani', instagram:'https://www.instagram.com/saalihsinani/'
    }],
    firstLove:[{
      name:'Kushtrim Sahiti', instagram: 'https://www.instagram.com/kushtrimsahiti/'
    }],
    diellza:[{
      name:'Diellza Nushi', instagram: 'https://www.instagram.com/diellzanushi/'
    }],
    secondLove:[{
      name:'Moki Wear', instagram: 'https://www.instagram.com/moki.wear/'
    }],
    thirdLove:[{
      name:'Secret3148', instagram: 'https://www.instagram.com/gencgenc3148/'
    }],
    fourthLove:[{
      name:'Don Rozhaja', instagram: 'https://www.instagram.com/donrozhaja/'
    }],
    fifthLove:[{
      name:'Lon Mehmeti', instagram: 'https://www.instagram.com/lonmehmeti/'
    }],
    sixthLove:[{
      name:'Petrit Kllokoqi & NOYA Family', instagram: 'https://www.instagram.com/petritkllokoqi/'
    }],
    artists: [
      { name: 'LAILA (Geneva)', instagram: 'https://www.instagram.com/lailammusic/' },
      { name: 'VOCADO (Swiss)', instagram: 'https://www.instagram.com/vildyvocado/' },
      { name: 'NADAL JR (Paris)', instagram: 'https://www.instagram.com/nadal_jr/' },
      { name: 'R3BR (LONDON)', instagram: 'https://www.instagram.com/r.3.b.r/' },
      { name: 'NOKI & SECRET47 (Brothers)', instagram: 'https://www.instagram.com/secret47file/' },

    ],
    // time:[{
    //   name:'20:00h'
    // }]
  },
  {
    title: "BirthDance B2B SecretSS",
    subtitle:"MAIN EVENT at ZONE CLUB",
    content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    image: video1,
    mediaType:'video',
    date: '02.03.2024 Saturday',
    // day: 'ALL NIGHT LONG - 10H B2B with THE BEST EVER!',
    textColor: "#06D04F",
    location:[{
      name:'ZONE CLUB at 23:00h', instagram:'https://www.instagram.com/zoneclub/'
    }],
    firstSponsor:[{
      name:'Win Music Freedom', instagram:'https://www.instagram.com/winmusicfreedomkosova/'
    }],
    specialSponsor:[{
      name:'Red Bull Kosova', instagram:'https://www.instagram.com/redbullkosova/'
    }],
    secondSponsor:[{
      name:'JagermeisterKosovo', instagram:'https://www.instagram.com/jagermeisterko/'
    }],
    arian:[{
      name:'Arian Ahmeti', instagram:'https://www.instagram.com/arianahmetiart/'
    }],
    art:[{
      name:'Trekuartista', instagram: 'https://www.instagram.com/trekuartista/'
    }],
    visuals:[{
      name:'MNSC', instagram: 'https://www.instagram.com/mnsc.visuals/'
    }],
    sound:[{
      name:'Duka alfa audio', instagram: 'https://www.instagram.com/dukalfaudio/'
    }],
    lights:[{
      name:'Kujtim Arifi', instagram: 'https://www.instagram.com/kujtiimarifi/'
    }],
    laser:[{
      name:'ARTin', instagram: 'https://www.instagram.com/artinsahiiti/'
    }],
    makeUp:[{
      name:'Flloja', instagram: 'https://www.instagram.com/flloja/'
    }],
    liveArt:[{
      name:'Donat Krasniqi', instagram: 'https://www.instagram.com/donatkrasniqi_/'
    }],
    magicBy:[{
      name:'Adrianus', instagram: 'https://www.instagram.com/adriankqiku/'
    }],
    ballons:[{
      name:'Reks Ballon', instagram: ' https://www.instagram.com/reksballoon/'
    }],
    sound:[{
      name:'Duka alfa audio', instagram: 'https://www.instagram.com/dukalfaudio/'
    }],
    makeUp:[{
      name:'Flloja', instagram: 'https://www.instagram.com/flloja/'
    }],
    acrobatics:[{
      name:'Nxtlvl Events Entertainment', instagram: 'https://www.instagram.com/nxtlvl_events_entertainment/'
    }],
    ballons:[{
      name:'Reks Ballon', instagram: ' https://www.instagram.com/reksballoon/'
    }],
    cake:[{
      name:'Matisse Patisserie', instagram: 'https://www.instagram.com/matisse.patisserie/'
    }],
    iceCream:[{
      name:'Moritz Eis Kosovo', instagram: 'https://www.instagram.com/moritzeiskosovo/'
    }],
    coffee:[{
      name:'Bagolina Eatery', instagram: 'https://www.instagram.com/bagolinaeatery/'
    }],
    specialLove:[{
      name:'Salih Sinani', instagram:'https://www.instagram.com/saalihsinani/'
    }],
    firstLove:[{
      name:'Kushtrim Sahiti', instagram: 'https://www.instagram.com/kushtrimsahiti/'
    }],
    secondLove:[{
      name:'My Yllka Brada', instagram: 'https://www.instagram.com/yllkabradaofficial/'
    }],
    thirdLove:[{
      name:'Secret3148', instagram: 'https://www.instagram.com/gencgenc3148/'
    }],
    fourthLove:[{
      name:'Don Rozhaja', instagram: 'https://www.instagram.com/donrozhaja/'
    }],
    fifthLove:[{
      name:'Lon Mehmeti', instagram: 'https://www.instagram.com/lonmehmeti/'
    }],
    sixthLove:[{
      name:'Derand Hotel', instagram: 'https://www.instagram.com/derand_hotel/'
    }],
    
    artists: [{
      name: 'ALL NIGHT LONG - 10H B2B with THE BEST EVER!'
    }],
    // time:[{
    //   name:'23:00h'
    // }],
  },
  {
    title: "BirthDance B2B SecretSS",
    subtitle:'EDHE the LAST DANCE with Family',
    content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: image3,
    mediaType:'image',
    date: '03.03.2024 Sunday',
    day: 'HEALTHY FOOD, ART, YOGA...',
    textColor: '#7C6DE7',
    location:[{
      name:'EDHE', instagram:'https://www.instagram.com/edheeeee/'
    }],
    firstSponsor:[{
      name:'Win Music Freedom', instagram:'https://www.instagram.com/winmusicfreedomkosova/'
    }],
    specialSponsor:[{
      name:'Red Bull Kosova', instagram:'https://www.instagram.com/redbullkosova/'
    }],
    arian:[{
      name:'Arian Ahmeti', instagram:'https://www.instagram.com/arianahmetiart/'
    }],
    art:[{
      name:'Trekuartista', instagram: 'https://www.instagram.com/trekuartista/'
    }],
    sound:[{
      name:'Duka alfa audio', instagram: 'https://www.instagram.com/dukalfaudio/'
    }],
    laser:[{
      name:'ARTin', instagram: 'https://www.instagram.com/artinsahiiti/'
    }],
    makeUp:[{
      name:'Flloja', instagram: 'https://www.instagram.com/flloja/'
    }],
    liveArt:[{
      name:'Donat Krasniqi', instagram: 'https://www.instagram.com/donatkrasniqi_/'
    }],
    magicBy:[{
      name:'Adrianus', instagram: 'https://www.instagram.com/adriankqiku/'
    }],
    ballons:[{
      name:'Reks Ballon', instagram: ' https://www.instagram.com/reksballoon/'
    }],
    sound:[{
      name:'Duka alfa audio', instagram: 'https://www.instagram.com/dukalfaudio/'
    }],
    specialLove:[{
      name:'Salih Sinani', instagram:'https://www.instagram.com/saalihsinani/'
    }],
    firstLove:[{
      name:'Kushtrim Sahiti', instagram: 'https://www.instagram.com/kushtrimsahiti/'
    }],
    secondLove:[{
      name:'My Yllka Brada', instagram: 'https://www.instagram.com/yllkabradaofficial/'
    }],
    thirdLove:[{
      name:'Secret3148', instagram: 'https://www.instagram.com/gencgenc3148/'
    }],
    fourthLove:[{
      name:'Don Rozhaja', instagram: 'https://www.instagram.com/donrozhaja/'
    }],
    fifthLove:[{
      name:'Lon Mehmeti', instagram: 'https://www.instagram.com/lonmehmeti/'
    }],
    sixthLove:[{
      name:'Derand Hotel', instagram: 'https://www.instagram.com/derand_hotel/'
    }],
   artists: [{
      name: 'R3BR (London)', instagram: 'https://www.instagram.com/r.3.b.r/'
    },{
      name: 'NADAL JR (Paris)', instagram: 'https://www.instagram.com/nadal_jr/'
    },{
      name: 'RAYO (Montenegro)', instagram: 'https://www.instagram.com/rayo_positive_crew/'
    },{
      name: 'TOMI GJ (Tirana)', instagram: 'https://www.instagram.com/tomi.gjikuria/'
    },{
      name: 'SECRET47 & NOKI (Brothers)', instagram: 'https://www.instagram.com/secret47file/'
    }
    ],
    time:[{
      name:'13:00h with Kids / Free event'
    }],
    secondTime:[{
      name:'16:00h Adults Only / Free event', instagram:'https://www.instagram.com/urbanyoga_prishtine/'
    }],
    thirdTime:[{
      name:'14:00h Yoga by Urban Yoga', instagram:'https://www.instagram.com/urbanyoga_prishtine/'
    }],

    freshJuice:[{
      name: 'Crust N Crumb', instagram: 'https://www.instagram.com/crustncrumb.ks/'
    }]
  },
];

const GridItem = ({ item }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [ref, inView] = useInView({
    rootMargin: '-100px 0px',
  });

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, filter: 'blur(20px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 1, ease: 'easeInOut' } },
  };

  const transition = {
    duration: 0.5,
    ease: "easeOut",
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape' && (showDetails || showImage)) {
        setShowDetails(false);
        setShowImage(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [showDetails, showImage]);

  const handleSeeLess = () => {
    setShowDetails(false);
  };

  const handleImageClick = () => {
    setShowImage(true);
  };

  const handleCloseImage = () => {
    setShowImage(false);
  };

  const handleSeeMore = () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <div className='col-span-1'>
      <div className="relative overflow-hidden rounded-lg justify-center items-center" ref={ref}>
        <Media image={item.image} mediaType={item.mediaType} onClick={handleImageClick} /> 
      </div>
      {showImage && (
        <motion.div
          key="modal-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed p-2 z-50 top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
          onClick={handleCloseImage}
        >
          <motion.div
            className="max-w-screen-md max-h-screen-md w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain cursor-pointer"
              initial={{ filter: 'blur(10px)' }}
              animate={{ filter: 'blur(0px)' }}
              transition={{ duration: 0.5 }}
            />
            {/* Close button for image modal */}
            <button
              onClick={handleCloseImage}
              className="absolute top-2 right-2 text-white text-sm bg-gray-800 px-2 py-1 rounded-full"
            >
              X
            </button>
          </motion.div>
        </motion.div>
      )}
      <div
        className={`mt-4 mx-auto`}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={textVariants}
        transition={transition}
      >
        <p className={`text-sm mb-2`} style={{ color: item.textColor }}>{item.date}</p>
        <p className='test-base font-bold text-white'>
          <span style={{ color: item.textColor }}>
            {item.title}
          </span>
          <p style={{ color: item.textColor }}>{item.subtitle}</p>
        </p>
        <p className={`text-sm mb-4`} style={{ color: item.textColor }}>{item.day}</p>
        {showDetails ? (
          <>

<div className="mt-4">
<p className="text-sm text-white mb-2 uppercase" style={{ color: item.textColor }}>Made possible by:</p>

              {item.secondSponsor && (
                <>
                  {item.secondSponsor.map((secondSponsor, index) => (
                    <div key={index} className="flex items-center">
                      <a href={secondSponsor.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-[10px] text-white ml-2"><span className='text-sm'>{secondSponsor.name}</span> (Follow for free WOW gifts)</p>

                    </div>
                  ))}
                </>
              )}
            </div>
            <div className="">
              {item.firstSponsor && (
                <>
                  {item.firstSponsor.map((firstSponsor, index) => (
                    <div key={index} className="flex items-center">
                      <a href={firstSponsor.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'></span> {firstSponsor.name}</p>

                    </div>
                  ))}
                </>
              )}
            </div>

            <div className="">
              {item.specialSponsor && (
                <>
                  {item.specialSponsor.map((specialSponsor, index) => (
                    <div key={index} className="flex items-center">
                      <a href={specialSponsor.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'></span> {specialSponsor.name}</p>

                    </div>
                  ))}
                </>
              )}
            </div>
            
            
<div className="mt-4">
            <p className="text-sm text-white mb-2 uppercase" style={{ color: item.textColor }}>Location & Time</p>
            {item.location && (
                <>
                  {item.location.map((location, index) => (
                    <div key={index} className="flex items-center">
                      <a href={location.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'></span> {location.name}</p>

                    </div>
                  ))}
                </>
              )}
              </div>

              {item.time && (
                <>
                  {item.time.map((time, index) => (
                    <div key={index} className="flex items-center">
                      <a href={time.instagram} target='_blank' rel='noreferrer' className=''>
                        {/* <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" /> */}
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'></span> {time.name}</p>

                    </div>
                  ))}
                </>
              )}
          
           
  
            <div className="">
              {item.secondTime && (
                <>
                  {item.secondTime.map((secondTime, index) => (
                    <div key={index} className="flex items-center">
                      <a href={secondTime.instagram} target='_blank' rel='noreferrer' className=''>
                        {/* <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" /> */}
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'></span> {secondTime.name}</p>

                    </div>
                  ))}
                </>
              )}
            </div>

            <div className='mt-4'>
            <p className="text-sm text-white mb-2 uppercase" style={{ color: item.textColor }}>Music:</p>
            {item.artists && (
                <>
                  {item.artists.map((artists, index) => (
                    <div key={index} className="flex items-center">
                      <a href={artists.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'></span> {artists.name}</p>

                    </div>
                  ))}
                </>
              )}
              </div>


            {/* Producers section */}
            
            <div className="mt-4">
            <div className="">
            <p className="text-sm text-white uppercase mb-2" style={{ color: item.textColor }}>Produced by:</p>

          {item.thirdTime && (
            <>
              {item.thirdTime.map((thirdTime, index) => (
                <div key={index} className="flex items-center">
                  <a href={thirdTime.instagram} target='_blank' rel='noreferrer' className=''>
                    <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                  </a>
                  <p className="text-sm text-white ml-2"><span className='text-[10px]'></span> {thirdTime.name}</p>

                </div>
              ))}
            </>
          )}
        </div>

        <div className="">
              {item.freshJuice && (
                <>
                  {item.freshJuice.map((freshJuice, index) => (
                    <div key={index} className="flex items-center">
                      <a href={freshJuice.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'>Fresh Ginger shots & juices + desserts by: </span> {freshJuice.name}</p>

                    </div>
                  ))}
                </>
              )}
            </div>
              {item.art && (
                <>
                  {item.art.map((art, index) => (
                    <div key={index} className="flex items-center">
                      <a href={art.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'>Powered by:</span> {art.name}</p>

                    </div>
                  ))}
                </>
              )}
            </div>
            
            

            <div className="">
              
              {item.arian && (
                <>
                  {item.arian.map((arian, index) => (
                    <div key={index} className="flex items-center">
                      <a href={arian.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'>Cake piece by: </span>{arian.name}</p>

                    </div>
                  ))}
                </>
              )}
            </div>

            <div className="">
              {item.visuals && (
                <>
                  {item.visuals.map((visuals, index) => (
                    <div key={index} className="flex items-center">
                      <a href={visuals.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'>Visuals:</span> {visuals.name}</p>

                    </div>
                  ))}
                </>
              )}
            </div>

            <div className="">
              {item.acrobatics && (
                <>
                  {item.acrobatics.map((acrobatics, index) => (
                    <div key={index} className="flex items-center">
                      <a href={acrobatics.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'>Artobatics by:</span> {acrobatics.name}</p>

                    </div>
                  ))}
                </>
              )}
            </div>

            <div className="">
              {item.iceCream && (
                <>
                  {item.iceCream.map((iceCream, index) => (
                    <div key={index} className="flex items-center">
                      <a href={iceCream.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'>Free ICE CREAM at 7am by:</span> {iceCream.name}</p>

                    </div>
                  ))}
                </>
              )}
            </div>
            <div className="">
              {item.coffee && (
                <>
                  {item.coffee.map((coffee, index) => (
                    <div key={index} className="flex items-center">
                      <a href={coffee.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'>Coffee at 8am:</span> {coffee.name}</p>

                    </div>
                  ))}
                </>
              )}
            </div>

            <div className="">
              {item.cake && (
                <>
                  {item.cake.map((cake, index) => (
                    <div key={index} className="flex items-center">
                      <a href={cake.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'>FOREVER BirthDance Cake by:</span> {cake.name}</p>

                    </div>
                  ))}
                </>
              )}
            </div>


            {/* sound  */}
            <div className="">
              {item.sound && (
                <>
                  {item.sound.map((sound, index) => (
                    <div key={index} className="flex items-center">
                      <a href={sound.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'>LOVE sound:</span> {sound.name}</p>

                    </div>
                  ))}
                </>
              )}
            </div>

            {/* laserArt */}
            <div className="">
              {item.laser && (
                <>
                  {item.laser.map((laser, index) => (
                    <div key={index} className="flex items-center">
                      <a href={laser.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'>Laser Art:</span> {laser.name}</p>

                    </div>
                  ))}
                </>
              )}
            </div>

            <div className="">
              {item.lights && (
                <>
                  {item.lights.map((lights, index) => (
                    <div key={index} className="flex items-center">
                      <a href={lights.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'>Lights by: </span>  {lights.name}</p>

                    </div>
                  ))}
                </>
              )}
            </div>

            {/* makeUp */}
            <div className="">
              {item.makeUp && (
                <>
                  {item.makeUp.map((makeUp, index) => (
                    <div key={index} className="flex items-center">
                      <a href={makeUp.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'>Make Up:</span> {makeUp.name}</p>

                    </div>
                  ))}
                </>
              )}
            </div>

           {/* liveArt */}
        <div className="">
              {item.liveArt && (
                <>
                  {item.liveArt.map((liveArt, index) => (
                    <div key={index} className="flex items-center">
                      <a href={liveArt.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'>Live Art by:</span> {liveArt.name}</p>

                    </div>
                  ))}
                </>
              )}
            </div>
{/* 
            magicBY */}
          <div className="">
              {item.liveArt && (
                <>
                  {item.magicBy.map((magicBY, index) => (
                    <div key={index} className="flex items-center">
                      <a href={magicBY.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'>Magic by:</span> {magicBY.name}</p>

                    </div>
                  ))}
                </>
              )}
            </div>

            {/* ballons */}

            <div className="">
              {item.ballons && (
                <>
                  {item.ballons.map((ballons, index) => (
                    <div key={index} className="flex items-center">
                      <a href={ballons.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'>Ballons:</span> {ballons.name}</p>

                    </div>
                  ))}
                </>
              )}
            </div>


            <div className="mt-4">
              <p className="text-sm text-white mb-2" style={{ color: item.textColor }}>Max LOVE:</p>
            {item.specialLove && (
                <>
                  {item.specialLove.map((specialLove, index) => (
                    <div key={index} className="flex items-center">
                      <a href={specialLove.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'>Birthdance B2B: </span>{specialLove.name}</p>

                    </div>
                  ))}
                </>
              )}
              </div>
            
              {item.firstLove && (
                <>
                  {item.firstLove.map((firstLove, index) => (
                    <div key={index} className="flex items-center">
                      <a href={firstLove.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'>for just being Qukla WOW: </span>{firstLove.name}</p>

                    </div>
                  ))}
                </>
              )}

          {item.diellza && (
                <>
                  {item.diellza.map((diellza, index) => (
                    <div key={index} className="flex items-center">
                      <a href={diellza.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'>The 1: </span>{diellza.name}</p>

                    </div>
                  ))}
                </>
              )}
          
          
             
            
            <div className="">
              {item.secondLove && (
                <>
                  {item.secondLove.map((secondLove, index) => (
                    <div key={index} className="flex items-center">
                      <a href={secondLove.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'></span>{secondLove.name}</p>

                    </div>
                  ))}
                </>
              )}
            </div>

            <div className="">
              {item.thirdLove && (
                <>
                  {item.thirdLove.map((thirdLove, index) => (
                    <div key={index} className="flex items-center">
                      <a href={thirdLove.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'></span>{thirdLove.name}</p>

                    </div>
                  ))}
                </>
              )}
            </div>

            <div className="">
              {item.fourthLove && (
                <>
                  {item.fourthLove.map((fourthLove, index) => (
                    <div key={index} className="flex items-center">
                      <a href={fourthLove.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'></span>{fourthLove.name}</p>

                    </div>
                  ))}
                </>
              )}
            </div>

            <div className="">
              {item.fifthLove && (
                <>
                  {item.fifthLove.map((fifthLove, index) => (
                    <div key={index} className="flex items-center">
                      <a href={fifthLove.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'></span>{fifthLove.name}</p>

                    </div>
                  ))}
                </>
              )}
            </div>

            <div className="">
              {item.sixthLove && (
                <>
                  {item.sixthLove.map((sixthLove, index) => (
                    <div key={index} className="flex items-center">
                      <a href={sixthLove.instagram} target='_blank' rel='noreferrer' className=''>
                        <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                      </a>
                      <p className="text-sm text-white ml-2"><span className='text-[10px]'></span>{sixthLove.name}</p>

                    </div>
                  ))}
                </>
              )}
            </div>

            
            
             {/* <motion.p className="text-sm text-justify tracking-tighter text-white" variants={textVariants} transition={transition}>
              {item.content}
            </motion.p> */}
          </>
        ) : null}
      </div>
      {showDetails ? (
        <button
          onClick={handleSeeLess}
          className="mt-2 text-sm text-white border-b rounded-sm border-[#6d5027] hover:scale-110 font-semibold focus:outline-none"
        >
          Hide Details
        </button>
      ) : (
        <button
          onClick={handleSeeMore}
          className="mt-2 text-sm text-white border-b rounded-sm border-white hover:scale-110 font-semibold focus:outline-none" style={{ borderColor: item.textColor }}
        >
          Show Details
        </button>
      )}
    </div>
  );
};

const Banner = () => {
  return (
    <div className='font-custom bg-secret relative py-5 lg:py-10 px-10'>
      <div className="text-center tracking-tighter lg:tracking-normal lg:text-center mb-8">
        <p className="text-sm w-fit lg:w-[75%] font-bold mx-auto text-white">BirthDance is one of the most iconic nights/weekends in this part of the world, where we present the most amazing artists & with guests that fly from all over the world to be part of the dancefloors.</p>
          <Download />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 justify-center">
        {data?.map((item, index) => (
          <GridItem key={index} item={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Banner;
