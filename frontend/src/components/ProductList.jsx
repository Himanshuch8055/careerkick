import React, { useEffect, useState } from "react";
import { getProducts, searchProducts, addProductToCart } from "../services/api";

const ProductList = ({ category, name }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [addingId, setAddingId] = useState(null);
  const [successId, setSuccessId] = useState(null);

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, [category, name]);

  const fetchProducts = async () => {
    setLoading(true);
    const start = Date.now();
    try {
      const response = category || name
        ? await searchProducts(category, name)
        : await getProducts();
      // Ensure products is always an array
      let productsArray = Array.isArray(response.data)
        ? response.data
        : Array.isArray(response.data?.products)
          ? response.data.products
          : [];
      setProducts(productsArray);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    const elapsed = Date.now() - start;
    const minLoading = 1500; // Minimum loading time in ms
    if (elapsed < minLoading) {
      setTimeout(() => setLoading(false), minLoading - elapsed);
    } else {
      setLoading(false);
    }
  };

  const handleAddToCart = async (product) => {
    setAddingId(product._id);
    setSuccessId(null);
    try {
      await addProductToCart("user123", product._id);
      setSuccessId(product._id);
      setTimeout(() => setSuccessId(null), 1200);
    } catch (error) {
      console.error("Error adding product to cart:", error);
      // Optionally show error feedback
    }
    setAddingId(null);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {loading ? (
        <div className="flex flex-col justify-center items-center py-16">
          <span className="sr-only">Loading products...</span>
          <div className="flex space-x-2">
            <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.2s]"></span>
            <span className="inline-block w-3 h-3 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.1s]"></span>
            <span className="inline-block w-3 h-3 bg-indigo-300 rounded-full animate-bounce"></span>
          </div>
          <div className="mt-4 text-sm text-gray-400 animate-fade-in">Loading products...</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center text-gray-500 py-16">
              <svg className="w-16 h-16 mb-4 text-indigo-100" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" fill="#f3f4f6" /><path d="M3 7l9 6 9-6" stroke="#a5b4fc" /></svg>
              <div className="text-lg font-medium mb-1">No products found</div>
              <div className="text-sm text-gray-400">Try adjusting your filters or search terms.</div>
            </div>
          ) : (
            products.map((product, idx) => (
              <div
                key={product._id}
                className="bg-white rounded-xl shadow-md border border-gray-100 hover:border-indigo-300 hover:shadow-xl transition-all duration-200 p-5 flex flex-col items-center min-h-[350px] group relative animate-fade-in"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center bg-indigo-50 rounded-lg mb-3 overflow-hidden">
                  <img
                    src={product.imageUrl || 'https://via.placeholder.com/120x120?text=No+Image'}
                    alt={product.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <h2 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-gray-800 text-center line-clamp-2">
                  {product.title}
                </h2>
                <span className="text-xs uppercase text-indigo-500 font-medium tracking-wide mb-1">
                  {product.category}
                </span>
                <p className="text-gray-600 text-sm line-clamp-3 mb-2 text-center">
                  {product.description}
                </p>
                <div className="flex items-center justify-between w-full mt-auto">
                  <span className="text-indigo-600 font-bold text-lg sm:text-xl">
                    ₹{product.price}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    aria-label={`Add ${product.title} to cart`}
                    disabled={addingId === product._id}
                    className={`flex items-center bg-indigo-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg hover:bg-indigo-700 focus-visible:ring-2 focus-visible:ring-indigo-400 transition text-sm sm:text-base ml-2 shadow-md ${addingId === product._id ? 'opacity-60 cursor-not-allowed' : ''}`}
                  >
                    {addingId === product._id ? (
                      <svg className="w-5 h-5 animate-spin mr-1" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
                    ) : successId === product._id ? (
                      <svg className="w-5 h-5 text-green-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    ) : (
                      <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                    )}
                    {addingId === product._id ? 'Adding...' : successId === product._id ? 'Added!' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ProductList;
