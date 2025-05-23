import React from "react";
import { Redirect, useParams } from "react-router-dom";

function MenuItem({ items, type }) {
  const { id } = useParams();
  const item = items.find((i) => i.id === id);

  if (!item) return <Navigate to={`/${type}`} replace />;

  return (
    <div className="card">
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>
        <b>Recipe:</b> {item.recipe}
      </p>
      <p>
        <b>Serve:</b> {item.serve}
      </p>
    </div>
  );
}

export default MenuItem;
