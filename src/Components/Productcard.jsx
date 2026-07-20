import React from "react";

function ProductCard({ name, price, category, image, stock }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <p>Category: {category}</p>
      <p>Stock: {stock}</p>
    </div>
  );
}

export default ProductCard;