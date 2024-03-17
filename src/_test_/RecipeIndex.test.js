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
                const recipeCalories = screen.getByText(new RegExp(recipe.calories, "i"));
                const recipeCarbs = screen.getAllByText(new RegExp(recipe.carbs, "i"));
                const recipeCooktime = screen.getAllByText(new RegExp(recipe.cooktime, "i"));
                const recipeFats = screen.getAllByText(new RegExp(recipe.fats, "i"));
                const recipeFibers = screen.getAllByText(new RegExp(recipe.fibers, "i"));
                const recipeProtiens = screen.getAllByText(new RegExp(recipe.protiens, "i"));
                const recipeSugars = screen.getAllByText(new RegExp(recipe.sugars, "i"));
                const recipeServings = screen.getAllByText(new RegExp(recipe.servings, "i"));
                const recipeIngredients = screen.getAllByText(new RegExp(recipe.ingredients, "i"));
                const recipeSubstitution = screen.getAllByText(new RegExp(recipe.subsitution, "i"));
                const recipeInstructions = screen.getAllByText(new RegExp(recipe.instructions, "i"));
                const recipeImages = screen.getAllByRole("img", { src: recipe.image });
                
                expect(recipeTitle).toBeInTheDocument();
                expect(recipeCalories).toBeInTheDocument();
                
                recipeImages.forEach((image) => {
                    expect(image).toBeInTheDocument();
                });
                recipeIngredients.forEach((ingredient) => {
                    expect(ingredient).toBeInTheDocument();
                });
                recipeSubstitution.forEach((subsitution) => {
                    expect(subsitution).toBeInTheDocument();
                });
                recipeInstructions.forEach((instructions) => {
                    expect(instructions).toBeInTheDocument();
                });
                recipeCarbs.forEach((carb) => {
                    expect(carb).toBeInTheDocument();
                });
                recipeProtiens.forEach((protiens) => {
                    expect(protiens).toBeInTheDocument();
                });
                recipeServings.forEach((servings) => {
                    expect(servings).toBeInTheDocument();
                });
                recipeCooktime.forEach((cooktime) => {
                    expect(cooktime).toBeInTheDocument();
                });
                recipeFats.forEach((fats) => {
                    expect(fats).toBeInTheDocument();
                });
                recipeSugars.forEach((sugars) => {
                    expect(sugars).toBeInTheDocument();
                });
                recipeFibers.forEach((fibers) => {
                    expect(fibers).toBeInTheDocument();
                });
            });
        });
    });
});


