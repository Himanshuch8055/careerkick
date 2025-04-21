import React from "react";
import { motion } from "framer-motion";
import { FaCartPlus } from "react-icons/fa";

const TrendingProducts = ({ products }) => (
  <section className="mb-14">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">Trending Now</h2>
    <div className="flex flex-wrap gap-6 justify-center">
      {products.map((prod) => (
        <motion.div key={prod.name} whileHover={{scale:1.04}} className="bg-white/80 rounded-2xl shadow-md hover:shadow-2xl p-4 w-64 flex flex-col items-center border border-gray-100 hover:border-indigo-300">
          <img src={prod.image} alt={prod.name} className="w-32 h-32 object-cover rounded-xl mb-3" />
          <span className="text-sm uppercase text-indigo-500 font-medium tracking-wide mb-1">{prod.category}</span>
          <span className="font-bold text-lg text-gray-800 mb-1">{prod.name}</span>
          <span className="text-indigo-600 font-bold text-base mb-2">{prod.price}</span>
          <button className="mt-auto bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition flex items-center gap-2 text-sm font-semibold">
            Add to Cart <FaCartPlus size={16} />
          </button>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TrendingProducts;
