const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

router.get("/", async (req, res) => {
  try {
    let categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const category = new Category({
    category: req.body.category,
    slug: req.body.slug,
  });
  try {
    let savedCategoy = await category;
    savedCategoy.save();
    res.json(savedCategoy);
  } catch (err) {
    res.json({ message: err });
  }
});

//get specific category

router.get("/:categoryId", async (req, res) => {
  try {
    let category = await Category.findById(req.params.categoryId);
    res.json(category);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;