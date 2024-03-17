import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom"; 
import RecipeShow from "../Pages/RecipeShow";
import mockRecipe from "../Components/Scaffolding/mockRecipe";

describe("<RecipeShow>", () => {
  it("renders recipe details when a valid recipe id is provided", () => {
    const recipeId = 1; 
    render(
      <MemoryRouter initialEntries={[`/recipeshow/${recipeId}`]}> 
        <Routes> 
          <Route path="/recipeshow/:id" element={<RecipeShow recipes={mockRecipe} />} />
        </Routes>
      </MemoryRouter>
    );
    const recipe = mockRecipe.find((recipe) => recipe.id === recipeId);

    expect(screen.getByText(recipe.title)).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`Calories: ${recipe.calories}`, 'i'))
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`Carbs: ${recipe.carbs}`, 'i'))
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`Cooktime: ${recipe.cooktime}`, 'i'))
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`Fats: ${recipe.fats}`, 'i'))
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`Fibers: ${recipe.fibers}`, 'i'))
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`Ingredients: ${recipe.ingredients}`, 'i'))
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`Instructions: ${recipe.instructions}`, 'i'))
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`Protiens: ${recipe.protiens}`, 'i'))
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`Servings: ${recipe.servings}`, 'i'))
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`Sugars: ${recipe.sugars}`, 'i'))
    ).toBeInTheDocument();
    expect(screen.getByAltText(recipe.title)).toBeInTheDocument();
  });

  it("renders 'Recipe not found' message when an invalid recipe id is provided", () => {
    const recipeId = 1000; 
    render(
      <MemoryRouter initialEntries={[`/recipeshow/${recipeId}`]}> 
        <Routes> 
          <Route path="/recipeshow/:id" element={<RecipeShow recipes={mockRecipe} />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText("Recipe not found")).toBeInTheDocument();
  });
});