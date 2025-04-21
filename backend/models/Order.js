const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  userId: String,
  totalPrice: Number,
  status: String,
});

module.exports = mongoose.model("Order", orderSchema);
