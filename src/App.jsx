"use client";

import Recipe from "./Recipe";
import RecipeList from "./RecipeList";

function App() {
  const recipes = [
    {
      id: 1,
      name: "Spaghetti Carbonara",
      cookingTime: 25,
      ingredients: [
        "200g spaghetti",
        "100g pancetta or guanciale, diced",
        "2 large eggs",
        "50g pecorino cheese, grated",
        "50g parmesan, grated",
        "Freshly ground black pepper",
        "Salt",
      ],
      instructions: [
        "Bring a large pot of salted water to boil and cook spaghetti according to package instructions.",
        "While pasta cooks, fry the pancetta in a large pan until crispy.",
        "In a bowl, whisk together eggs, grated cheeses, and black pepper.",
        "Drain pasta, reserving a cup of pasta water.",
        "Working quickly, add hot pasta to the pan with pancetta, remove from heat.",
        "Add the egg and cheese mixture, stirring constantly. Add pasta water as needed to create a creamy sauce.",
        "Serve immediately with extra grated cheese and black pepper.",
      ],
    },
    {
      id: 2,
      name: "Classic Margherita Pizza",
      cookingTime: 35,
      ingredients: [
        "Pizza dough for one 12-inch pizza",
        "1/4 cup tomato sauce",
        "8 oz fresh mozzarella, sliced",
        "Fresh basil leaves",
        "2 tbsp olive oil",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Preheat oven to 475°F (245°C) with a pizza stone if available.",
        "Roll out the pizza dough to a 12-inch circle.",
        "Spread tomato sauce evenly over the dough, leaving a small border.",
        "Arrange mozzarella slices over the sauce.",
        "Bake for 10-12 minutes until crust is golden and cheese is bubbly.",
        "Remove from oven, top with fresh basil leaves, drizzle with olive oil.",
        "Season with salt and pepper, slice and serve immediately.",
      ],
    },
    {
      id: 3,
      name: "Chicken Stir Fry",
      cookingTime: 20,
      ingredients: [
        "2 chicken breasts, sliced",
        "2 bell peppers, sliced",
        "1 onion, sliced",
        "2 cloves garlic, minced",
        "2 tbsp soy sauce",
        "1 tbsp honey",
        "1 tbsp vegetable oil",
        "1 tsp ginger, grated",
      ],
      instructions: [
        "Heat oil in a wok or large frying pan over high heat.",
        "Add chicken and stir fry until no longer pink, about 5 minutes.",
        "Add vegetables and garlic, stir fry for 3-4 minutes until crisp-tender.",
        "Mix soy sauce, honey, and ginger in a small bowl.",
        "Pour sauce over the chicken and vegetables, stir to coat.",
        "Cook for another 2 minutes until sauce thickens slightly.",
        "Serve hot over rice or noodles.",
      ],
    },
  ];

  const selectedRecipeId = recipes[0].id;

  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  return (
    <div className="app">
      <header className="app-header">
        <h1>Recipe Book</h1>
      </header>
      <main>
        <RecipeList recipes={recipes} selectedRecipeId={selectedRecipeId} />
        {selectedRecipe && <Recipe recipe={selectedRecipe} />}
      </main>
    </div>
  );
}

export default App;
