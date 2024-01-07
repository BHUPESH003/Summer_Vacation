
import React from "react";
import PrivacyPolicy from "./PrivacyPolicy"; // Adjust the path as needed
import { shippingPolicyData } from "../../constants"; // Adjust the path as needed

const ShippingPolicy = () => {
  return (
    <div className=" bg-gray-200 p-8">
      <PrivacyPolicy data={shippingPolicyData.join("\n")} />
    </div>
  );
};

export default ShippingPolicy;