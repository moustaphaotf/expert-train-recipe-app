import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";

function Recipe({ recipe }) {
  return (
    <div className="recipe">
      <h2 className="recipe-title">{recipe.name}</h2>
      <div className="recipe-content">
        <IngredientsList ingredients={recipe.ingredients} />
        <Instructions instructions={recipe.instructions} />
      </div>
    </div>
  );
}

export default Recipe;
