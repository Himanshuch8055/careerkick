import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-10 pb-6 px-4 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & Social */}
        <div>
          <span className="text-2xl font-black text-indigo-500">ShopNow</span>
          <p className="mt-2 mb-4 text-gray-400 text-sm">Your trusted destination for modern, affordable shopping.</p>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-indigo-400"><FaFacebook size={22} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-indigo-400"><FaInstagram size={22} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-indigo-400"><FaTwitter size={22} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-indigo-400"><FaLinkedin size={22} /></a>
          </div>
        </div>
        {/* Links */}
        <div>
          <h3 className="font-bold text-lg mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-indigo-400">Home</a></li>
            <li><a href="/products" className="hover:text-indigo-400">Products</a></li>
            <li><a href="/cart" className="hover:text-indigo-400">Cart</a></li>
            <li><a href="/about" className="hover:text-indigo-400">About Us</a></li>
            <li><a href="/contact" className="hover:text-indigo-400">Contact</a></li>
          </ul>
        </div>
        {/* Customer Service */}
        <div>
          <h3 className="font-bold text-lg mb-3 text-white">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-indigo-400">FAQ</a></li>
            <li><a href="#" className="hover:text-indigo-400">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-indigo-400">Order Tracking</a></li>
            <li><a href="#" className="hover:text-indigo-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-indigo-400">Terms & Conditions</a></li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-3 text-white">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-indigo-400" /> 123 E-Shop Lane, New Delhi</li>
            <li className="flex items-center gap-2"><FaPhoneAlt className="text-indigo-400" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><FaEnvelope className="text-indigo-400" /> support@shopnow.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} ShopNow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
