import React, { useState } from "react";
import { ADDRESS_CONTACT } from "../../constants/index";

const SupportPage = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mx-auto">
      <div className="mb-4">
        <img
          src="/assets/images/support.jpg"
          alt="Support Page"
          className="w-full h-auto"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-lg">
            Our team is here to help you with any questions or concerns you may have.
          </p>
          <ul className="mt-4">
            <li>
            <div className="w-1/2 bg-gray-100 p-8">
            <h2 className="text-xl font-bold mb-4">Contact Details</h2>
            <p className="mb-2">Address: {ADDRESS_CONTACT.address}</p>
            <p className="mb-2">Phone: {ADDRESS_CONTACT.phone}</p>
            <p>Email: {ADDRESS_CONTACT.email}</p>
          </div>
            </li>
            
          </ul>
        </div>
        <div>
          <iframe
            title="Business Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3208.6164764292475!2d76.831832205191!3d28.353746192333965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3f7a4ea04bab%3A0x6bdc57d9691617f9!2sShri%20Radhey%20Milk%20Suppliers!5e0!3m2!1sen!2sin!4v1690625732766!5m2!1sen!2sin"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
      <div className="mt-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-2 border rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-2 border rounded-md"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-2 border rounded-md"
            rows="4"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SupportPage;
