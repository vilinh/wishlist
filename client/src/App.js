import Item from "./components/Item/Item";
import { useState, useEffect } from "react";
import AddItemButton from "./components/addItem/AddItemButton";
import AddItem from "./components/addItem/AddItem";
import Navbar from "./components/navbar/Navbar";
const API_BASE = "http://localhost:3001";

function App() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [addActive, setAddActive] = useState(false);

  useEffect(() => {
    GetItems();
    GetCategories();
  }, []);

  const GetItems = () => {
    fetch(API_BASE + "/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error ", err));
  };

  const GetCategories = () => {
    fetch(API_BASE + "/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error ", err));
  };

  console.log(categories);


  return (
    <div>
      <Navbar />
      <div className="App">
        <h4>Your WishList</h4>
        <div className="wishlist">
          {items.map((item) => (
            <Item
              item={item}
              key={item._id}
              setItems={setItems}
              items={items}
            />
          ))}
        </div>
        <AddItemButton setAddActive={setAddActive} />
        {addActive ? (
          <AddItem
            setAddActive={setAddActive}
            setItems={setItems}
            items={items}
            categories={categories}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
