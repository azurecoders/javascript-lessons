import { useState } from "react";

const NamesDisplayComponent = () => {
  // let names = ["Muzammil", "Ibrahim", "Ayan", "Shafaey"];

  let [names, setNames] = useState(["Muzammil", "Ibrahim", "Ayan", "Shafaey"]);

  const addAhmedFunction = () => {
    setNames((prev) => [...prev, "Ahmed"]);
  };

  return (
    <>
      <h1 className="font-bold mb-4">List of all the names</h1>

      {names.map((name, index) => {
        return (
          <p key={Math.random()}>
            {name} - {index}
          </p>
        );
      })}

      <button
        onClick={addAhmedFunction}
        className="bg-blue-500 text-white px-2 py-1 rounded-sm mt-4"
      >
        Add Ahmed
      </button>
    </>
  );
};

export default NamesDisplayComponent;
