import Ingredient from "./Ingredient"

function IngredientsList({ ingredients }) {
  return (
    <div className="ingredients-section">
      <h3>Ingredients</h3>
      <ul className="ingredients-list">
        {ingredients.map((ingredient, i) => (
          <Ingredient key={i} ingredient={ingredient} />
        ))}
      </ul>
    </div>
  )
}

export default IngredientsList

