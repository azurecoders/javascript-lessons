import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "./Button";
import LoadingSpinner from "./LoadingSpinner";

const LearningUseEffectHook = () => {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("I am being called");
  // }, [count]); // Dependency Array

  // const clickMeHandler = (e) => {
  //   console.log("Synthetic event: ", e);
  //   setCount((prev) => prev + 1);
  // };

  // console.log(recipes);

  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(isLoading);

  // This is not a React Component, basically this is inside react component.

  const fetchRecipes = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get("https://dummyjson.com/recipes");
      // console.log("API Response: ", data);

      const { recipes } = data;

      setRecipes(recipes);
    } catch (error) {
      console.log("Request to backend failed: ", error);
    } finally {
      setIsLoading(false);
    }
    /* Returns the
	complete data for the response including status code messages and other details etc */

    // if (!apiResponse.ok) {
    //   console.log("There is some error occured while fetching the records");
    //   return;
    // }

    //   const data =
    //     await apiResponse.json(); /* In order to get the data we use .json()
    // function and all the data coming from backend will be stored in here */

    //   console.log(data);
  };

  useEffect(() => {
    fetchRecipes();

    // Clean up function
    return () => {
      console.log("I got unmounted");
    };
  }, []);

  return (
    <div>
      {/* <button onClick={clickMeHandler}>Click Me</button> */}
      {/* <Button text="Click Me" /> */}
      {/* <Button text="Submit" /> */}

      {isLoading ? <LoadingSpinner /> : <p>{recipes.length} items loaded</p>}
      {recipes.map((recipe) => {
        return <p>{recipe.name}</p>;
      })}
    </div>
  );
};

export default LearningUseEffectHook;
