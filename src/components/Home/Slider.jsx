import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { IMAGES } from "../../constants";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [preloadedImages, setPreloadedImages] = useState([]);

  useEffect(() => {
    // Function to preload an image
    const preloadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
      });
    };

    // Preload all images and update state when done
    Promise.all(IMAGES.map((imageSrc) => preloadImage(imageSrc)))
      .then(() => {
        setPreloadedImages(IMAGES);
        setIsLoading(false);
      });
  }, []);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + IMAGES.length) % IMAGES.length
    );
  };

  return (
    <div className="relative w-full h-72 md:h-[450px] overflow-hidden">
      {preloadedImages.map((image, index) => (
        <div
          key={index}
          className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out"
          style={{
            transform:
              currentImage === index ? "translateX(0)" : "translateX(100%)",
          }}
        >
          {isLoading ? (
            <Skeleton count={10} />
          ) : (
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full"
            />
          )}
        </div>
      ))}

      {/* Conditionally render the arrows based on screen size */}
      {!isLoading && (
        <>
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full text-black-600 shadow-md hover:bg-gray-200 transition duration-600"
            onClick={prevImage}
          >
            <BsArrowLeftShort size={30} />
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full text-black-600 shadow-md hover:bg-gray-200 transition duration-600"
            onClick={nextImage}
          >
            <BsArrowRightShort size={30} />
          </button>
        </>
      )}
    </div>
  );
};

export default Slider;
