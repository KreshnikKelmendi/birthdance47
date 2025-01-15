import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const EventContent = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { title: "FIVE NIGHTS", date: "FEBRUARY 19TH TO 23RD, 2025" },
    { title: "MAIN EVENT", date: "FEBRUARY 22ND, ZONE CLUB" },
    { title: "BRUNCH CLOSING", date: "FEBRUARY 23RD" },
    { title: "Be professional, get organized...", date: "" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
    }, 2500); // Change step every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  const fadeInOutVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className=" px-4 bg-gray-50 relative">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className="absolute top-1/2 transform -translate-y-1/2 text-center"
          initial="hidden"
          animate={currentStep === index ? "visible" : "hidden"}
          variants={fadeInOutVariants}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1 className="text-4xl font-semibold text-gray-900 mb-2">{step.title}</h1>
          <p className="text-lg text-gray-600">{step.date}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default EventContent;
