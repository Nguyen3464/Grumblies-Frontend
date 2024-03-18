import { render, screen, waitFor } from "@testing-library/react";
import RecipeIndex from "../Pages/RecipeIndex";
import mockRecipe from "../Components/Scaffolding/mockRecipe";
import { BrowserRouter } from "react-router-dom";

describe("<RecipeIndex", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        render(<RecipeIndex />, div);
    });
    
    it("renders recipe cards", async () => {
        render(
            <BrowserRouter>
                <RecipeIndex recipes={mockRecipe} />
            </BrowserRouter>
        );

        await waitFor(() => {
            mockRecipe.forEach((recipe) => {
                const recipeTitle = screen.getByText(new RegExp(recipe.title, "i"));
                expect(recipeTitle).toBeInTheDocument();
                const recipeCalories = screen.getByText(new RegExp(recipe.calories, "i"));
                expect(recipeCalories).toBeInTheDocument();
                const recipeCarbs = screen.getAllByText(new RegExp(recipe.carbs, "i"));                
                recipeCarbs.forEach((carb) => {
                    expect(carb).toBeInTheDocument();
                });
                const recipeCooktime = screen.getAllByText(new RegExp(recipe.cooktime, "i"));
                recipeCooktime.forEach((cooktime) => {
                    expect(cooktime).toBeInTheDocument();
                });
                const recipePreptime = screen.getAllByText(new RegExp(recipe.preptime, "i"));
                recipePreptime.forEach((preptime) => {
                    expect(preptime).toBeInTheDocument();
                });
                const recipeTotaltime = screen.getAllByText(new RegExp(recipe.totaltime, "i"));
                recipeTotaltime.forEach((totaltime) => {
                    expect(totaltime).toBeInTheDocument();
                });
                const recipeFats = screen.getAllByText(new RegExp(recipe.fats, "i"));
                recipeFats.forEach((fats) => {
                    expect(fats).toBeInTheDocument();
                });
                const recipeFibers = screen.getAllByText(new RegExp(recipe.fibers, "i"));
                recipeFibers.forEach((fibers) => {
                    expect(fibers).toBeInTheDocument();
                });
                const recipeProtiens = screen.getAllByText(new RegExp(recipe.protiens, "i"));
                recipeProtiens.forEach((protiens) => {
                    expect(protiens).toBeInTheDocument();
                });
                const recipeSugars = screen.getAllByText(new RegExp(recipe.sugars, "i"));
                recipeSugars.forEach((sugars) => {
                    expect(sugars).toBeInTheDocument();
                });const recipeServings = screen.getAllByText(new RegExp(recipe.servings, "i"));
                recipeServings.forEach((servings) => {
                    expect(servings).toBeInTheDocument();
                });
                const recipeIngredients = screen.getAllByText(new RegExp(recipe.ingredients, "i"));
                recipeIngredients.forEach((ingredient) => {
                    expect(ingredient).toBeInTheDocument();
                });
                const recipeInstructions = screen.getAllByText(new RegExp(recipe.instructions, "i"));
                recipeInstructions.forEach((instructions) => {
                    expect(instructions).toBeInTheDocument();
                });
                const recipeDescription = screen.getAllByText(new RegExp(recipe.description, "i"));
                recipeDescription.forEach((description) => {
                    expect(description).toBeInTheDocument();
                });
                const recipeImages = screen.getAllByRole("img", { src: recipe.image });
                recipeImages.forEach((image) => {
                    expect(image).toBeInTheDocument();
                });
            });
        });
    });
});


