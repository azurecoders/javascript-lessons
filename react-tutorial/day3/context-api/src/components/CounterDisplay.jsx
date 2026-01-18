import ChildrenComponent from "./ChildrenComponent";
import { useCounter } from "./CounterContext";

const CounterDisplay = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      {/*  <ChildrenComponent>
        <h1>Hii</h1>
      </ChildrenComponent> */}
    </>
  );
};

export default CounterDisplay;
