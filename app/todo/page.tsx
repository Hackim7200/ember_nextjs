"use client";

import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput("");
    }
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Todo</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
          placeholder="Add todo..."
          className="flex-1 px-3 py-2 border rounded"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center gap-2">
            <span>{todo}</span>
            <button
              onClick={() => deleteTodo(index)}
              className="text-red-600 hover:text-red-800"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
