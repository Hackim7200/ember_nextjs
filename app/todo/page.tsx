"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faXmark } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Finish homework", completed: false },
    { id: 3, text: "Call mom", completed: false },
  ]);
  const [input, setInput] = useState({ id: 0, text: "", completed: false });

  const addTodo = () => {
    if (input != null) {
      setTodos([...todos, input]);
      setInput({ id: 0, text: "", completed: false });
    }
  };

  
  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="p-50">
      <h1 className="text-2xl mb-4 font-bold text-gray-600">Todo</h1>

      <div className="flex gap-2 mb-4"></div>

      {/* // I updated the li to use "flex items-center" and added "flex-1" to the span containing the todo text.  */}
      {/* // This makes the text take up all available space on the left, pushing the button to the far right. */}
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex items-center bg-gray-100 p-2 rounded hover:bg-gray-200"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                className="m-4 h-5 w-5 accent-indigo-500"
                onChange={() =>
                  setTodos(
                    todos.map((t) =>
                      t.id === todo.id ? { ...t, completed: !t.completed } : t
                    )
                  )
                }
              />
            </div>
            <div className="flex-1 flex flex-col">
              <span className=" text-lg text-gray-600">{todo.text}</span>
              <span className="text-sm   text-gray-500">{todo.text}</span>
            </div>
            <button
              onClick={() => deleteTodo(index)}
              className="text-gray-600 hover:text-red-800 hover:cursor-pointer p-3"
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button
              onClick={() => deleteTodo(index)}
              className="text-red-600 hover:text-red-800 hover:cursor-pointer p-3"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
