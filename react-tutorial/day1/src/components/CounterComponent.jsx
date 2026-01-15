import { useState } from "react";

// const CounterComponent = () => {
// 	let count = 0

// 	const handleClick = () => {
// 		count = count + 1
// 		console.log(count)
// 		return count
// 	}

// 	return (
// 		<button onClick={handleClick}>Click me to increment {count}</button>
// 	)
// }

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return <button onClick={handleClick}>Click me to increment {count}</button>;
};

export default CounterComponent;
