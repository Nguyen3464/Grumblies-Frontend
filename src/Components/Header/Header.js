import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = ({ currentUser, logout }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoutClick = () => {
    setMenuOpen(false);
    logout();
    navigate("/"); // Navigate to the home page after logout
  };

  return (
    <nav className="nav">
      <Link to="/" className="title">
        <h1>Grumblies</h1>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        {currentUser ? (
          <>
            <li>
              <NavLink to="/protectedpage">My Recipes</NavLink>
            </li>
            <li>
              <NavLink to="/index">Recipes</NavLink>
            </li>
            <li>
              <NavLink to="/new">Create Recipe</NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={handleLogoutClick}>Logout</NavLink> {/* Handle logout click separately */}
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/index">Recipes</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Signup</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;
