import React, { useEffect, useState } from 'react';

const Media = ({ image, mediaType }) => {
  const [isMuted, setIsMuted] = useState(false); // Start with sound enabled
  const isImage = mediaType === 'image';

  useEffect(() => {
    const video = document.querySelector("video");
    video.muted = isMuted;
    video.play();
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div>
      {isImage ? (
        <img src={image} alt="Event Poster" className="w-full h-full object-cover" />
      ) : (
        <div className="relative">
          <video className="w-full h-full object-cover" autoPlay muted={!isMuted} playsInline loop>
            <source src={image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            onClick={toggleMute}
            className="absolute top-2 right-2 text-white text-sm px-2 py-1 rounded-full"
          >
            {/* {isMuted ? 'Mute' : 'Unmute'} */}
          </button>
        </div>
      )}
    </div>
  );
};

export default Media;
