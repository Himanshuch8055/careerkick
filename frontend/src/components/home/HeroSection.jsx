import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => (
  <section className="mb-14 md:mb-20 flex flex-col md:flex-row items-center justify-between gap-10 bg-gradient-to-r from-indigo-50 via-white to-indigo-100 rounded-3xl p-6 md:p-12 shadow-lg">
    <div className="flex-1 text-center md:text-left">
      <motion.h1 initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}} transition={{duration: 0.7}} className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-4">
        Elevate Your Shopping <span className="text-indigo-600">Experience</span>
      </motion.h1>
      <motion.p initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.2, duration: 0.7}} className="text-gray-600 text-lg sm:text-xl md:text-2xl max-w-xl mb-6">
        Discover trending products, exclusive deals, and a seamless journey from cart to doorstep. Shop smart. Shop modern. ShopNow.
      </motion.p>
      <a href="/products" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition text-lg">
        Shop Now <FaArrowRight />
      </a>
    </div>
    <motion.div initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.8}} className="flex-1 flex justify-center">
      <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80" alt="Trending Product" className="rounded-2xl shadow-xl w-full max-w-xs md:max-w-sm lg:max-w-md object-cover" />
    </motion.div>
  </section>
);

export default HeroSection;
