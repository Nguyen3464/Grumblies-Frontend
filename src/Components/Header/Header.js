import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import homeIcon from "./Assets/HomeIcon.png"
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const location = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location.pathname]);

  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="nav">
      <Link to="/" className="title">
        <h1>
          Grumblies
        </h1>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/index" onClick={handleNavLinkClick}>
            Recipes
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" onClick={handleNavLinkClick}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
