import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Snack from "./MenuItem";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const snacksData = await SnackOrBoozeApi.getSnacks();
      const drinksData = await SnackOrBoozeApi.getDrinks();
      setSnacks(snacksData);
      setDrinks(drinksData);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home snacks={snacks} drinks={drinks} />} />
          <Route
            path="/snacks"
            element={<FoodMenu items={snacks} type="snacks" />}
          />
          <Route
            path="/snacks/:id"
            element={<FoodItem items={snacks} type="snacks" />}
          />
          <Route
            path="/drinks"
            element={<FoodMenu items={drinks} type="drinks" />}
          />
          <Route
            path="/drinks/:id"
            element={<FoodItem items={drinks} type="drinks" />}
          />
          <Route path="*" element={<p>404 - Not Found</p>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
