import React from "react";
import { Link } from "react-router-dom";
import { HERO_DATA } from "../../constants";
import { HERO_IMG } from "../../constants";
import { HERO_IMG_DW } from "../../constants";


const HomeHero = () => {
  const containerStyle = {
    backgroundImage:
      `url(${HERO_IMG_DW})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="herocontainer flex justify-center flex-col items-center p-4"
      style={containerStyle}
    >
      <div className="bg-white rounded-lg w-11/12 md:w-3/4 flex flex-col md:flex-row">
        {/* Image Container */}
        <div className="md:w-1/2 flex justify-center items-center mb-4 sm:mb-0 sm:mr-4 md:p-8 rounded-t-lg md:rounded-bl-lg">
          <img
            src={HERO_IMG}
            alt="Your Image"
            className="w-full h-auto object-cover rounded-t-lg md:rounded-bl-lg"
          />
        </div>

        {/* Text Container */}
        <div className="md:w-1/2 p-4 md:p-8 flex flex-col justify-center md: border-gray-300 md:border-l-2">
        <h3 className="text-2xl font-extrabold">Why Choose SRIRAMS?</h3>
          <p className="text-sm text-center md:text-base md:text-left">
            {HERO_DATA.content}
          </p>
          <div className="text-center mt-4">
            <Link to="/whyus">
              <button className=" bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                {HERO_DATA.buttonText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
