import React from "react";
import { NavLink } from "react-router-dom";

const RecipeIndex = ({ recipes }) => {
  if (!recipes || recipes.length === 0) {
    return <p>No recipes available.</p>;
  }

  return (
    <main>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <p>title: {recipe.title}</p>
          <p>Calories: {recipe.calories}</p>
          <p>carbs: {recipe.carbs}</p>
          <p>cooktime: {recipe.cooktime}</p>
          <p>fats: {recipe.fats}</p>
          <p>fibers: {recipe.fibers}</p>
          <NavLink to={`/recipeshow/${recipe.id}`}>
            <img src={recipe.image} alt="" height="200px" width="200px" />
          </NavLink>
          <p>ingredients: {recipe.ingredients}</p>
          <p>instructions: {recipe.instructions}</p>
          <p>protiens: {recipe.protiens}</p>
          <p>servings: {recipe.servings}</p>
          <p>substitution: {recipe.substitution}</p> {/* Fixed typo */}
          <p>sugars: {recipe.sugars}</p>
        </div>
      ))}
    </main>
  );
};

export default RecipeIndex;
