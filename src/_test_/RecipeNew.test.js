import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import RecipeNew from "../Pages/RecipeNew/RecipeNew";
import { BrowserRouter as Router } from "react-router-dom";

describe("<RecipeNew />", () => {
  it("renders the form with all input fields", () => {
    render(
      <Router>
        <RecipeNew />
      </Router>
    );

    expect(screen.getByLabelText("Recipe Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Description")).toBeInTheDocument();
    expect(screen.getByLabelText("Total Time")).toBeInTheDocument();
    expect(screen.getByLabelText("Prep Time")).toBeInTheDocument();
    expect(screen.getByLabelText("Cook Time")).toBeInTheDocument();
    expect(screen.getByLabelText("Servings")).toBeInTheDocument();
    expect(screen.getByLabelText("Ingredients")).toBeInTheDocument();
    expect(screen.getByLabelText("Instructions")).toBeInTheDocument();
    expect(screen.getByLabelText("Calories")).toBeInTheDocument();
    expect(screen.getByLabelText("Carbs")).toBeInTheDocument();
    expect(screen.getByLabelText("Fat")).toBeInTheDocument();
    expect(screen.getByLabelText("Fiber")).toBeInTheDocument();
    expect(screen.getByLabelText("Protein")).toBeInTheDocument();
    expect(screen.getByLabelText("Sugar")).toBeInTheDocument();
    expect(screen.getByLabelText("Image")).toBeInTheDocument();
  });

  it("updates state when input values change", () => {
    render(
      <Router>
        <RecipeNew />
      </Router>
    );
    const recipeNameInput = screen.getByLabelText("Recipe Name");

    fireEvent.change(recipeNameInput, { target: { value: "New Recipe" } });

    expect(recipeNameInput.value).toBe("New Recipe");
  });

  it("calls createRecipe prop function with correct values when submitted", () => {
    const createRecipeMock = jest.fn();
    render(
      <Router>
        <RecipeNew createRecipe={createRecipeMock} />
      </Router>
    );
    const recipeNameInput = screen.getByLabelText("Recipe Name");
    const submitButton = screen.getByText("Submit Recipe");

    fireEvent.change(recipeNameInput, { target: { value: "New Recipe" } });
    fireEvent.click(submitButton);

    expect(createRecipeMock).toHaveBeenCalledWith({
      title: "New Recipe",
      description: "",
      totaltime: "",
      preptime: "",
      cooktime: "",
      servings: "",
      ingredients: "",
      instructions: "",
      calories: "",
      carbs: "",
      fats: "",
      fiber: "",
      protein: "",
      sugar: "",
      image: "",
    });
  });
});
