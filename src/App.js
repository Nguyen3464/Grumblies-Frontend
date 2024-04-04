  import React, { useEffect, useState } from "react";
  import { Routes, Route, useNavigate } from "react-router-dom";
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
  import SignUp from "./Pages/SignUp.js";
  import MyRecipes from "./Pages/MyRecipes.js";

  function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        // Perform a request to validate the token and get user information
        // For simplicity, I'm assuming you have a method to validate the token and fetch user data
        // You can replace this with your actual implementation
        validateToken(token);
      }
    }, []);

    const validateToken = (token) => {
      // Assuming you have an endpoint to validate the token and fetch user data
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
          console.log("Token validation failed:", error);
          // Clear the token from local storage and reset the current user state
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
          // localStorage.setItem("token", token);

          localStorage.setItem("token", response.headers.get("Authorization"));

          console.log("localstoragetokenresponse:", response.headers.get("Authorization"));

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
          
          setCurrentUser(null)
          navigate("/");
        })
        .catch((error) => console.log("log out errors: ", error));
    };

    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
      readRecipe();
    }, []);

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
        // converts the object to a string that can be passed in the request
        body: JSON.stringify(recipe),
        // specify the info being sent in JSON and the info returning should be JSON
        headers: {
          "Content-Type": "application/json",
        },
        // HTTP verb so the correct endpoint is invoked on the server
        method: "POST",
      })
        .then((response) => response.json())
        .then((payload) => readRecipe())
        .catch((errors) => console.log("Recipe create errors:", errors));
    };

    const updateRecipe = (recipe, id) => {
      fetch(`http://localhost:3000/recipes/${id}`, {
        // converting an object to a string
        body: JSON.stringify(recipe),
        // specify the info being sent in JSON and the info returning should be JSON
        headers: {
          "Content-Type": "application/json",
        },
        // HTTP verb so the correct endpoint is invoked on the server
        method: "PATCH",
      })
        .then((response) => response.json())
        .then((payload) => readRecipe())
        .catch((errors) => console.log("Recipe update errors:", errors));
    };

    const deleteRecipe = (id) => {
      const token = localStorage.getItem("token"); // Retrieve the authentication token from localStorage
    
      fetch(`http://localhost:3000/recipes/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // Include the token in the Authorization header
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
        <Header currentUser={currentUser} logout={logout}/>
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
            element={<RecipeNew createRecipe={createRecipe} currentUser={currentUser} />}
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
