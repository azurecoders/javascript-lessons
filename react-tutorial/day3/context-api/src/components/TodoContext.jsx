// TodoContext.js
import React, { createContext, useContext, useReducer, useState } from "react";

const TodoContext = createContext(); // TodoStore

const initialTodos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Learn Context API", completed: false },
];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  console.log("Todos: ", todos);
  const [filter, setFilter] = useState("all"); // all | active | completed
  const [darkMode, setDarkMode] = useState(true);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <TodoContext.Provider
      value={{
        todos,
        dispatch,
        filter,
        setFilter,
        filteredTodos,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
