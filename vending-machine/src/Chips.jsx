import React, { useState } from "react";
import { Link } from "react-router-dom";

const Chips = () => {
  const [chips, setChips] = useState([]);

  const getChips = () => {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    setChips((items) => [...items, { x, y }]);
  };

  return (
    <div className="chips">
      <p>So far you have: {chips.length} bags</p>
      <button onClick={getChips}>More</button>
      <Link to="/">Go Back</Link>
      {...chipsArr}
    </div>
  );
};

export default Chips;
