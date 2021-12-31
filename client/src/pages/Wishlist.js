import { React, useEffect, useState } from "react";
import Item from "../components/Item/Item";
const API_BASE = "http://localhost:3001";

export default function Wishlist({items}) {

  return (
    <div className="wishlist">
      {items.map((item) => (
        <Item item={item} key={item._id} items={items} />
      ))}
    </div>
  );
}
