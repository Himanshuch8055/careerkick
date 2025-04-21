const Order = require("../models/Order.js");

exports.placeOrder = async (req, res) => {
  try {
    const { userId, items, totalPrice } = req.body;
    const newOrder = new Order({
      userId,
      items,
      totalPrice,
      status: "Pending",
    });
    await newOrder.save();
    res.json(newOrder);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
