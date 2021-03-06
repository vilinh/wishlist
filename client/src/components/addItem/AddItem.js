import { React, useState, Component } from "react";
import CreatableSelect from "react-select/creatable";
const API_BASE = "http://localhost:3001";

export default function AddItem({ setAddActive, setItems, items, categories }) {
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [newItem, setNewItem] = useState("");
  const [link, setLink] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedCat, setSelectedCat] = useState(categories[0].name);

  const addItem = async () => {
    const data = await fetch(API_BASE + "/items/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        itemName: newItem,
        quantity: quantity,
        image: image,
        link: link,
        notes: notes,
        category: selectedCat,
      }),
    }).then((res) => res.json());

    setItems([...items, data]);
    setAddActive(false);
    setNewItem("");
  };

  return (
    <div className="additem">
      <div className="closeAddItem" onClick={() => setAddActive(false)}>
        <i className="fas fa-window-close"></i>
      </div>
      <div className="content">
        <h3>Add Item</h3>
        <div className="input-group">
          <label htmlFor="itemname">Item Name: </label>
          <input
            type="text"
            id="itemname"
            required
            onChange={(e) => setNewItem(e.target.value)}
            value={newItem}
          />
        </div>
        <div className="input-group">
          <label htmlFor="quantity-input">Amount: </label>
          <input
            type="number"
            id="quantity-input"
            min="1"
            placeholder="1"
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
          />
        </div>
        <div className="input-group">
          <label htmlFor="link-input">Link: </label>
          <input
            type="text"
            id="link-input"
            placeholder="Optional link to make it easier for your gifters!"
            onChange={(e) => setLink(e.target.value)}
            value={link}
          />
        </div>
        <div className="input-group">
          <label htmlFor="image-link">Image: </label>
          <textarea
            id="image-link"
            name="imagelink"
            placeholder="Paste a link to your item image to let your gifters know exactly
          what you're looking for!"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          ></textarea>
        </div>
        <div className="input-group">
          <label htmlFor="notes-input">Notes: </label>
          <textarea
            id="notes-input"
            placeholder="Any notes you want to add/specify."
            onChange={(e) => setNotes(e.target.value)}
            value={notes}
          ></textarea>
        </div>
        <div className="input-group category">
          <label htmlFor="category-select">Category: </label>
          <select
            id="category-select"
            value={selectedCat}
            onChange={(e) => setSelectedCat(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category._id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="createbutton" onClick={addItem}>
          Add
        </div>
      </div>
    </div>
  );
}
