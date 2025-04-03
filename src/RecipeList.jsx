"use client";

function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      <h2>My Recipes</h2>
      <div className="recipe-cards">
        {recipes.map((recipe) => (
          <div key={recipe.id} className={`recipe-card`}>
            <h3>{recipe.name}</h3>
            <div className="recipe-meta">
              <span className="ingredient-count">
                <i className="meta-icon">🥕</i> {recipe.ingredients.length}{" "}
                ingredients
              </span>
              <span className="cooking-time">
                <i className="meta-icon">⏱️</i> {recipe.cookingTime} mins
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
