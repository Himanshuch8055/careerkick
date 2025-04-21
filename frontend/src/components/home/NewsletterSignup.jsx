import React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";

const NewsletterSignup = () => (
  <section className="mb-6 md:mb-12 max-w-2xl mx-auto">
    <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between shadow-lg gap-6">
      <div className="flex items-center gap-3 mb-4 sm:mb-0">
        <FaEnvelopeOpenText className="text-white text-3xl" />
        <span className="text-white text-lg font-semibold">Get exclusive offers & updates</span>
      </div>
      <form className="flex w-full sm:w-auto gap-2">
        <input type="email" placeholder="Your email address" className="rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-indigo-300 w-full sm:w-64" />
        <button type="submit" className="bg-white text-indigo-600 font-bold px-6 py-2 rounded-lg hover:bg-indigo-50 transition">Subscribe</button>
      </form>
    </div>
  </section>
);

export default NewsletterSignup;
