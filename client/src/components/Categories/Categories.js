import React from "react";
import "./categories.css";

export default function Categories({ categories, handleFilter, GetItems }) {
  const clickHandler = (cat) => {
    handleFilter(cat.name);
  };

  return (
    <div className="categories">
      <h3 onClick={GetItems}>All</h3>
      {categories.map((cat) => (
        <h3 key={cat._id} onClick={() => clickHandler(cat)}>
          {cat.name}
          <i className="catx fas fa-times"></i>
        </h3>
      ))}
    </div>
  );
}
