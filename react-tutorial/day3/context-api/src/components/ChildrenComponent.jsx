import React from "react";
import { useCounter } from "./CounterContext";

const ChildrenComponent = () => {
  const { count, setCount } = useCounter();
  console.log(setCount);
  return <div className="text-4xl">{count}</div>;
};

export default ChildrenComponent;
