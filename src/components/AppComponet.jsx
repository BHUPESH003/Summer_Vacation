import React from 'react';
import { APP_SCREENSHOTS } from '../constants/index'; // Import the image paths

const DownloadApp = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center mb-8">Download Our App and Place Your Order</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {APP_SCREENSHOTS.map((screenshot, index) => (
            <div className="bg-white p-4 shadow-md rounded-lg" key={index}>
              <img src={screenshot} alt={`App Screenshot ${index + 1}`} className="w-full h-auto rounded-lg" />
            </div>
          ))}
        </div>

        <p className="text-lg text-gray-700 mt-8 text-center">
          Explore our app's user-friendly interface and place your order with ease. Get started today and enjoy a seamless ordering experience.
        </p>

        <a
          href="#"
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 hover:shadow-md"
        >
          Download Now
        </a>
      </div>
    </div>
  );
};

export default DownloadApp;
