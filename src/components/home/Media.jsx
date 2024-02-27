import React, { useEffect, useState } from 'react';
import muteIcon from '../assets/off.png';
import unmuteIcon from '../assets/on.png';

const Media = ({ image, mediaType, onClick }) => {
  const [isMuted, setIsMuted] = useState(false); // Start with sound enabled
  const [userInteracted, setUserInteracted] = useState(false);
  const isImage = mediaType === 'image';

  useEffect(() => {
    const video = document.querySelector("video");
    
    // Play the video when the component mounts
    video.play();
    
    const handleInteraction = () => {
      if (!userInteracted) {
        setUserInteracted(true);
      }
    };

    // Add event listeners for user interaction
    document.addEventListener("click", handleInteraction);
    document.addEventListener("keydown", handleInteraction);

    return () => {
      // Remove event listeners when component is unmounted
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    };
  }, [userInteracted]);

  useEffect(() => {
    const video = document.querySelector("video");
    video.muted = isMuted;
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div>
      {isImage ? (
        <img src={image} alt="Event Poster" className="w-full h-full object-cover" onClick={onClick} />
      ) : (
        <div className="relative">
          <video
            className="w-full h-full object-cover"
            muted={!isMuted}
            playsInline
            loop
          >
            <source src={image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            onClick={toggleMute}
            className="absolute top-2 right-2 text-white text-sm px-2 py-1 rounded-full"
          >
            {isMuted ? (
              <img src={muteIcon} alt="Mute" className="h-6 w-6" />
            ) : (
              <img src={unmuteIcon} alt="Unmute" className="h-6 w-6" />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Media;
