import React, { useEffect, useState } from "react";
import axios from "axios";

const LearningUseEffectHook = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("I am being called");
  // }, [count]); // Dependency Array

  const clickMeHandler = () => {
    setCount((prev) => prev + 1);
  };

  const [recipes, setRecipes] = useState([]);
  console.log(recipes);

  // This is not a React Component, basically this is inside react component.

  const fetchRecipes = async () => {
    const apiResponse = await axios.get(
      "https://dummyjson.com/recipes"
    ); /* Returns the
	complete data for the response including status code messages and other details etc */

    // if (!apiResponse.ok) {
    //   console.log("There is some error occured while fetching the records");
    //   return;
    // }

    console.log("API Response: ", apiResponse);

    //   const data =
    //     await apiResponse.json(); /* In order to get the data we use .json()
    // function and all the data coming from backend will be stored in here */

    //   console.log(data);

    setRecipes(apiResponse.data.recipes);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div>
      {/* <button onClick={clickMeHandler}>Click Me</button> */}
      {recipes.map((recipe) => {
        return <p>{recipe.name}</p>;
      })}
    </div>
  );
};

export default LearningUseEffectHook;
