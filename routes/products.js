const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
  try {
    let products = await Product.find();
    res.json(products);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const product = new Product({
    product: req.body.product,
    description: req.body.description,
    slug: req.body.slug,
    category: req.body.category,
    subcategory: req.body.subcategory,
  });
  try {
    let savedProduct = await product;
    savedProduct.save();
    res.json(savedProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

//get specific product

router.get("/:productId", async (req, res) => {
  try {
    let product = await Product.findById(req.params.productId);
    res.json(product);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;

/*
//delete specific post 

router.delete('/:postId', async (req, res) => {
 
    try {
        let removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    }
    catch (err) {
        res.json({message: err});
    }
});

//delete specific post 

router.patch('/:postId', async (req, res) => {
 
    try {
        let updatedPost = await Post.updateOne({_id: req.params.postId}, {$set:{title: req.body.title}});
        res.json(updatedPost);
    }
    catch (err) {
        res.json({message: err});
    }
});
*/
