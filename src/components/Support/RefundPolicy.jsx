// PrivacyPolicyPage.js
import React from "react";
import PrivacyPolicy from "./PrivacyPolicy"; // Adjust the path as needed
import { refundPolicyData } from "../../constants"; // Adjust the path as needed

const RefundPolicy = () => {
  return (
    <div className=" bg-gray-200 p-8">
      <PrivacyPolicy data={refundPolicyData.join("\n")} />
    </div>
  );
};

export default RefundPolicy;


