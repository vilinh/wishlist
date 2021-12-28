import Item from "./components/Item/Item";
import { useState, useEffect } from "react";
import AddItemButton from "./components/addItem/AddItemButton";
import AddItem from "./components/addItem/AddItem";
const API_BASE = "http://localhost:3001";

function App() {
  const [items, setItems] = useState([]);
  const [addActive, setAddActive] = useState(false);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    GetItems();
  }, []);

  const GetItems = () => {
    fetch(API_BASE + "/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error ", err));
  };

  return (
    <div className="App">
      <h1>Hi Y/N!</h1>
      <h4>Your WishList</h4>
      <div className="wishlist">
        {items.map((item) => (
          <Item item={item} key={item._id} setItems={setItems} items={items} />
        ))}
      </div>
      <AddItemButton setAddActive={setAddActive}/>
      {addActive ? (
        <AddItem
          setAddActive={setAddActive}
          newItem={newItem}
          setNewItem={setNewItem}
          setItems={setItems}
          items={items}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
