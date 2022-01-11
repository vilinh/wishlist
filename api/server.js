const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const itemRoute = require("./routes/items");
const categoryRoute = require("./routes/categories");
const authRoute = require("./routes/auth");

mongoose
  .connect(
    "mongodb+srv://vi:cats123@plantrecipes.rrkes.mongodb.net/WishList?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to DB"))
  .catch(console.error);

app.use("/items", itemRoute);
app.use("/categories", categoryRoute);
app.use("/auth", authRoute);

app.listen(3001, () => console.log("Server started on port 3001"));
