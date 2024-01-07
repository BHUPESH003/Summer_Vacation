import React from "react";
import CommunityEvents from "./CommunityEvents";
import { useParams } from "react-router-dom";
import { COMMUNITY_DATA } from "/src/constants/index";

const CommunityDetails = () => {
  const { communityId } = useParams();
  const selectedCommunity = COMMUNITY_DATA.find((community) => community.id === parseInt(communityId));

  if (!selectedCommunity) {
    return <div>Community not found</div>;
  }

  return (
    <div>
      {/* Community Details */}
      <div className="max-w-screen-md mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">{selectedCommunity.name}</h2>
        <p className="text-sm mb-4">{selectedCommunity.description}</p>
        {/* ... (Render other community details here) ... */}
      </div>

      {/* Community Events Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Community Events</h2>
        <CommunityEvents events={selectedCommunity.events} />
      </div>
    </div>
  );
};

export default CommunityDetails;
