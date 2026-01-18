// TodoApp.jsx
import React, { useState } from "react";
import { useTodos } from "./TodoContext";

export const TodoApp = () => {
  const { filteredTodos, dispatch, filter, setFilter, darkMode, setDarkMode } =
    useTodos();
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  return (
    <div
      style={{
        padding: 20,
        background: darkMode ? "#222" : "#eee",
        color: darkMode ? "#eee" : "#222",
        minHeight: "100vh",
      }}
    >
      <h1 className="font-semibold text-3xl">Todo List</h1>
      <button
        className="bg-blue-400 text-white px-2 py-1 rounded-md cursor-pointer hover:opacity-80 transition-all duration-300 ease-in-out mt-2"
        onClick={() => setDarkMode((d) => !d)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="mt-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New todo"
          className="border rounded-md px-2 py-2 w-[400px]"
        />
        <button
          className="bg-blue-400 text-white px-4 py-2 rounded-md cursor-pointer hover:opacity-80 transition-all duration-300 ease-in-out h-full ml-3"
          onClick={addTodo}
        >
          Add
        </button>
      </div>

      <div style={{ marginTop: 20 }}>
        <button
          className="bg-yellow-500 text-white px-4 py-1 rounded-md cursor-pointer hover:opacity-80 transition-all duration-300 ease-in-out h-full ml-3 disabled:opacity-50"
          onClick={() => setFilter("all")}
          disabled={filter === "all"}
        >
          All
        </button>
        <button
          className="bg-pink-500 text-white px-4 py-1 rounded-md cursor-pointer hover:opacity-80 transition-all duration-300 ease-in-out h-full ml-3 disabled:opacity-50"
          onClick={() => setFilter("active")}
          disabled={filter === "active"}
        >
          Active
        </button>
        <button
          className="bg-green-500 text-white px-4 py-1 rounded-md cursor-pointer hover:opacity-80 transition-all duration-300 ease-in-out h-full ml-3 disabled:opacity-50"
          onClick={() => setFilter("completed")}
          disabled={filter === "completed"}
        >
          Completed
        </button>
      </div>

      <ul className="mt-12">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            className="border px-2 py-2 rounded-md hover:bg-neutral-800 hover:text-white transition-all duration-300 ease-in-out my-4 flex gap-3 items-center text-xl font-semibold cursor-pointer justify-between"
          >
            <div className="flex gap-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() =>
                  dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                }
              />
              {todo.text}
            </div>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_TODO", payload: todo.id })
              }
              className="bg-red-500 px-3 py-1 text-white rounded-md hover:opacity-80 transition-all duration-300 ease-in-out cursor-pointer"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
