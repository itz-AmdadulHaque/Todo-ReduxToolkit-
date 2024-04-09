import React from "react";
import { useSelector } from "react-redux";

import Todo from "./Todo";

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="min-h-0 flex-grow ">
      {todos.length === 0 ? (
        <div className="h-full grid items-center">
          <p className="text-center text-red-400">No Task Added Yet</p>
        </div>
      ) : (
        <ul className="h-full overflow-y-auto custom-scrollbar">
          {todos.map((todo) => {
            return <Todo todo={todo} key={todo.id} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default Todos;
