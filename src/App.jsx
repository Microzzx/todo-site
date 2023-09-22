import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [subTodo, setSubTodo] = useState("");
  const [count, setCount] = useState(0);
  console.log(todo);

  return (
    <>
      <div>
        <h1 className="text-white font-bold">TODO LIST</h1>
        <input
          type="text"
          placeholder="Add New Todo"
          onChange={(e) => setTodo(e.target.value)}
        />
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
