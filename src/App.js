import "./App.css";
import RecipeList from "./RecipeList";
import Form from "./Form";
import { recipes } from "./testdata/response-mocks.js";

function App({ title }) {
  // const addNewRecipe = (newRecipe) => {
  //   console.log("App", newRecipe);
  //   recipes = [...recipes, newRecipe];
  // };
  return (
    <div className="App">
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        <Form recipes={recipes} />
        <div className="row">
          <RecipeList recipes={recipes} />
        </div>
      </main>
    </div>
  );
}

export default App;
