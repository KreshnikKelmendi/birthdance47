import React from 'react';

const Media = ({ image, onClick }) => {
  return (
    <div>
      <img
        src={image}
        alt="Event Poster"
        className="w-full h-full object-cover"
        onClick={onClick}
      />
    </div>
  );
};

export default Media;
