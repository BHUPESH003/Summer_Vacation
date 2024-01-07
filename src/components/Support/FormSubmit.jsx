import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import ContactSvg from '../../assets/images/hero-img-up.avif';

const FormComponent = () => {
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    query: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the backend API
      const response = await fetch('http://localhost:5001/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData(initialFormData);
      } else {
        console.error('Failed to submit the form');
      }
    } catch (error) {
      console.error('Failed to submit the form', error);
    }
  };

  const closeModal = () => {
    setIsSubmitted(false);
    // Optionally, you can navigate to a new page here (e.g., dashboard)
    history('/community');
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="w-full mx-auto bg-white shadow-md rounded-md p-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-4 md:mb-0">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold mb-2">Name:</label>
              <input
                type="text"
                name="name"
                className="w-full p-3 border-b border-gray-300 rounded focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                value={formData.name}
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">E-mail:</label>
              <input
                type="email"
                name="email"
                className="w-full p-3 border-b border-gray-300 rounded focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Phone:</label>
              <input
                type="tel"
                name="phone"
                className="w-full p-3 border-b border-gray-300 rounded focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                value={formData.phone}
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Query:</label>
              <textarea
                name="query"
                className="w-full p-3 border-b border-gray-300 rounded focus:outline-none focus:border-blue-500"
                rows="4"
                onChange={handleChange}
                value={formData.query}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded transition-all duration-200"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 pl-0 md:pl-8">
          <img src={ContactSvg} alt="Contact" className="w-full rounded-md opacity-70" />
        </div>
      </div>
      <Modal isOpen={isSubmitted} closeModal={closeModal} />
    </div>
  );
};

export default FormComponent;
