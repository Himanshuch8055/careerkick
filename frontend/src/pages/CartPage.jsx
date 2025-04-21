import React from "react";
import Cart from "../components/Cart";

const CartPage = () => {
  return (
    <div className="min-h-[80vh] w-full bg-gradient-to-br from-indigo-50 to-white py-10 px-2 sm:px-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl bg-white/90 rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2 text-center">
          Your Shopping Cart
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-6 text-center">
          Review your selected items, update quantities, and proceed to secure checkout.
        </p>
        <div className="w-full">
          <Cart />
        </div>
        <div className="flex items-center justify-center mt-6">
          <svg className="w-5 h-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span className="text-xs text-gray-400">Your information is protected & checkout is 100% secure.</span>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
