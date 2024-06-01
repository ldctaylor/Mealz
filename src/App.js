import "./App.css";
import RecipeList from "./RecipeList";
import Form from "./Form";
import { recipes } from "./testdata/response-mocks.js";
import { useState } from "react";

function App({ title }) {
  const importedRecipes = recipes;

  const [recipeArray, setRecipeArray] = useState(importedRecipes);
  const [newRecipe, setNewRecipe] = useState(" ");

  return (
    <div className="App">
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        <Form
          recipeArray={recipeArray}
          setRecipeArray={setRecipeArray}
          newRecipe={newRecipe}
          setNewRecipe={setNewRecipe}
        />
        <div className="row">
          <RecipeList recipeArray={recipeArray} />
        </div>
      </main>
    </div>
  );
}

export default App;
