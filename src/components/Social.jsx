import React from "react";
import { BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs"; // Import social icons from React Icons library
import logo from "../assets/images/logo.jpg.png";
import { SUPPORTED_PAYMENTS, SOCIAL_LINKS } from "../constants"; // Import data from the separate constant.js file
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className="bg-white py-8 border-t mt-5 border-gray-300 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between ">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-center mb-4 md:mb-0 md:border-r-2 md:border-gray-300">
          {/* Left Container with Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="w-auto h-28 p-3" />
          </Link>
        </div>
        <div className="w-full md:w-1/2 flex flex-col md:flex-row md:justify-center">
          <div className="flex flex-col md:flex-col md:items-center md:justify-end">
            {/* Right Container with Payment Methods */}
            <div className="flex flex-col items-center md:items-start md:mr-4">
              <h3 className="text-lg font-bold mb-2">Payment Methods</h3>
              <div className="flex justify-center items-center h-16 text-gray-800 rounded-lg md:mr-6">
                {SUPPORTED_PAYMENTS.map((payment) => (
                  <div
                    key={payment.name}
                    className="flex flex-col items-center md:items-start md:flex-col md:mr-4"
                  >
                    <img
                      src={payment.image}
                      alt={payment.name}
                      className="w-8 h-8 cursor-pointer mb-2 md:mb-0 md:mr-2"
                      onClick={() => (window.location.href = payment.link)}
                    />
                    <span className="text-sm">{payment.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center md:items-start mt-4 md:mt-0 md:ml-[-96px]">
              <h3 className="text-lg font-bold mb-2">Social Links</h3>
              <div className="flex justify-center items-center h-16 text-gray-800 rounded-lg">
                {SOCIAL_LINKS.map((social) => {
                  const SocialIcon = getSocialIcon(social.name); // Get the corresponding social icon component
                  return (
                    <div
                      key={social.name}
                      className="flex flex-col items-center md:items-center md:flex-col md:mr-4"
                    >
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                      >
                        <SocialIcon size={24} />{" "}
                        {/* Adjusted the size of the social icons for mobile */}
                      </a>
                      <span className="text-sm ">{social.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to get the corresponding social icon component
const getSocialIcon = (socialName) => {
  switch (socialName.toLowerCase()) {
    case "instagram":
      return BsInstagram;
    case "youtube":
      return BsYoutube;
    case "twitter":
      return BsTwitter;
    default:
      return null;
  }
};

export default Social;
