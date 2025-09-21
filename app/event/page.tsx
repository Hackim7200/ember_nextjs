import React from "react";
import EventCard from "./widget/EventCard";

const Event = () => {
  return (
    <div
      className="
  sm:px-4
    md:px-50 
    lg:px-100 
    py-10   
    space-y-4"
    >
      <h1 className="text-2xl font-bold pb-1">Event</h1>
      <EventCard />
      <EventCard />
    </div>
  );
};

export default Event;
