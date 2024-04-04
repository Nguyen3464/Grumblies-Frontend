import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
import Home from "./Pages/Home/Home.js";
import Login from "./Pages/Login.js";
import RecipeIndex from "./Pages/RecipeIndex.js";
import RecipeShow from "./Pages/RecipeShow.js";
import RecipeNew from "./Pages/RecipeNew/RecipeNew.js";
import RecipeEdit from "./Pages/RecipeEdit/RecipeEdit.js";
import NotFound from "./Pages/NotFound.js";
import "./Components/Header/Header.css";
import "./Pages/RecipeNew/RecipeNew.css";
import SignUp from "./Pages/SignUp.js";
import MyRecipes from "./Pages/MyRecipes.js";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      validateToken(token);
    }
    // fetchRecipesFromSpoonacular();
    readRecipe();
  }, []);

  // const fetchRecipesFromSpoonacular = () => {
  //   const apiKey = 'apikey';
  //   const url = `https://api.spoonacular.com/recipes/random?number=5&apiKey=${apiKey}`;
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log("Recipes from Spoonacular:", data);
  //       setRecipes(data.recipes);
  //     })
  //     .catch(error => console.error('Error fetching recipes from Spoonacular:', error));
  // };

  const validateToken = (token) => {
    fetch("http://localhost:3000/validate_token", {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Invalid token");
        }
      })
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((error) => {
        localStorage.removeItem("token");
        setCurrentUser(null);
      });
  };

  const login = (userInfo) => {
    fetch("http://localhost:3000/login", {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        localStorage.setItem("token", response.headers.get("Authorization"));
        return response.json();
      })
      .then((payload) => {
        setCurrentUser(payload);
      })
      .catch((error) => console.log("login errors: ", error));
  };

  const signup = (userInfo) => {
    fetch("http://localhost:3000/signup", {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        localStorage.setItem("token", response.headers.get("Authorization"));
        return response.json();
      })
      .then((payload) => {
        setCurrentUser(payload);
      })
      .catch((error) => console.log("login errors: ", error));
  };

  const logout = () => {
    fetch("http://localhost:3000/login", {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      method: "DELETE",
    })
      .then((payload) => {
        localStorage.removeItem("token");
        setCurrentUser(null);
        navigate("/");
      })
      .catch((error) => console.log("log out errors: ", error));
  };

  const readRecipe = () => {
    fetch("http://localhost:3000/recipes")
      .then((response) => response.json())
      .then((payload) => {
        setRecipes(payload);
      })
      .catch((error) => console.log(error));
  };

  const createRecipe = (recipe) => {
    fetch("http://localhost:3000/recipes", {
      body: JSON.stringify(recipe),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((payload) => readRecipe())
      .catch((errors) => console.log("Recipe create errors:", errors));
  };

  const updateRecipe = (recipe, id) => {
    fetch(`http://localhost:3000/recipes/${id}`, {
      body: JSON.stringify(recipe),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((payload) => readRecipe())
      .catch((errors) => console.log("Recipe update errors:", errors));
  };

  const deleteRecipe = (id) => {
    const token = localStorage.getItem("token");

    fetch(`http://localhost:3000/recipes/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete recipe");
        }
        return response.json();
      })
      .then((payload) => readRecipe())
      .catch((error) => console.log("delete errors:", error));
  };

  return (
    <>
      <Header currentUser={currentUser} logout={logout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/signup" element={<SignUp signup={signup} />} />
        <Route
          path="/protectedpage"
          element={<MyRecipes recipes={recipes} currentUser={currentUser} />}
        />
        <Route path="/index" element={<RecipeIndex recipes={recipes} />} />
        <Route path="/show/:id" element={<RecipeShow recipes={recipes} />} />
        <Route
          path="/new"
          element={
            <RecipeNew createRecipe={createRecipe} currentUser={currentUser} />
          }
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
