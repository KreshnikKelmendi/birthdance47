import React, { useEffect, useState, useRef } from 'react';
import muteIcon from '../assets/off.png';
import unmuteIcon from '../assets/on.png';

const Media = ({ image, mediaType, onClick }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const isImage = mediaType === 'image';
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    video.play();
    video.muted = !userInteracted;

    const handleInteraction = () => {
      if (!userInteracted) {
        setUserInteracted(true);
      }
    };

    document.addEventListener("click", handleInteraction);
    document.addEventListener("keydown", handleInteraction);

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    };
  }, [userInteracted]);

  useEffect(() => {
    const video = videoRef.current;
    video.muted = isMuted;
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleFullScreen = () => {
    const video = videoRef.current;

    if (!isFullScreen) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullScreen(false);
    }
  };

  const handleClickOutside = (event) => {
    const video = videoRef.current;

    if (isFullScreen && !video.contains(event.target)) {
      toggleFullScreen();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isFullScreen]);

  return (
    <div>
      {isImage ? (
        <img src={image} alt="Event Poster" className="w-full h-full object-cover" onClick={onClick} />
      ) : (
        <div className="relative">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted={isMuted}
            playsInline
            loop
            onClick={toggleFullScreen}
            style={{ objectFit: 'cover' }}
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
