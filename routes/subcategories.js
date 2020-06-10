const express = require("express");
const router = express.Router();
const SubCategory = require("../models/SubCategory");

router.get("/", async (req, res) => {
  try {
    let subcategories = await SubCategory.find();
    res.json(subcategories);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const category = new SubCategory({
    subcategory: req.body.subcategory,
    category: req.body.category,
    slug: req.body.slug,
  });
  try {
    let savedSubCategoy = await category;
    savedSubCategoy.save();
    res.json(savedSubCategoy);
  } catch (err) {
    res.json({ message: err });
  }
});

//get specific subcategory

router.get("/:subcategoryId", async (req, res) => {
  try {
    let subcategory = await SubCategory.findById(req.params.subcategoryId);
    res.json(subcategory);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
