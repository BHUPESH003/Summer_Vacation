// PrivacyPolicyPage.js
import React from "react";
import PrivacyPolicy from "./PrivacyPolicy"; // Adjust the path as needed
import { privacyPolicyData } from "../../constants"; // Adjust the path as needed

const PrivacyPolicyPage = () => {
  return (
    <div className=" bg-gray-200 p-8">
      <PrivacyPolicy data={privacyPolicyData.join("\n")} />
    </div>
  );
};

export default PrivacyPolicyPage;
