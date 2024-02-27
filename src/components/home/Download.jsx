import React from 'react';
import pdfFile from "../assets/Posters.pdf"

const Download = () => {
  const handleDownload = () => {
    // You can replace 'your-pdf-file.pdf' with the actual path to your PDF file
    const pdfFilePath = pdfFile;

    // Creating an anchor element
    const link = document.createElement('a');
    link.href = pdfFilePath;
    link.target = '_blank'; // Open the link in a new tab
    link.download = 'birthdance47.pdf'; // Specify the name for the downloaded file

    // Triggering the click event on the anchor element
    link.click();
  };

  return (
    <div>
      <p className='text-base font-custom font-bold mx-auto text-white mt-5'>
        SHARE IT ONLY WITH LOVE. Click{' '}
        <span className='text-yellow-500 cursor-pointer hover:text-blue-500' onClick={handleDownload}>
          here
        </span>{' '}
        to Download ALL posters
      </p>
    </div>
  );
};

export default Download;
