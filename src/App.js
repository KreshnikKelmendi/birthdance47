
import HomePage from './components/pages/HomePage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PhotoPage from './components/pages/PhotoPage';
import BiographyPage from './components/pages/BiographyPage';
import Birthdance2024 from './components/pages/Birthdance2024';
import Footer from './components/footer/Footer';
import ScrollToTopButton from './components/home/ScrollToTopButton';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-biography" element={<BiographyPage />} />
          <Route path="/photos" element={<PhotoPage />} />
          <Route path="/birthdance/2024" element={<Birthdance2024 />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </BrowserRouter>

    </>
  );
}

export default App;
