import React from "react";
import "./categories.css";

export default function Categories({ categories, handleFilter }) {
  return (
    <div className="categories">
      {categories.map((cat) => (
        <h3 key={cat._id} onClick={() => handleFilter(cat.name)}>
          {cat.name}
        </h3>
      ))}
    </div>
  );
}
