import { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [todo, setTodo] = useState(() => {
    return JSON.parse(localStorage.getItem("TODO_DATA")) || [];
  });
  const [todoTitle, setTodoTitle] = useState("");

  console.log(todo);

  useEffect(() => {
    localStorage.setItem("TODO_DATA", JSON.stringify(todo));
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoTitle.trim()) {
      AddTodo(todoTitle.trim());
      setTodoTitle("");
    }
  };

  const AddTodo = (title) => {
    const newTodo = { id: Date.now(), title: title, success: false };
    setTodo([...todo, newTodo]);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden  justify-center items-center bg-green-300 relative">
      <div className="flex flex-col absolute top-[10%] w-full justify-center items-center space-y-6 p-10 bg-gradient-to-r from-[#6366F1] to-[#A855F7]">
        <h1 className="text-black text-4xl font-bold">TODO LIST</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
            placeholder="Add Your Tasks"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
            required
          />
        </form>
      </div>
      <div className="flex flex-wrap justify-center items-center absolute top-[35%] h-[550px] gap-5 overflow-y-scroll hide-scrollbar">
        {todo?.map((list, i) => {
          return (
            <Card
              key={list.id}
              index={i + 1}
              name={list.title}
              success={list.success}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
