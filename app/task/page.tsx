"use client";

import TodoCard from "./widgets/TodoCard";

const page = () => {
  return (
    <div
      className="
    sm:px-4
    md:px-50 
    lg:px-100 
    py-10   
    space-y-4"
    >
      <h1 className="text-2xl font-bold pb-1">Todo List</h1>
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
    </div>
  );
};

export default page;
