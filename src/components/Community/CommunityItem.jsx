import React from "react";
import { Link } from "react-router-dom";

const CommunityItem = ({ community, onSelect }) => {
  const handleCommunityClick = () => {
    onSelect(community.id);
  };

  return (
    <div
      className="bg-gray-300 rounded-md flex items-center justify-center flex-col p-3 cursor-pointer"
      onClick={handleCommunityClick}
    >
      <Link to={`/community/${community.id}`}>
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
          <img
            src={community.image}
            alt={community.heading}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-lg font-semibold text-center">{community.heading}</h3>
      </Link>
    </div>
  );
};

export default CommunityItem;
