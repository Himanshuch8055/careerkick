const express = require("express");
const router = express.Router();
const {
  getCart,
  addToCart,
  removeFromCart,
} = require("../controllers/cartController.js");

router.get("/:userId", getCart);
router.post("/:userId", addToCart);
router.delete("/:userId/:productId", removeFromCart);

module.exports = router;
