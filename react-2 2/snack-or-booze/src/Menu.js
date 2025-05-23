import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu({ items, type }) {
  return (
    <div className="Menu card">
      <h1>{type[0].toUpperCase() + type.slice(1)} Menu</h1>
      <div className="list-group">
        {items.map((item) => (
          <Link to={`/${type}/${item.id}`} key={item.id}>
            <li className="list-group-item">{item.name}</li>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Menu;
