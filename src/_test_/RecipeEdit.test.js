import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RecipeEdit from '../Pages/RecipeEdit/RecipeEdit';

// Mock useParams
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1', // Mocking id for testing
  }),
}));

describe('RecipeEdit component', () => {
  const recipes = [
    {
      id: 1,
      title: 'Mock Recipe',
      description: 'Mock Description',
      totaltime: '30 minutes',
      preptime: '15 minutes',
      cooktime: '15 minutes',
      servings: '4 servings',
      ingredients: 'Mock ingredients',
      instructions: 'Mock instructions',
      calories: '200 kcal',
      carbs: '20g',
      fats: '10g',
      fiber: '5g',
      protein: '15g',
      sugar: '5g',
      image: 'mockimage.jpg',
    },
  ];

  const updateRecipeMock = jest.fn();

  it('should render the edit form', () => {
    render(<RecipeEdit recipes={recipes} updateRecipe={updateRecipeMock} />);

    expect(screen.getByText('Edit Recipe')).toBeInTheDocument();
    expect(screen.getByLabelText('Recipe Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Description')).toBeInTheDocument();
    expect(screen.getByLabelText('Total Time')).toBeInTheDocument();
    expect(screen.getByLabelText('Prep Time')).toBeInTheDocument();
    expect(screen.getByLabelText('Cook Time')).toBeInTheDocument();
    expect(screen.getByLabelText('Servings')).toBeInTheDocument();
    expect(screen.getByLabelText('Ingredients')).toBeInTheDocument();
    expect(screen.getByLabelText('Instructions')).toBeInTheDocument();
    expect(screen.getByLabelText('Calories')).toBeInTheDocument();
    expect(screen.getByLabelText('Carbs')).toBeInTheDocument();
    expect(screen.getByLabelText('Fat')).toBeInTheDocument();
    expect(screen.getByLabelText('Fiber')).toBeInTheDocument();
    expect(screen.getByLabelText('Protein')).toBeInTheDocument();
    expect(screen.getByLabelText('Sugar')).toBeInTheDocument();
    expect(screen.getByLabelText('Image')).toBeInTheDocument();
    expect(screen.getByText('Submit Updated Recipe')).toBeInTheDocument();
  });

  it('should update state when input fields change', () => {
    render(<RecipeEdit recipes={recipes} updateRecipe={updateRecipeMock} />);

    const titleInput = screen.getByLabelText('Recipe Name');
    fireEvent.change(titleInput, { target: { value: 'New Mock Recipe Title' } });
    expect(titleInput.value).toBe('New Mock Recipe Title');
  });

  it('should call updateRecipe function when form is submitted', () => {
    render(<RecipeEdit recipes={recipes} updateRecipe={updateRecipeMock} />);

    fireEvent.click(screen.getByText('Submit Updated Recipe'));
    expect(updateRecipeMock).toHaveBeenCalled();
  });
});
