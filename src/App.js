import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// import mockRecipe from "./Components/Scaffolding/mockRecipe";
import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
import Home from "./Pages/Home.js";
import Login from "./Pages/Login.js";
import RecipeIndex from "./Pages/RecipeIndex.js";
import RecipeShow from "./Pages/RecipeShow.js";
import RecipeNew from "./Pages/RecipeNew/RecipeNew.js";
import RecipeEdit from "./Pages/RecipeEdit/RecipeEdit.js";
import NotFound from "./Pages/NotFound.js";
import "./Components/Header/Header.css";
import "./Pages/RecipeNew/RecipeNew.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    readRecipe()
  },[]);

  const readRecipe = () => {
    fetch("http://localhost:3000/recipes")
      .then((response) => response.json())
      .then((payload) => {
        setRecipes(payload)
      })
      .catch((error) => console.log(error))
  }

  const createRecipe = (recipe) => {
    fetch("http://localhost:3000/recipes", {
      // converts the object to a string that can be passed in the request
      body: JSON.stringify(recipe),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => readRecipe())
      .catch((errors) => console.log("Recipe create errors:", errors))
  }

  const updateRecipe = (recipe, id) => {
    fetch(`http://localhost:3000/recipes/${id}`, {
      // converting an object to a string
      body: JSON.stringify(recipe),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "PATCH"
    })
      .then((response) => response.json())
      .then((payload) => readRecipe())
      .catch((errors) => console.log("Recipe update errors:", errors))
  }
 
  const deleteRecipe = (id) => {
    fetch(`http://localhost:3000/recipes/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((payload) => readRecipe())
      .catch((errors) => console.log("delete errors:", errors))
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/index" element={<RecipeIndex recipes={recipes} />} />
        <Route path="/show/:id" element={<RecipeShow recipes={recipes} />} />
        <Route
          path="/new"
          element={<RecipeNew createRecipe={createRecipe} />}
        />
        <Route
          path="/edit/:id"
          element={
            <RecipeEdit
              recipes={recipes}
              updateRecipe={updateRecipe}
              deleteRecipe={deleteRecipe}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
