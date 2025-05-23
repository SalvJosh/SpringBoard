import React from "react";

function Home({ snacks, drinks }) {
  return (
    <div>
      <h1>Welcome to Silicon Valley's premier dive cafe!</h1>
      <p>
        We have {snacks.length} snacks and {drinks.length} drinks available.
      </p>
    </div>
  );
}

export default Home;
