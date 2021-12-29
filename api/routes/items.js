const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

// GET ALL ITEMS
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ADD NEW ITEM
router.post("/new", async (req, res) => {
  const item = new Item({
    itemName: req.body.itemName,
    quantity: req.body.quantity,
    category: req.body.category,
    image: req.body.image,
    link: req.body.link,
    notes: req.body.notes
  });
  try {
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE ITEM
router.delete("/delete/:id", async (req, res) => {
  try {
    const result = await Item.findByIdAndDelete(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE ITEM AS BOUGHT/NOT BOUGHT
router.put("/bought/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);
  item.bought = !item.bought;

  item.save();
  res.json(item);
});

// INCREMENT QUANTITY OF ITEM
router.put("/increment/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);
  item.quantity += 1;

  item.save();
  res.json(item);
});

// DECREMENT QUANTITY OF ITEM
router.put("/decrement/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);
  item.quantity -= 1;

  item.save();
  res.json(item);
});

module.exports = router;
