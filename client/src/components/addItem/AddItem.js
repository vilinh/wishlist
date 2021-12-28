import React from "react";
const API_BASE = "http://localhost:3001";

export default function AddItem({
  setAddActive,
  setNewItem,
  newItem,
  setItems,
  items,
}) {
  const addItem = async () => {
    const data = await fetch(API_BASE + "/item/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        itemName: newItem,
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
          <label for="itemname">Item: </label>
          <input
            type="text"
            id="itemname"
            onChange={(e) => setNewItem(e.target.value)}
            value={newItem}
          />
        </div>
        <div className="input-group">
          <label for="quantity-input">Amount: </label>
          <input type="number" id="quantity-input" min="1" placeholder="1" />
        </div>
        <div className="input-group">
          <label for="image-link">Image: </label>
          <textarea
            id="image-link"
            name="imagelink"
            placeholder="Paste a link to your item image to let your gifters know exactly
          what you want!"
          ></textarea>
        </div>
        <div className="createbutton" onClick={addItem}>
          Add
        </div>
      </div>
    </div>
  );
}
