import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomePage from "./components/pages/HomePage";
import PhotoPage from "./components/pages/PhotoPage";
import BiographyPage from "./components/pages/BiographyPage";
import Birthdance2024 from "./components/pages/Birthdance2024";
import Footer from "./components/footer/Footer";
import ScrollToTopButton from "./components/home/ScrollToTopButton";

function App() {
  const [showWebsite, setShowWebsite] = useState(false);
  const [hideTexts, setHideTexts] = useState(false);
  const texts = [
    { title: "BIRTHDANCE47 > SECRET47", date: "" },
    { title: "FIVE NIGHTS", date: "FEBRUARY 19TH TO 23RD, 2025" },
    { title: "MAIN EVENT", date: "FEBRUARY 22ND, ZONE CLUB" },
    { title: "BRUNCH CLOSING", date: "FEBRUARY 23RD" },
    { title: "BE PROFESSIONAL!", date: "GET ORGANIZED..." },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideTexts(true);
      setTimeout(() => {
        setShowWebsite(true);
      }, 1500);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence>
        {!showWebsite ? (
          <motion.div
            key="loading-screen"
            className="relative flex justify-center items-center h-screen bg-black text-white font-custom2 overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {/* Background gradient covering the screen */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-black to-black"></div>

            {/* Text animation */}
            <motion.div
              className="text-center relative"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.4,
                  },
                },
              }}
            >
              {texts.map((text, index) => (
                <motion.div
                  key={index}
                  className={`mb-4 ${index === 0 ? "py-16 lg:py-12" : ""} ${
                    index === texts.length - 1 ? "py-16 lg:py-12" : ""
                  }`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="text-2xl lg:text-4xl font-bold">{text.title}</div>
                  {text.date && (
                    <div
                      className={`mt-2 text-gray-500 ${
                        index === texts.length - 1
                          ? "text-2xl lg:text-4xl text-white"
                          : "text-lg"
                      }`}
                    >
                      {text.date}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Text exit animation */}
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ y: "100%" }}
              animate={hideTexts ? { y: "0%" } : {}}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="main-website"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              x: "100%",
              transition: { duration: 1, ease: "easeInOut" },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/my-biography" element={<BiographyPage />} />
              <Route path="/photos" element={<PhotoPage />} />
              <Route path="/birthdance/2024" element={<Birthdance2024 />} />
            </Routes>
            <Footer />
            <ScrollToTopButton />
          </motion.div>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
