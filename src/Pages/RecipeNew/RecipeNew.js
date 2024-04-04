import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Row, Col, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const RecipeNew = ({ createRecipe, currentUser }) => {
  const [newRecipe, setNewRecipe] = useState({
    user_id: currentUser?.id,
    title: "",
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
    fibers: "",
    proteins: "",
    sugars: "",
    image: "",

  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    createRecipe(newRecipe);
    navigate("/index");
  };

  return (
    <>
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
                value={newRecipe.title}
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
              value={newRecipe.description}
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
                value={newRecipe.totaltime}
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
                value={newRecipe.preptime}
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
                value={newRecipe.cooktime}
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
                value={newRecipe.servings}
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
                value={newRecipe.ingredients}
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
                value={newRecipe.instructions}
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
                value={newRecipe.calories}
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
                value={newRecipe.carbs}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <Col md={6}>
              <FormGroup>
                <Label for="fat">Fat</Label>
                <Input
                  id="fat"
                  type="text"
                  placeholder="Fat"
                  name="fats"
                  onChange={handleChange}
                  value={newRecipe.fats}
                />
              </FormGroup>
            </Col>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="fibers">Fiber</Label>
              <Input
                id="fibers"
                type="text"
                placeholder="7g"
                name="fibers"
                onChange={handleChange}
                value={newRecipe.fibers}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="proteins">Proteins</Label>
              <Input
                id="proteins"
                type="text"
                placeholder="28g"
                name="proteins"
                onChange={handleChange}
                value={newRecipe.proteins}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="sugars">Sugar</Label>
              <Input
                id="sugars"
                type="text"
                placeholder="3g"
                name="sugars"
                onChange={handleChange}
                value={newRecipe.sugars}
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
            value={newRecipe.image}
          />
        </FormGroup>
      </Form>
      <Button color="primary" onClick={handleSubmit} name="submit">
        Submit Recipe
      </Button>
    </>
  );
};

export default RecipeNew;
