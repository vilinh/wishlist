import React from "react";
import { useState } from 'react';
import "./item.css";
const API_BASE = "http://localhost:3001";

export default function Item({ item, setItems }) {
  const [quantity, setQuantity] = useState(item.quantity);

  const addItem = async id => {
  }

  const buyItem = async (id) => {
    const data = await fetch(API_BASE + "/item/bought/" + id, {
      method: "PUT",
    }).then((res) => res.json());

    setItems((items) =>
      items.map((item) => {
        if (item._id === data._id) {
          item.bought = data.bought;
        }
        return item;
      })
    );
  };

  const deleteItem = async (id) => {
    const data = await fetch(API_BASE + "/item/delete/" + id, {
      method: "DELETE",
    }).then((res) => res.json());

    setItems((items) => items.filter((item) => item._id !== data._id));
  };

  return (
    <>
      <div className={"item " + (item.bought ? "bought" : "")}>
        <div className="checkbox" onClick={() => buyItem(item._id)}></div>
        <div className="item-name">{item.itemName}</div>
        <div className="quantity">
          <i className="minus fa-solid fa-minus"></i>
          <div className="number">{item.quantity}</div>
          <i className="add fa-solid fa-plus"></i>
        </div>
        <i
          className="delete-item fas fa-trash-alt"
          onClick={() => deleteItem(item._id)}
        ></i>
      </div>
    </>
  );
}
