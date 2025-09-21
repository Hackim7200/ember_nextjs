import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faXmark } from "@fortawesome/free-solid-svg-icons";

const TodoCard = () => {
  return (
    <div
      className="
  bg-gray-100 
  p-4 
  rounded-md
  hover:shadow-md
  transition-shadow
  duration-300

  flex
  "
    >
      <ul className="flex-1 flex flex-col">
        <li className="text-lg "> Clean the room </li>
        <li className="text-sm text-gray-500">50min duration</li>
      </ul>
      <button className="text-gray-600 hover:text-red-800 hover:cursor-pointer p-3">
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <button className="text-red-600 hover:text-red-800 hover:cursor-pointer p-3">
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
};

export default TodoCard;
