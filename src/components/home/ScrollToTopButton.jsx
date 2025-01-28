import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll position to toggle button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-3 z-50 px-3 py-1 rounded-[5px] font-bold text-black hover:bg-black hover:text-white hover:duration-700 hover:ease-in-out text-2xl shadow-lg transition-transform duration-300 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      }`}
      aria-label="Scroll to Top"
      title='Go to TOP'
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
