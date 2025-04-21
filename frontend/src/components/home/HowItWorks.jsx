import React from "react";
import { FaSearch, FaCartPlus, FaCreditCard } from "react-icons/fa";

const steps = [
  { icon: <FaSearch />, title: "1. Browse", desc: "Explore our wide range of products" },
  { icon: <FaCartPlus />, title: "2. Add to Cart", desc: "Select your favorites & add to cart" },
  { icon: <FaCreditCard />, title: "3. Checkout", desc: "Easy & secure payment process" },
];

const HowItWorks = () => (
  <section className="mb-12">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">How It Works</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {steps.map((step) => (
        <div key={step.title} className="flex flex-col items-center">
          <span className="bg-indigo-50 text-indigo-600 rounded-full p-4 mb-2 text-2xl">{step.icon}</span>
          <span className="font-semibold text-gray-700">{step.title}</span>
          <span className="text-gray-500 text-sm">{step.desc}</span>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
