// Class Based -> Not Used
// Function Based -> Widely Used

import { Fragment } from "react";
import CounterComponent from "./components/CounterComponent";

// Hooks - Pre built useful functions provided by react

// useState  ->
// useRef  ->
// useEffect  ->
// useMemo
// useCallback

// function greet(name) {
//   return `Hello ${name}`;
// }

function App() {
  const age = 19;
  return (
    <Fragment>
      {/* <h1>Hello This is App.jsx Component</h1>
      <p>{greet("Muzammil")}</p> */}

      {/* <div className="max-w-7xl mx-auto py-20">
        <h1 className="text-4xl font-semibold">To-Do List</h1>

        <div className="my-10 flex gap-1">
          <input
            placeholder="Enter Task"
            className="border w-full px-3 py-4 text-lg rounded-md"
          />
          <button className="bg-blue-500 text-white px-8 text-xl rounded-md cursor-pointer hover:bg-blue-400 transition-all duration-300 ease-in-out">
            Add
          </button>
        </div>

        <div>
          <p className="text-lg font-medium hover:underline transition-all duration-300 ease-in-out cursor-pointer">
            Learn JavaScript Projects
          </p>
        </div>
      </div> */}

      {age == 19 ? (
        <h1>Age is Equal to 19</h1>
      ) : age > 18 ? (
        <h1>Age is greater than 18</h1>
      ) : (
        <h1>Age is greater than 19</h1>
      )}

      <CounterComponent />
    </Fragment>
  );
}

export default App;
