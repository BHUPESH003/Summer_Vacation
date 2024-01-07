import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";

const NotFound = ({ errorMessage }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-screen bg-gray-100"
    >
      <FiAlertCircle className="text-6xl text-red-600 mb-4" />
      <h1 className="text-4xl font-bold mb-2">Error Occurred</h1>
      <p className="text-lg text-gray-600 mb-4">
        {errorMessage || "Oops! Something went wrong."}
      </p>
      <Link to="/" className="text-blue-600 font-semibold">
        Go back to Home
      </Link>
    </motion.div>
  );
};

export default NotFound;
