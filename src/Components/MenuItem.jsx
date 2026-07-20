import React from "react";

function MenuItem({ dish, price, category, image, rating }) {
  return (
    <div className="card">
      <img src={image} alt={dish} />
      <h3>{dish}</h3>
      <p>₹{price}</p>
      <p>{category}</p>
      <p>⭐ {rating}</p>
    </div>
  );
}

export default MenuItem;