const express = require("express");
const router = express.Router();
const {
  getProducts,
  addProduct,
  searchProducts,
} = require("../controllers/productController.js");

router.get("/", getProducts);
router.post("/", addProduct);
router.get("/search", searchProducts);

module.exports = router;
