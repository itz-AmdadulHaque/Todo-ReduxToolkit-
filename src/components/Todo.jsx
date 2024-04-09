import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import { MdDeleteForever } from "react-icons/md";
import { GrEdit } from "react-icons/gr";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const [isEditable, setIsEditable] = useState(false);
  const [text, setText] = useState(todo.text);

  return (
    <li
      className="flex items-center gap-2 mx-2 my-1 py-1 px-2 bg-gray-600"
      key={todo.id}
    >
      <input
        className=""
        id={todo.id}
        type="checkbox"
        checked={todo.checked}
        onChange={() => {
          dispatch(updateTodo({ id: todo.id, checked: !todo.checked }));
        }}
      />

      {!isEditable ? (
        <label className="min-w-0 flex-grow px-1" htmlFor={todo.id}>
          <p
            className={`w-full break-words text-wrap ${
              todo.checked && "text-decoration: line-through text-red-400"
            }`}
          >
            {text}
          </p>
        </label>
      ) : (
        <input
          className={`flex-grow rounded-md outline-none py-[2px] px-2 bg-gray-600 border-[1px] ${
            isEditable ? "border-gray-400" : "border-gray-600"
          }`}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          readOnly={!isEditable}
        />
      )}

      <button
        className="text-green-500 hover:text-green-300 text-lg p-[5px] border-[1px] rounded-md border-gray-500 hover:border-gray-400"
        onClick={() => {
          setIsEditable((pre) => !pre);
        }}
      >
        <GrEdit />
      </button>
      <button
        className="text-red-500 text-xl p-1 hover:text-red-300  border-[1px] rounded-md border-gray-500 hover:border-gray-400"
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        <MdDeleteForever />
      </button>
    </li>
  );
};

export default Todo;
