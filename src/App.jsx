import { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [todo, setTodo] = useState(() => {
    return JSON.parse(localStorage.getItem("TODO_DATA")) || [];
  });
  const [todoTitle, setTodoTitle] = useState("");

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

  const EditTodo = (id, newTitle) => {
    const indexToEdit = todo.findIndex((item) => item.id === id);
    if (indexToEdit !== -1) {
      const updatedTodo = [...todo];
      updatedTodo[indexToEdit].title = newTitle;
      setTodo(updatedTodo);
    } else {
      console.log("error, ID not found.");
    }
  };

  const CheckTodo = (id) => {
    const indexToCheck = todo.findIndex((item) => item.id === id);
    if (indexToCheck !== -1) {
      const updatedTodo = [...todo];
      updatedTodo[indexToCheck].success = true;
      setTodo(updatedTodo);
    } else {
      console.log("error, ID not found.");
    }
  };

  const DeleteTodo = (todoId) => {
    setTodo(todo.filter((item) => item.id !== todoId));
  };

  return (
    <div className="flex flex-col w-full h-screen overflow-hidden justify-center items-center bg-[#0F172A] relative">
      <div className="flex flex-col absolute top-[80px] w-full justify-center items-center space-y-6 p-10 bg-gradient-to-r from-[#6366F1] to-[#A855F7]">
        <h1 className="text-black text-4xl font-bold">TODO LIST</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="bg-white text-gray-900 text-sm rounded-lg p-3 w-[500px] max-[827px]:w-[400px] max-[420px]:w-[240px]"
            placeholder="Add Your Tasks"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
            required
          />
        </form>
      </div>
      <div className="flex flex-wrap justify-center items-center absolute top-[320px] h-[550px] gap-5 overflow-y-scroll pb-60">
        {todo?.map((list, i) => {
          return (
            <Card
              key={list.id}
              id={list.id}
              title={list.title}
              success={list.success}
              handleDelete={DeleteTodo}
              handleEdit={EditTodo}
              handleCheck={CheckTodo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
