import React from "react";
import { useParams } from "react-router-dom";

const RecipeShow = ({ recipes }) => {
  const { id } = useParams();
  let currentRecipe = recipes.find((recipe) => recipe.id === +id);

  return (
    <>
      <main>
        {currentRecipe ? (
          <section key={currentRecipe.id}>
            <p>{currentRecipe.title}</p>
            <p>Calories: {currentRecipe.calories}</p>
            <p>carbs: {currentRecipe.carbs}</p>
            <p>cooktime: {currentRecipe.cooktime}</p>
            <p>fats: {currentRecipe.fats}</p>
            <p>fibers: {currentRecipe.fibers}</p>
            <p>ingredients: {currentRecipe.ingredients}</p>
            <p>instructions: {currentRecipe.instructions}</p>
            <p>protiens: {currentRecipe.protiens}</p>
            <p>servings: {currentRecipe.servings}</p>
            <p>subsitution: {currentRecipe.subsitution}</p>
            <p>sugars: {currentRecipe.sugars}</p>
            <img
              src={currentRecipe.image}
              alt=""
              height="200px"
              width="200px"
            />
          </section>
        ) : (
          <p>Recipe not found</p>
        )}
      </main>
    </>
  );
};

export default RecipeShow;
