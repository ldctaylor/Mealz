import React from "react";
import { useState } from "react";

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevents the nativs JS form behaviour which refreshes whole page
    console.log({ recipe });
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
      <button>Add recipe</button>
    </form>
  );
}

export default Form;
