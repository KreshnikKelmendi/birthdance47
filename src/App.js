// src/App.js

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HomePage from './components/pages/HomePage';
import PhotoPage from './components/pages/PhotoPage';
import BiographyPage from './components/pages/BiographyPage';
import Birthdance2024 from './components/pages/Birthdance2024';
import Footer from './components/footer/Footer';
import ScrollToTopButton from './components/home/ScrollToTopButton';
import Birthdance2025 from './components/pages/Birthdance2025';

function App() {
  const [showWebsite, setShowWebsite] = useState(false);
  const texts = [
    { title: "BIRTHDANCE47", date: "" },
    { title: "FIVE NIGHTS", date: "FEBRUARY 19TH TO 23RD, 2025" },
    { title: "MAIN EVENT", date: "FEBRUARY 22ND, ZONE CLUB" },
    { title: "BRUNCH CLOSING", date: "FEBRUARY 23RD" },
    { title: "Be professional, get organized...", date: "" }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % texts.length);
    }, 2000); // Speed up the animation (2 seconds)

    setTimeout(() => {
      setShowWebsite(true); // Show website after animation
    }, 7000); // Duration to show the animation before transitioning to the website

    return () => clearInterval(interval);
  }, []);

  return (
    <BrowserRouter>
      {!showWebsite ? (
        <div className="flex justify-center items-center h-screen bg-black text-white font-custom2">
          <motion.div
            key={texts[currentIndex].title}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            {/* Title */}
            <motion.div
              className="text-5xl font-bold mb-2"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              {texts[currentIndex].title}
            </motion.div>

            {/* Date */}
            {texts[currentIndex].date && (
              <motion.div
                className="text-xl mt-2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                {texts[currentIndex].date}
              </motion.div>
            )}
          </motion.div>
        </div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/my-biography" element={<BiographyPage />} />
            <Route path="/photos" element={<PhotoPage />} />
            <Route path="/birthdance/2024" element={<Birthdance2024 />} />
            {/* <Route path="/birthdance/2025" element={<Birthdance2025 />} /> */}
          </Routes>
          <Footer />
          <ScrollToTopButton />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
