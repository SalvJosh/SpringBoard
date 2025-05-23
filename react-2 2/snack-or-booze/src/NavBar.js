import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <NavLink exact="true" to="/" className="navbar-brand">
        Snack or Booze
      </NavLink>
      <div className="navbar-nav">
        <NavLink to="/snacks" className="nav-item nav-link">
          Snacks
        </NavLink>
        <NavLink to="/drinks" className="nav-item nav-link">
          Drinks
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
