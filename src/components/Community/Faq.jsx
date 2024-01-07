// FAQs.js
import React, { useState } from "react";
import { faqData } from "../../constants";

const FAQs = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (faqId) => {
    if (activeFAQ === faqId) {
      setActiveFAQ(null); // Close the active FAQ if clicked again
    } else {
      setActiveFAQ(faqId); // Open the clicked FAQ
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq) => (
          <div key={faq.id} className="border rounded p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(faq.id)}
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transform ${activeFAQ === faq.id ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {activeFAQ === faq.id && (
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
