import React from "react";

function MenuItem({ image, name, place }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {place} </p>
    </div>
  );
}

export default MenuItem;
