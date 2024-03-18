import React from "react";
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

const RecipeNew = () => {
  return (
    <>
      <Form className="form">
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="Title">Recipe Name</Label>
              <Input id="Title" placeholder="Example Name" />
            </FormGroup>
          </Col>
          <FormGroup>
            <Label for="Description">Description</Label>
            <Input
              id="Description"
              placeholder="Describe you wonderful culinary creation"
            />
          </FormGroup>
          <Col md={6}>
            <FormGroup>
              <Label for="Total Time">Total Time</Label>
              <Input id="TotalTime" placeholder="32 minutes" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Prep Time">Prep Time</Label>
              <Input id="PrepTime" placeholder="20 minutes" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Cook time">Cook Time</Label>
              <Input id="CookTime" placeholder="10 minutes" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Servings">Servings</Label>
              <Input id="Servings" placeholder="for 6 servings" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="Ingredients">Ingredients</Label>
              <Input
                id="Ingredients"
                type="textarea"
                rows={6}
                placeholder={`Seperate ingredients on new lines\n1 lb chicken breast, cubed\nsalt, to taste\npepper, to taste\n1 lb broccoli florets\n8 oz mushroom, sliced`}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Instructions">Instructions</Label>
              <Input
                id="Instructions"
                type="textarea"
                rows={6}
                placeholder={`Seperate instructions on new lines\nIn a large pan on medium-high heat, add 1 tablespoon of oil. \nIn the same pan, heat 1 tablespoon of oil and add mushrooms.\nAdd 1 tablespoon of oil to the pan and sauté garlic and ginger until fragrant.\nReturn the chicken and vegetables to the saucy pan, stir until heated through.\nServe with hot rice or noodles.`}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="Calories">Calories</Label>
              <Input id="Calories" placeholder="Calories" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Carbs">Carbs</Label>
              <Input id="Carbs" placeholder="Carbs" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Fat">Fat</Label>
              <Input id="Fat" placeholder="Fat" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Fiber">Fiber</Label>
              <Input id="Fiber" placeholder="7g" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Protein">Protein</Label>
              <Input id="Protein" placeholder="28g" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Sugar">Sugar</Label>
              <Input id="Sugar" placeholder="3g" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="Image">Image</Label>
          <Input id="Image" placeholder="Image URL" />
        </FormGroup>
        total time ! add to index,show page,
        index,show test, add column to recipe table 
        prep time ! add to
        index,show page, index,show test, add column to recipe table
      </Form>
    </>
  );
};

export default RecipeNew;
