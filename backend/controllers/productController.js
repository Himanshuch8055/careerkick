const Product = require("../models/Product.js");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.searchProducts = async (req, res) => {
  try {
    const { category, name } = req.query;
    const filter = {};
    if (category) filter.category = category;
    if (name) filter.title = { $regex: name, $options: "i" };
    const products = await Product.find(filter);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
