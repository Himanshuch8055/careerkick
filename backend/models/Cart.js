const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  userId: String,
});

module.exports = mongoose.model("Cart", cartSchema);
