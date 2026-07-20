import React from "react";

function MovieCard({ poster, name, rating, year }) {
  return (
    <div className="card">
      <img src={poster} alt={name} />
      <h3>{name}</h3>
      <p>⭐ {rating}</p>
      <p>Release Year: {year}</p>
    </div>
  );
}

export default MovieCard;