import React from "react";
import { NavLink } from "react-router-dom";

const MyRecipes = ({ recipes, currentUser }) => {
  const myRecipes = recipes?.filter(
    (recipes) => currentUser?.id === recipes.user_id
  );

  if (!myRecipes || myRecipes.length === 0) {
    return <p>No recipes available.</p>;
  }
  return (
    <>
      {myRecipes?.map((recipe) => (
        <div key={recipe.id}>
          <p>title: {recipe.title}</p>
          <p>Calories: {recipe.calories}</p>
          <p>Carbs: {recipe.carbs}</p>
          <p>Cooktime: {recipe.cooktime}</p>
          <p>Fats: {recipe.fats}</p>
          <p>Fibers: {recipe.fibers}</p>
          <NavLink to={`/show/${recipe.id}`}>
            <img src={recipe.image} alt="" height="200px" width="200px" />
          </NavLink>
          <p>Ingredients: {recipe.ingredients}</p>
          <p>Instructions: {recipe.instructions}</p>
          <p>Protiens: {recipe.protiens}</p>
          <p>Servings: {recipe.servings}</p>
          <p>Sugars: {recipe.sugars}</p>
          <p>Description: {recipe.description}</p>
          <p>Total Time: {recipe.totaltime}</p>
          <p>Prep Time: {recipe.preptime}</p>
        </div>
      ))}
    </>
  );
};

export default MyRecipes;
