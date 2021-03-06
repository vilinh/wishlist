import { React, useState } from "react";
import "./addcategory.css";
const API_BASE = "http://localhost:3001";

function AddCategory({
  categories,
  setCategories,
  addCatButton,
  setAddCatButton,
}) {
  const [newCat, setNewCat] = useState("");

  const addCat = async () => {
    const cat = await fetch(API_BASE + "/categories/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newCat,
      }),
    }).then((res) => res.json());

    setCategories([...categories, cat]);
    setNewCat("");
    setAddCatButton(!addCatButton);
  };

  return (
    <div className="add-cat">
      <div className="closeAddItem">
        <i
          className="fas fa-window-close"
          onClick={() => setAddCatButton(!addCatButton)}
        ></i>
      </div>
      <h4>Add a New Category</h4>
      <div className="input-group">
        <input
          type="text"
          id="itemname"
          required
          onChange={(e) => setNewCat(e.target.value)}
          value={newCat}
        />
      </div>
      <div className="createbutton" onClick={addCat}
      >
        Add
      </div>
    </div>
  );
}

export default AddCategory;
