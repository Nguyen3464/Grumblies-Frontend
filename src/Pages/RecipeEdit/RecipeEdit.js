import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Row, Col, Button } from "reactstrap";
import { useParams, useNavigate} from "react-router-dom"; 


// import DeleteModal from "./RecipeDelete";

const RecipeEdit = ({ recipes, updateRecipe, deleteRecipe }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const currentRecipe = recipes?.find((recipe) => recipe.id === +id);
  const [editRecipe, setEditRecipe] = useState(() => {
    if (currentRecipe) {
      return {
        title: currentRecipe.title,
        description: currentRecipe.description,
        totaltime: currentRecipe.totaltime,
        preptime: currentRecipe.preptime,
        cooktime: currentRecipe.cooktime,
        servings: currentRecipe.servings,
        ingredients: currentRecipe.ingredients,
        instructions: currentRecipe.instructions,
        calories: currentRecipe.calories,
        carbs: currentRecipe.carbs,
        fats: currentRecipe.fats,
        fiber: currentRecipe.fibers,
        protein: currentRecipe.proteins,
        sugar: currentRecipe.sugars,
        image: currentRecipe.image,
      };
    } else {
      return null;
    }
  });

  const handleChange = (e) => {
    setEditRecipe({ ...editRecipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    updateRecipe(editRecipe, currentRecipe.id);
    navigate("/index");
  };

  // const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // const toggleDeleteModal = () => {
  //   setIsDeleteModalOpen(!isDeleteModalOpen);
  // };

  const handleDelete = () => {
    deleteRecipe(currentRecipe.id);
    navigate("/index");
  };

  return (
    <div className="container">
      <h2>Edit Recipe</h2>
      <Form className="form">
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="title">Recipe Name</Label>
              <Input
                id="title"
                type="text"
                placeholder="Recipe Name"
                name="title"
                onChange={handleChange}
                value={editRecipe.title}
              />
            </FormGroup>
          </Col>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              id="description"
              type="textarea"
              placeholder="Describe your wonderful culinary creation"
              name="description"
              onChange={handleChange}
              value={editRecipe.description}
            />
          </FormGroup>
          <Col md={6}>
            <FormGroup>
              <Label for="totaltime">Total Time</Label>
              <Input
                id="totaltime"
                type="text"
                placeholder="32 minutes"
                name="totaltime"
                onChange={handleChange}
                value={editRecipe.totaltime}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="preptime">Prep Time</Label>
              <Input
                id="preptime"
                type="text"
                placeholder="20 minutes"
                name="preptime"
                onChange={handleChange}
                value={editRecipe.preptime}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="cooktime">Cook Time</Label>
              <Input
                id="cooktime"
                type="text"
                placeholder="10 minutes"
                name="cooktime"
                onChange={handleChange}
                value={editRecipe.cooktime}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="servings">Servings</Label>
              <Input
                id="servings"
                type="text"
                placeholder="for 6 servings"
                name="servings"
                onChange={handleChange}
                value={editRecipe.servings}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="ingredients">Ingredients</Label>
              <Input
                id="ingredients"
                type="textarea"
                rows={6}
                placeholder="Seperate ingredients on new lines\n1 lb chicken breast, cubed\nsalt, to taste\npepper, to taste\n1 lb broccoli florets\n8 oz mushroom, sliced"
                name="ingredients"
                onChange={handleChange}
                value={editRecipe.ingredients}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="instructions">Instructions</Label>
              <Input
                id="instructions"
                type="textarea"
                rows={6}
                placeholder="Seperate instructions on new lines\nIn a large pan on medium-high heat, add 1 tablespoon of oil. \nIn the same pan, heat 1 tablespoon of oil and add mushrooms.\nAdd 1 tablespoon of oil to the pan and sauté garlic and ginger until fragrant.\nReturn the chicken and vegetables to the saucy pan, stir until heated through.\nServe with hot rice or noodles."
                name="instructions"
                onChange={handleChange}
                value={editRecipe.instructions}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="calories">Calories</Label>
              <Input
                id="calories"
                type="text"
                placeholder="Calories"
                name="calories"
                onChange={handleChange}
                value={editRecipe.calories}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="carbs">Carbs</Label>
              <Input
                id="carbs"
                type="text"
                placeholder="Carbs"
                name="carbs"
                onChange={handleChange}
                value={editRecipe.carbs}
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Label for="fat">Fat</Label>
              <Input
                id="fat"
                type="text"
                placeholder="Fat"
                name="fats"
                onChange={handleChange}
                value={editRecipe.fats}
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Label for="fiber">Fiber</Label>
              <Input
                id="fiber"
                type="text"
                placeholder="7g"
                name="fiber"
                onChange={handleChange}
                value={editRecipe.fiber}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="protein">Protein</Label>
              <Input
                id="protein"
                type="text"
                placeholder="28g"
                name="protein"
                onChange={handleChange}
                value={editRecipe.protein}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="sugar">Sugar</Label>
              <Input
                id="sugar"
                type="text"
                placeholder="3g"
                name="sugar"
                onChange={handleChange}
                value={editRecipe.sugar}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input
            id="image"
            type="textarea"
            placeholder="Image URL"
            name="image"
            onChange={handleChange}
            value={editRecipe.image}
          />
        </FormGroup>
      </Form>
      <Button color="primary" onClick={handleSubmit} name="submit">
        Submit Updated Recipe
      </Button>
      {/* <Button color="danger" onClick={toggleDeleteModal}> */}
      <Button color="danger" onClick={handleDelete} >
        Delete Recipe
      </Button>
    </div>
  );
};

export default RecipeEdit;
