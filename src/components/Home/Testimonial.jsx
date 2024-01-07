import React from "react";
import { TESTIMONIALS, ARTICLES } from "../../constants";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom
import { useEffect } from "react";

const TestimonialsSection = () => {
  // State to keep track of the current testimonial index
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = React.useState(0);

  // Function to move to the next testimonial
  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };

  // Function to move to the previous testimonial
  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 6000); // Change the duration (in milliseconds) to adjust the sliding speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-8 border-t border-gray-300 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 flex justify-center">Know More About Us</h2>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Testimonial Slider */}
        <div className="w-full md:w-1/2 flex flex-col items-center border-r border-gray-300 md:p-5">
          {/* Testimonial Slider */}
          <div className="relative w-64 h-96 sm:w-96 md:h-72 bg-gray-200 rounded-lg overflow-hidden mb-4">
            {/* Map through testimonials */}
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
                  index === currentTestimonialIndex ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="p-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-2">
                    <img
                      src={testimonial.image} // Use the user's image URL as the image source
                      alt={`User ${index + 1}`} // Provide a suitable alt text
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.comment}</p>
                  <div className="flex justify-center mt-2">
                    {Array.from({ length: testimonial.stars }, (_, i) => (
                      <span key={i} className="text-yellow-500">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Slider Controls */}
          <div className="flex justify-center mt-2">
            <button
              className="text-2xl text-gray-600 hover:text-black focus:outline-none"
              onClick={prevTestimonial}
            >
              <FaChevronLeft />
            </button>
            <button
              className="text-2xl text-gray-600 hover:text-black focus:outline-none"
              onClick={nextTestimonial}
            >
              <FaChevronRight />
            </button>
         
          </div>
          <div className="text-center mt-8">
        <Link to="/community" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Load More
        </Link>
      </div>
        </div>

        {/* Right Section - Video Preview and Articles */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:pl-8 mt-10 pr-8 ">
          {/* Video Preview */}
          <div className="w-72 md:w-full h-48 bg-gray-200 rounded-lg mb-4 ">
            {/* Add your video component here */}
            {/* Replace the iframe src with the URL of your video */}
            <iframe
              title="Video Preview"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/agDzjMnkPIM"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* Articles */}
          <div className="flex flex-wrap justify-center md:justify-start">
            {ARTICLES.map((article, index) => (
              <div key={index} className="w-32 h-32 bg-gray-200 m-2 rounded-lg">
                <img
                  src={article.image} // Use the article's image URL as the image source
                  alt={`Article ${index + 1}`} // Provide a suitable alt text
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Load More Button */}
     
    </div>
  );
};

export default TestimonialsSection;
