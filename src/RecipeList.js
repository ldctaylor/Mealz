import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipeArray }) {
  return (
    <>
      {recipeArray.map((recipe, index) => (
        <Recipe key={index} {...recipe} />
      ))}
    </>
  );
}

export default RecipeList;
