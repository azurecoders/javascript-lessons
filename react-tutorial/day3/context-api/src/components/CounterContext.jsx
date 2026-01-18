import { createContext, useContext, useState } from "react";

// -> Context -> Store
// -> Provider -> Store Incharge -> Store Officer

const CounterContext = createContext(); // store -> all the information are stored

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(100);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);

export default CounterProvider;
