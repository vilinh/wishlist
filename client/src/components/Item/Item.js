import React from "react";
import { useState } from "react";
import "./item.css";
const API_BASE = "http://localhost:3001";

export default function Item({ item, setItems }) {
  const [quantity, setQuantity] = useState(item.quantity);

  const increment = async (id) => {
    const data = await fetch(API_BASE + "/items/increment/" + id, {
      method: "PUT",
    }).then((res) => res.json());

    setQuantity(data.quantity);
  };

  const decrement = async (id) => {
    const data = await fetch(API_BASE + "/items/decrement/" + id, {
      method: "PUT",
    }).then((res) => res.json());

    setQuantity(data.quantity);
  };

  const buyItem = async (id) => {
    const data = await fetch(API_BASE + "/items/bought/" + id, {
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
    const data = await fetch(API_BASE + "/items/delete/" + id, {
      method: "DELETE",
    }).then((res) => res.json());

    setItems((items) => items.filter((item) => item._id !== data._id));
  };

  return (
    <>
      <div className={"item " + (item.bought ? "bought" : "")}>
        <div className="basic">
          <div className="item-left">
            <div className="checkbox" onClick={() => buyItem(item._id)}>
              <i className="regular fa-regular fa-circle-check"></i>
              <span>
                <i className="fa-solid fa-circle-check"></i>
              </span>
            </div>
            <div className="item-name">
              <a href={item.link} target="_blank">
                {item.itemName}
              </a>
            </div>
          </div>
          <div className="item-right">
            <div className="quantity">
              <i
                className="minus fa-solid fa-minus"
                onClick={() => decrement(item._id)}
              ></i>
              <div className="number">{quantity}</div>
              <i
                className="add fa-solid fa-plus"
                onClick={() => increment(item._id)}
              ></i>
            </div>
            <i
              className="delete-item fas fa-trash-alt"
              onClick={() => deleteItem(item._id)}
            ></i>
          </div>
        </div>
        <div className="description">
          <div className="image">
            <img src={item.image} alt="wishlist" />
          </div>
          <div className="notes">
            {item.notes ? (<h3>Notes: </h3>):""}
            {item.notes}</div>
        </div>
        <div className="category">{item.category}</div>
      </div>
    </>
  );
}
