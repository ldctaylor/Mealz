import React from "react";
import { useState } from "react";
import Error from "./Error";

function Form({ recipeArray, setRecipeArray, newRecipe, setNewRecipe }) {
  const [error, setError] = useState("false");
  const addNewRecipe = (newRecipe) => {
    setRecipeArray([...recipeArray, newRecipe]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents the nativs JS form behaviour which refreshes whole page
    setError("false");
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${newRecipe}`
    );
    const data = await response.json();
    if (data.meals) {
      addNewRecipe(data.meals[0]);
      setNewRecipe("");
    } else {
      setError("true");
    }
  };

  return (
    <form onSubmit={handleSubmit} error={error}>
      <input
        type="text"
        placeholder="Recipe name"
        value={newRecipe}
        onChange={(e) => setNewRecipe(e.target.value)}
      />
      <button>Find recipe</button>
      {error === "true" && <Error errorMessage="No meals found" />}
    </form>
  );
}

export default Form;
