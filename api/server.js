const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://vi:cats123@plantrecipes.rrkes.mongodb.net/WishList?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to DB"))
  .catch(console.error);

const Item = require("./models/Item");

// GET ALL ITEMS
app.get("/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ADD NEW ITEM
app.post("/item/new", async (req, res) => {
  const item = new Item({
    itemName: req.body.itemName,
    quantity: req.body.quantity,
    category: req.body.category,
    image: req.body.image
  });
  try {
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE ITEM
app.delete("/item/delete/:id", async (req, res) => {
  try {
    const result = await Item.findByIdAndDelete(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE ITEM AS BOUGHT/NOT BOUGHT
app.put("/item/bought/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);
  item.bought = !item.bought;

  item.save();
  res.json(item);
});

// INCREMENT QUANTITY OF ITEM
app.put("/item/increment/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);
  item.quantity += 1;

  item.save();
  res.json(item);
});

// DECREMENT QUANTITY OF ITEM
app.put("/item/decrement/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);
  item.quantity -= 1;

  item.save();
  res.json(item);
});

app.listen(3001, () => console.log("Server started on port 3001"));
