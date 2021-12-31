import { React, useState } from "react";
import "./categories.css";
import Cat from './Cat'

export default function Categories({ categories, handleFilter, GetItems }) {

  return (
    <div className="categories">
      <h3 onClick={GetItems}>All</h3>
      {categories.map((cat) => (
        <Cat key={cat._id} cat={cat} handleFilter={handleFilter}/>
      ))}
    </div>
  );
}
