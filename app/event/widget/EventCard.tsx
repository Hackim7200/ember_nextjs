import React from 'react';

const EventCard = () => {
  return (
    <div className="bg-white rounded-md shadow p-4 flex flex-col gap-2">
      <h2 className="text-lg font-semibold">Sample Event</h2>
      <p className="text-gray-600 text-sm">Date: 2024-06-15</p>
      <p className="text-gray-500 text-sm">Location: Main Hall</p>
      <p className="text-gray-700">Join us for a fun and informative event!</p>
    </div>
  );
};

export default EventCard;