import React from "react";
import { EVENTS_DATA } from "/src/constants/index";

const CommunityEvents = () => {
  return (
    <div>
      {EVENTS_DATA.map((event) => (
        <div key={event.id} className="mb-4">
          <h3 className="text-lg font-semibold">{event.name}</h3>
        <img src={event.image} alt={event.name} className="w-full h-80 object-cover rounded md:h-auto" />
          <p className="mt-2 text-sm">{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CommunityEvents;
