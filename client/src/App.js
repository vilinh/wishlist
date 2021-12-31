import { useState, useEffect } from "react";
import Item from "./components/Item/Item";
import AddItemButton from "./components/addItem/AddItemButton";
import AddItem from "./components/addItem/AddItem";
import Navbar from "./components/navbar/Navbar";
import AddCategory from "./components/addCategory/AddCategory";
import Categories from "./components/Categories/Categories";
const API_BASE = "http://localhost:3001";

function App() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [addActive, setAddActive] = useState(false);
  const [filterActive, setFilterActive] = useState(false);
  const [addCatButton, setAddCatButton] = useState(false);

  useEffect(() => {
    GetItems();
    GetCategories();
  }, [items]);

  const GetCategories = () => {
    fetch(API_BASE + "/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error ", err));
  };
  const GetItems = () => {
    fetch(API_BASE + "/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error ", err));
  };

  const handleFilter = (cat) => {
    fetch(API_BASE + `/items/${cat}`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error ", err));
  };

  return (
    <div>
      <Navbar />
      <div className="App">
        <div className={`main-nav ${filterActive ? "show" : "no-show"}`}>
          <h4>Your WishList</h4>
          <div className="icons">
            <i
              className="add-category fa-solid fa-plus"
              onClick={() => setAddCatButton(!addCatButton)}
            ></i>
            <i
              className="app-filter fa-solid fa-arrow-down-short-wide"
              onClick={() => setFilterActive(!filterActive)}
            ></i>
            <span>
              <i
                className="fa-solid fa-arrow-up-short-wide"
                onClick={() => setFilterActive(!filterActive)}
              ></i>
            </span>
          </div>
        </div>
        {filterActive ? (
          <Categories
            categories={categories}
            handleFilter={handleFilter}
            GetItems={GetItems}
          />
        ) : (
          ""
        )}
        <div className="wishlist">
      {items.map((item) => (
        <Item item={item} key={item._id} items={items} />
      ))}
    </div>
        <AddItemButton setAddActive={setAddActive} />
        {addActive ? (
          <AddItem
            setAddActive={setAddActive}
            setItems={setItems}
            items={items}
            categories={categories}
            handleFilter={handleFilter}
          />
        ) : (
          ""
        )}
      </div>
      {addCatButton ? (
        <AddCategory
          categories={categories}
          setCategories={setCategories}
          addCatButton={addCatButton}
          setAddCatButton={setAddCatButton}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
