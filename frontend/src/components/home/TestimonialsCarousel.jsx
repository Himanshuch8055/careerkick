import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const TestimonialsCarousel = ({ testimonials }) => (
  <section className="mb-14">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">What Our Customers Say</h2>
    <div className="relative max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <motion.div key={t.name} whileHover={{scale:1.03}} className="bg-white/90 rounded-xl shadow-lg p-6 flex flex-col items-center border border-gray-100 hover:border-indigo-300">
            <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mb-3 border-4 border-indigo-100 object-cover" />
            <span className="text-indigo-500 mb-2">
              {[...Array(5)].map((_, i) => <FaStar key={i} className="inline" />)}
            </span>
            <p className="text-gray-600 text-center mb-2">“{t.text}”</p>
            <span className="text-indigo-700 font-semibold">— {t.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsCarousel;
