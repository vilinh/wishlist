import { React } from "react";
import { useState } from "react";
const API_BASE = "http://localhost:3001";

export default function Cat({ cat, handleFilter, setCategories, categories }) {
  const [style, setStyle] = useState({ display: "none" });

  const delCategory = async (id) => {
    const data = await fetch(API_BASE + "/categories/delete/" + id, {
      method: "DELETE",
    }).then((res) => res.json())

    setCategories((categories) =>
      categories.filter((cat) => cat._id !== data._id)
    );
  };

  return (
    <div>
      <h3
        className="cat"
        onMouseEnter={(e) => {
          setStyle({ display: "block" });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: "none" });
        }}
        key={cat._id}
        onClick={() => handleFilter(cat.name)}
      >
        {cat.name}
        <i
          style={style}
          className="catx fas fa-times"
          onClick={() => delCategory(cat._id)}
        ></i>
      </h3>
    </div>
  );
}
