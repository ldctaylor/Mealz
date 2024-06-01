import React from "react";
import { useState } from "react";

function Form() {
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents the nativs JS form behaviour which refreshes whole page
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`
    );
    const data = await response.json();
    console.log(data);
  };
  const [recipe, setRecipe] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recipe name"
        value={recipe}
        onChange={(e) => setRecipe(e.target.value)}
      />
      <button>Find recipe</button>
    </form>
  );
}

export default Form;
