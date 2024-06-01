import React from "react";

function Recipe(recipe) {
  return (
    <div className="col-sm-8 col-md-6 col-lg-4 d-flex">
      <div className="card">
        <div className="card-header tags">
          {recipe.strTags ? recipe.strTags.split(",").join("   |   ") : "---"}
        </div>
        <img
          src={recipe.strMealThumb}
          className="card-img-top"
          alt="Pic of recipe"
        />
        <div className="card-body">
          {/* <div className="card-header recipe-tags">
                  Quick | Kids Love{" "}
                </div> */}
          <h5 className="card-title">{recipe.strMeal}</h5>
          <div className="recipe">
            <div className="card-text recipe-intro">
              {recipe.strInstructions
                ? recipe.strInstructions.split(" ").slice(0, 60).join(" ")
                : " "}
              ...
            </div>
            {/* <ul className="list-group list-group-flush ingredients">
            <li class="list-group-item">An ingredient</li>
            <li class="list-group-item">An ingredient</li>
            <li class="list-group-item">An ingredient</li>
          </ul> 
          <div className="card-text recipe">The recipe</div> */}
            <a href="#" className="card-link">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
