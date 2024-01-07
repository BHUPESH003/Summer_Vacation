// PrivacyPolicy.js
import React from "react";

const PrivacyPolicy = ({ data }) => {
  const paragraphs = data.split("\n\n");

  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
      <h1 className="text-indigo-600 text-xl md:text-2xl font-bold mb-3 md:mb-4">
        {paragraphs[0]}
      </h1>
      {paragraphs.slice(1).map((paragraph, index) => (
        <p key={index} className="text-base md:text-lg text-gray-700 mt-1 md:mt-2">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
