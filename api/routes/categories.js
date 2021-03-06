const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

//GET ALL CATEGORIES
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

//CREATE A CATEGORY
router.post("/new", async (req, res) => {
  const category = new Category(req.body);
  try {
    await category.save();
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

//RENAME A CATEGORY
router.put("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    category.name = req.body.name;
    category.save();
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE A CATEGORY
router.delete("/delete/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    try {
      await category.delete();
      res.status(200).json("The category has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
