import React from "react";
const API_BASE = "http://localhost:3001";

export default function AddItem({ setAddActive, setNewItem, newItem, setItems, items }) {

    const addItem = async () => {
        const data = await fetch(API_BASE + "/item/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                itemName: newItem
            })
        }).then(res => res.json());
        
        setItems([...items, data]);
        setAddActive(false);
        setNewItem("");
    }

  return (
    <div className="additem">
        <div className="closeAddItem"onClick={() => setAddActive(false)}>
            <i className="far fa-window-close"></i>
        </div>
      <div className="content">
        <h3>Add Item</h3>
        <input
          type="text"
          className="add item-input"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
        />
        <div className="createbutton" onClick={addItem}>Add</div>
      </div>
    </div>
  );
}
