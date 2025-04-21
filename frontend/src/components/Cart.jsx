import React, { useEffect, useState } from "react";
import { getCart, removeFromCart, placeOrder } from "../services/api";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await getCart("user123");
      setCartItems(response.data.items);
      const total = response.data.items.reduce(
        (total, item) => total + item.price,
        0
      );
      setTotalPrice(total);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      await removeFromCart("user123", productId);
      fetchCart();
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const handlePlaceOrder = async () => {
    try {
      await placeOrder(
        "user123",
        cartItems.map((item) => item._id),
        totalPrice
      );
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-900 flex items-center gap-2">
        🛒 Your Shopping Cart
      </h2>

      {cartItems.length > 0 ? (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white shadow-lg border border-gray-200 rounded-2xl p-5 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 w-full">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-xl border"
                />
                <div className="flex-1 space-y-1">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {item.description}
                  </p>
                  <p className="text-blue-600 font-semibold text-base">
                    ₹{item.price}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item._id)}
                className="text-red-500 hover:text-red-600 font-medium mt-3 sm:mt-0 sm:ml-4"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex flex-col sm:flex-row justify-between items-center border-t pt-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
              Total: ₹{totalPrice.toFixed(2)}
            </h3>
            <button
              onClick={handlePlaceOrder}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-colors text-lg font-medium"
            >
              Place Order
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-24">
          <p className="text-gray-500 text-xl">Your cart is empty 🛍️</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
