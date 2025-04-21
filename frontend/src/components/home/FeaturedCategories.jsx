import React from "react";
import { FaTshirt, FaLaptop, FaCouch, FaBasketballBall, FaBaby, FaGem } from "react-icons/fa";

const categories = [
  { icon: <FaTshirt />, label: "Fashion" },
  { icon: <FaLaptop />, label: "Electronics" },
  { icon: <FaCouch />, label: "Home" },
  { icon: <FaBasketballBall />, label: "Sports" },
  { icon: <FaBaby />, label: "Kids" },
  { icon: <FaGem />, label: "Accessories" },
];

const FeaturedCategories = () => (
  <section className="mb-12">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">Featured Categories</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-3xl mx-auto">
      {categories.map((cat) => (
        <div key={cat.label} className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-lg transition cursor-pointer border border-gray-100 hover:border-indigo-200">
          <span className="text-indigo-600 text-3xl mb-2">{cat.icon}</span>
          <span className="text-gray-700 font-medium">{cat.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedCategories;
