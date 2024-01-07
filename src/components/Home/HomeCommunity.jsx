import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import { COMMUNITY_DATA } from "../../constants";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {Link} from 'react-router-dom'

const Community = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    
    <div className="bg-white py-8 border-t mt-5 border-gray-300 shadow-md mb-5">
    <div className="container mx-auto ">
      <h2 className="text-2xl font-semibold text-center mb-6">What's Your Community</h2>
      <div className="relative mx-6">
        <Slider ref={sliderRef} {...settings}>
          {COMMUNITY_DATA.map((communityItem) => (
            <div
              key={communityItem.id}
              className=" p-6 rounded-lg flex flex-col items-center justify-center mb-4"
            >
              
                {/* Use the Link component with the appropriate path */}
                <div className="bg-gray-300 rounded-md flex items-center justify-center flex-col p-3">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <img
                      src={communityItem.image}
                      alt={communityItem.heading}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center">{communityItem.heading}</h3>
                </div>
              
            </div>
          ))}
        </Slider>
        {/* Custom arrow buttons */}
        <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
          <button className="text-xl text-gray-800 hover:text-black focus:outline-none" onClick={handlePrev}>
            <FaChevronLeft />
          </button>
        </div>
        <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
          <button className="text-xl text-gray-800 hover:text-black focus:outline-none" onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Community;
