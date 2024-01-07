import React from "react";
import { ADDRESS_CONTACT } from "../../constants/index";
import { Form } from "react-router-dom";
import SupportImg from "../../assets/images/support-banner.jpg"
import FormComponent from './FormSubmit'

const SupportPage = () => {
  const containerStyle = {
    backgroundImage: `url(${SupportImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div>
      {/* Banner */}
      <div
        className="h-32 md:h-48 bg-center bg-cover flex items-center justify-center md:justify-start  m-auto opacity-100 md:pl-80"
        style={containerStyle}
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold">Support</h1>
      </div>
      {/* Main Content */}
      <div className="container mx-auto mt-8">
        <div className="w-full md:w-3/4 mx-auto flex flex-col md:flex-row md:items-stretch h-auto md:h-80">
          {/* Left Container */}
          <div className="w-full md:w-1/2 bg-gray-100 p-8">
            <h2 className="text-xl font-bold mb-4">Contact Details</h2>
            <p className="mb-2">Address: {ADDRESS_CONTACT.address}</p>
            <p className="mb-2">Phone: {ADDRESS_CONTACT.phone}</p>
            <p>Email: {ADDRESS_CONTACT.email}</p>
          </div>
          {/* Right Container */}
          <div className="w-full md:w-1/2 bg-gray-200 p-4">
            {/* Replace the iframe src with your actual map */}
            <iframe
              title="Business Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3208.6164764292475!2d76.831832205191!3d28.353746192333965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3f7a4ea04bab%3A0x6bdc57d9691617f9!2sShri%20Radhey%20Milk%20Suppliers!5e0!3m2!1sen!2sin!4v1690625732766!5m2!1sen!2sin"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Form Component */}
      <div className="container mx-auto mt-8">
        <FormComponent />
      </div>
    </div>
  );
};

export default SupportPage;
