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

app.get('/items', async (req, res) => {
    const items = await Item.find();

    res.json(items);
})

app.post('/item/new', async (req, res) => {
    const item = new Item({
        itemName: req.body.itemName
    });

    item.save();

    res.json(item);
})

app.delete('/item/delete/:id', async (req, res) => {
    const result = await Item.findByIdAndDelete(req.params.id);

    res.json(result)
})

app.put('/item/bought/:id', async (req, res) => {
    const item = await Item.findById(req.params.id);
    item.bought = !item.bought;

    item.save();
    res.json(item);
})

app.listen(3001, () => console.log("Server started on port 3001"))