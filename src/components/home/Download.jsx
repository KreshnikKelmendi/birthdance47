import React from 'react';

const Download = () => {

  return (
    <div className='text-center'>
      <p className='text-base text-center font-custom font-bold mx-auto text-white mt-5'>
        Click{' '}
        <a href='https://drive.google.com/drive/folders/1tBPTlrb22hJW_sesC1FcI7Avyhe2N0yw?usp=sharing' target='_blank' rel='noreferrer'>
            <span className='text-yellow-500 cursor-pointer hover:text-blue-500'>
            HERE
            </span>{' '}
        </a>
        to Download ALL posters
      </p>
      <p className='text-white text-center justify-center items-center font-bold flex'>Share it ONLY with <svg className='ml-1 heartbeat' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#FF0000">
  <path d="M12 21.35l-1.45-1.32C5.4 14.36 2 11.25 2 7.5 2 4.42 4.42 2 7.5 2 9.09 2 10.64 2.84 12 4.15 13.36 2.84 14.91 2 16.5 2 19.58 2 22 4.42 22 7.5c0 3.75-3.4 6.86-8.55 12.54L12 21.35z"/>
</svg>
</p>
    </div>
  );
};

export default Download;
