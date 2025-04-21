import React, { useState } from "react";
import ProductList from "../components/ProductList";

const Products = () => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full">
      <div className="w-full text-center mb-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">Products</h1>
        <p className="text-sm md:text-base text-gray-500 mt-1">Find the best products for you.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center mb-6 md:mb-10 w-full">
        <input
          type="text"
          placeholder="Search by product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full sm:w-1/2 md:w-1/3 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base"
        />
        <input
          type="text"
          placeholder="Search by category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full sm:w-1/2 md:w-1/3 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base"
        />
      </div>

      <div className="w-full">
        <ProductList category={category} name={name} />
      </div>
  </div>
  );    
};

export default Products;
