import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen bg-black text-white flex items-center justify-center ">
      <div className="bg-gray-700 w-full h-full flex flex-col sm:w-[450px] sm:h-[95%] sm:border-2 sm:border-blue-400 sm:rounded-2xl overflow-hidden ">
        <h1 className="bg-blue-950 p-2 text-center text-2xl font-semibold">Todo List</h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
