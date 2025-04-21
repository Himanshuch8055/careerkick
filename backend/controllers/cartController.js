const Cart = require("../models/Cart.js");

exports.getCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const cart = await Cart.findOne({ userId }).populate("items");
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const { productId } = req.body;
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, items: [productId] });
    } else {
      cart.items.push(productId);
    }
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.params;
    const cart = await Cart.findOne({ userId });
    if (cart) {
      cart.items.pull(productId);
      await cart.save();
    }
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
