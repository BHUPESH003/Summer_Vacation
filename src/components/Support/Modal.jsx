import React, { useEffect } from 'react';

const Modal = ({ isOpen, closeModal }) => {
  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(closeModal, 3000); // Close the modal after 3 seconds

      return () => clearTimeout(timeout);
    }
  }, [isOpen, closeModal]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-4/5 md:w-2/5">
        <div className="flex justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-green-600"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm1.061 14.354L6 9.414l1.414-1.414L10 11.586l4.586-4.586L16 8.586 11.414 13.2l-.353.154z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="text-center text-xl md:text-2xl font-bold text-gray-800">
          Thank you, your form is submitted!
        </p>
      </div>
    </div>
  );
};

export default Modal;
