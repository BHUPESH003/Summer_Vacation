import React, { useState } from "react";
import activeCustomers from '/src/assets/images/active_customers.png'
import pointEarned from '/src/assets/images/points_earned.png'


const BannerContainer = ({ children }) => {
  const [searchText, setSearchText] = useState("");

  // Sample data for active customers and successful deliveries
  const activeCustomersCount = 1000;
  const successfulDeliveriesCount = "50k";

  // Function to handle search bar input change
  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="p-4 bg-gray-200">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between">
        {/* Search Bar */}
        <input
          type="text"
          value={searchText}
          onChange={handleSearchInputChange}
          placeholder="Search communities..."
          className="border rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 w-full md:w-auto"
        />

        {/* Active Customers and Successful Deliveries */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <img src={activeCustomers} alt="Active Customers" className="w-10 h-4 md:w-14 md:h-6 mr-2" />
            <span>{activeCustomersCount}</span>
          </div>
          <div className="flex items-center">
            <img src={pointEarned} alt="Successful Deliveries" className="w-6 h-6 mr-2" />
            <span>{successfulDeliveriesCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerContainer;
