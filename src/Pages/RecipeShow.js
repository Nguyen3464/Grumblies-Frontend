import React from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

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
            <p>Carbs: {currentRecipe.carbs}</p>
            <p>Cook time: {currentRecipe.cooktime}</p>
            <p>Fats: {currentRecipe.fats}</p>
            <p>Fibers: {currentRecipe.fibers}</p>
            <p>Ingredients: {currentRecipe.ingredients}</p>
            <p>Instructions: {currentRecipe.instructions}</p>
            <p>Protiens: {currentRecipe.protiens}</p>
            <p>Servings: {currentRecipe.servings}</p>
            <p>Sugars: {currentRecipe.sugars}</p>
            <p>Description: {currentRecipe.description}</p>
            <p>Total Time: {currentRecipe.totaltime}</p>
            <p>Prep Time: {currentRecipe.preptime}</p>
            <img
              src={currentRecipe.image}
              alt={currentRecipe.title}
              height="200px"
              width="200px"
            />
            <NavLink to={`/edit/${id}`} className="nav-link">
              Edit Recipe Profile
            </NavLink>
          </section>
        ) : (
          <p>Recipe not found</p>
        )}
      </main>
    </>
  );
};

export default RecipeShow;
