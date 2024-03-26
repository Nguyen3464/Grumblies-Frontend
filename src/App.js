import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import mockRecipe from "./Components/Scaffolding/mockRecipe";
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
  const [recipes, setRecipes] = useState(mockRecipe);

  const createRecipe = (recipe) => {
    console.log(recipe);
  };
  const updateRecipe = (recipe, id) => {
    console.log("updated recipe", recipe);
    console.log("updated recipe with id", id);
  };
  // const deleteRecipe = (id) => {
  //   fetch(`http://localhost:3000/recipes/${id}`, {
	// 		headers: {
	// 			"Content-Type": "application/json"
	// 		},
	// 		method: "DELETE"
	// 	})
	// 	.then(response => response.json())
	// 	.then(() => readRecipe())
	// 	.catch(errors => console.log("Delete errors: ", errors))
  // };

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
              // deleteRecipe={deleteRecipe}
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
