import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes }) {
  return (
    <>
      {recipes.map((recipe) => (
        <Recipe {...recipe} />
      ))}
    </>
  );
}

export default RecipeList;
