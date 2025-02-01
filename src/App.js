import { BrowserRouter, Route, Routes } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import HomePage from "./components/pages/HomePage";
import PhotoPage from "./components/pages/PhotoPage";
import BiographyPage from "./components/pages/BiographyPage";
import Birthdance2024 from "./components/pages/Birthdance2024";
import Birthdance2025 from "./components/pages/Birthdance2025";
import Footer from "./components/footer/Footer";
import ScrollToTopButton from "./components/home/ScrollToTopButton";
import Day1 from "./components/days2025/Day1";
import Day2 from "./components/days2025/Day2";
import Day3 from "./components/days2025/Day3";
import Day4 from "./components/days2025/Day4";
import Day5 from "./components/days2025/Day5";
import Day6 from "./components/days2025/Day6";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
     
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/" element={<Birthdance2025 />} />
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/my-biography" element={<BiographyPage />} />
            <Route path="/photos" element={<PhotoPage />} />
            <Route path="/birthdance/2024" element={<Birthdance2024 />} />
            <Route path="/test47" element={<Birthdance2025 />} />
            <Route path="/birthdance/day-1" element={<Day1 />} />
            <Route path="/birthdance/day-2" element={<Day2 />} />
            <Route path="/birthdance/day-3" element={<Day3 />} />
            <Route path="/birthdance/day-4" element={<Day4 />} />
            <Route path="/birthdance/day-5" element={<Day5 />} />
            <Route path="/birthdance/day-6" element={<Day6 />} />
          </Routes>
          <Footer />
          <ScrollToTopButton />
  
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
