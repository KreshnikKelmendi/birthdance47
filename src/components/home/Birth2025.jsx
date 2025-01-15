import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { birth2025 } from "../data/birthdance2025data";

const Birth2025 = () => {
  const [isMuted, setIsMuted] = useState(true); // To control the mute/unmute state

  const handleMuteUnmute = (id) => {
    const video = document.getElementById(`video-${id}`);
    video.muted = !video.muted; // Toggle mute
    setIsMuted(video.muted); // Update mute state
  };

  return (
    <div className="bg-[#00000071]">
      <Navbar />
      <h1 className="text-4xl font-bold text-blue-800 my-8">Birth2025</h1>
      <p className="text-center text-gray-600 mb-12">
        A collection of images and videos showcasing highlights for 2025.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-12">
        {birth2025?.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col p-4 rounded-lg shadow-lg ${
              item.id === 4 || item.id === 5 ? "flex justify-center" : ""
            }`}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.title}
                className="w-[30vh] h-[40vh] sm:w-[35vh] sm:h-[45vh] lg:w-[100%] lg:h-fit object-cover rounded-md shadow-md mb-4"
              />
            ) : (
              <div className="relative w-[30vh] h-[40vh] sm:w-[35vh] sm:h-[45vh] lg:w-[100%] lg:h-fit mb-4">
                <video
                  playsInline
                  loop
                  muted={isMuted} // Control mute with state
                  id={`video-${item.id}`}
                  src={item.src}
                  className="w-full h-full object-contain rounded-md shadow-md"
                  autoPlay
                />
                <button
                  onClick={() => handleMuteUnmute(item.id)}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white p-4 rounded-full shadow-lg"
                >
                  {isMuted ? "🔇" : "🔊"}
                </button>
              </div>
            )}
            <h2
              className="text-lg font-semibold"
              style={{
                color: item.color.title, // Apply title color
              }}
            >
              {item.title}
            </h2>
            <p
              className="text-sm "
              style={{
                color: item.color.description, // Apply description color
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Birth2025;
