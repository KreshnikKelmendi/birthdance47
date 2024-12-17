import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";

const videos = [
  {
    id: 1,
    url: "https://www.youtube.com/watch?v=_pdMslhZVnk",
    title: "Enjoy This Video 1",
    description: "A mesmerizing performance showcasing unique talent.",
    artist: "Artist 1",
  },
  {
    id: 2,
    url: "https://www.youtube.com/watch?v=ujXWBeatqas",
    title: "Enjoy This Video 2",
    description: "A captivating story told through this video.",
    artist: "Artist 2",
  },
  {
    id: 3,
    url: "https://www.youtube.com/watch?v=LOpY7LpDJgM",
    title: "Enjoy This Video 3",
    description: "An energetic and vibrant performance.",
    artist: "Artist 3",
  },
  {
    id: 4,
    url: "https://www.youtube.com/watch?v=e7ikFf2vEsQ",
    title: "Enjoy This Video 4",
    description: "A showcase of creativity and imagination.",
    artist: "Artist 4",
  },
  {
    id: 5,
    url: "https://www.youtube.com/watch?v=L1uJz63pY9k",
    title: "Enjoy This Video 5",
    description: "An extraordinary performance to remember.",
    artist: "Artist 5",
  },
  {
    id: 6,
    url: "https://www.youtube.com/watch?v=IMp3tETvmes",
    title: "Enjoy This Video 6",
    description: "A stunning display of skills and artistry.",
    artist: "Artist 6",
  },
];

const VideoPlayer = () => {
  const [playingVideoId, setPlayingVideoId] = useState(null);

  const handlePlay = (videoId) => {
    setPlayingVideoId(videoId); // Set the active video
  };

  return (
    <div className="text-white w-full px-5 lg:px-16 py-10 bg-[#00000071]">
      {/* Introductory Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-[65px] font-bold mb-4 text-[#ff0000] font-custom1">
          My Performances
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore some of my best works and performances captured in these
          videos. Sit back, relax, and enjoy!
        </p>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative shadow-2xl shadow-black rounded-lg overflow-hidden transform hover:scale-95 transition-all duration-300"
            onClick={() => handlePlay(video.id)} 
          >
            <ReactPlayer
              url={video.url}
              controls
              playing={playingVideoId === video.id}
              width="100%"
              height="50vh"
              className="w-full"
            />
            <div className="py-6 px-2 lg:px-4 lg:py-8 bg-gradient-to-b from-black to-gray-900 h-[25%] flex flex-col justify-center">
              <p className="text-lg lg:text-xl tracking-[0.5px] text-white font-custom2">
                {video.title}
              </p>
              <p className="text-sm text-gray-600 py-2 font-custom2">{video.description}</p>
              <p className="text-sm text-gray-500 font-custom2">Artist:<span className="font-custom text-[#FF0903] tracking-[1px]"> {video.artist}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
