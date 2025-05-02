import React from "react";
import { Link } from "react-router-dom";

const VendingMachine = () => {
  return (
    <div className="vending-machine">
      <div className="vending-machine-greeting">
        <p>Please make a selection?</p>
      </div>
      <div className="vending-machine-items">
        <Link to="/water">Water</Link>
        <Link to="/candy">Candy</Link>
        <Link to="/chips">Chips</Link>
      </div>
    </div>
  );
};

export default VendingMachine;
