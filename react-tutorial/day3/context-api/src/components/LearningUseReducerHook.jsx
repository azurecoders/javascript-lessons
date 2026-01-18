import React, { useReducer } from "react";

const LearningUseReducerHook = () => {
  const reducer = (state, action) => {
    console.log(action);
    // if (action.type === "INCREMENT") {
    // return { count: state.count + 1 };
    //     // }

    // if (action.type === "DECREMENT") {
    //   // return { count: state.count - 1 };
    // }

    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };

      case "DECREMENT":
        return { count: state.count - 1 };
    }
  };

  const initialState = {
    count: 0,
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {count.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default LearningUseReducerHook;
