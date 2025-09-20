"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries" },
    { id: 2, text: "Finish homework" },
    { id: 3, text: "Call mom" },
  ]);
  const [input, setInput] = useState({ id: 0, text: "" });

  const addTodo = () => {
    if (input != null) {
      setTodos([...todos, input]);
      setInput({ id: 0, text: "" });
    }
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Todo</h1>

      <div className="flex gap-2 mb-4"></div>

      {/* // I updated the li to use "flex items-center" and added "flex-1" to the span containing the todo text.  */}
      {/* // This makes the text take up all available space on the left, pushing the button to the far right. */}
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex items-center bg-gray-100 p-2 rounded hover:bg-gray-200"
          >
            <span className="flex-1">{todo.text}</span>
            <button
              onClick={() => deleteTodo(index)}
              className="text-red-600 hover:text-red-800 hover:cursor-pointer "
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
