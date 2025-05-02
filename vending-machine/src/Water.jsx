import React, { useState } from "react";
import { Link } from "react-router-dom";

const Water = () => {
  const [waterBottles, setWaterBottles] = useState([]);

  const getWater = () => {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    setWaterBottles((items) => [...items, { x, y }]);
  };

  return (
    <div className="water">
      <div className="water-card">
        <p>So far you have {waterBottles.length} waters</p>
        <p>Buy another one?</p>
        <button onClick={getWater}>More</button>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
};

export default Water;
