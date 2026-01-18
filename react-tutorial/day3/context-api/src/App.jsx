import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import { TodoProvider } from "./components/TodoContext";
import { TodoApp } from "./components/TodoApp";
import CounterDisplay from "./components/CounterDisplay";
import CounterProvider from "./components/CounterContext";
import ChildrenComponent from "./components/ChildrenComponent";
import LearningUseReducerHook from "./components/LearningUseReducerHook";

const App = () => {
  const user = {
    name: "Muzammil",
    email: "xyz@gmail.com",
    password: "123",
  };

  return (
    <>
      {/* <CounterProvider>
        <CounterDisplay />
        <ChildrenComponent />
      </CounterProvider> */}

      {/* <LearningUseReducerHook /> */}

      <TodoProvider>
        <TodoApp />
      </TodoProvider>
    </>
  );
};

export default App;
