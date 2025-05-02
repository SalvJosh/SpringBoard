import React, { useState } from "react";
import { Link } from "react-router-dom";

const Candy = () => {
  const [candies, setCandies] = useState([]);

  const getCandy = () => {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    setCandies((items) => [...items, { x, y }]);
  };

  return (
    <div className="candy">
      <div className="candy-card">
        <p>You've got: {candies.length} candies...</p>
        <button onClick={getCandy}>More</button>
        <br></br>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
};

export default Candy;
