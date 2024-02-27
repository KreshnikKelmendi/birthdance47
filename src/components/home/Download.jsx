import React from 'react';

const Download = () => {

  return (
    <div>
      <p className='text-base font-custom font-bold mx-auto text-white mt-5'>
        SHARE IT ONLY WITH LOVE. Click{' '}
        <a href='https://drive.google.com/drive/folders/1tBPTlrb22hJW_sesC1FcI7Avyhe2N0yw?usp=sharing' target='_blank' rel='noreferrer'>
            <span className='text-yellow-500 cursor-pointer hover:text-blue-500'>
            here
            </span>{' '}
        </a>
        to Download ALL posters
      </p>
    </div>
  );
};

export default Download;
