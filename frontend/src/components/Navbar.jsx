import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import {
  Menu,
  X,
  ShoppingCart,
  User,
  Store,
  Info,
  PhoneCall,
  Boxes,
  ChevronDown,
  LogOut,
  Settings,
  Search,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const { cartItems } = useCart();
  const cartItemCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleUserMenu = () => setUserMenu(!userMenu);

  const navLinks = [
    {
      name: "Products",
      icon: <Boxes className="w-4 h-4" />,
      href: "/products",
    },
    { name: "About Us", icon: <Info className="w-4 h-4" />, href: "/about" },
    {
      name: "Contact",
      icon: <PhoneCall className="w-4 h-4" />,
      href: "/contact",
    },
  ];

  return (
  <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 py-1 flex justify-between items-center min-h-[48px] w-full">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2 text-indigo-600 font-extrabold text-xl tracking-tight select-none">
        <Store className="w-6 h-6" />
        <span className="font-black">ShopNow</span>
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 items-center text-gray-700 font-medium">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 focus-visible:ring-2 focus-visible:ring-indigo-400 transition-all duration-150"
            tabIndex={0}
          >
            {link.icon} {link.name}
          </a>
        ))}
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-3 text-gray-700 relative">
        {/* Cart */}
        <div className="relative group">
          <a href="/cart" aria-label="Cart" className="hover:text-indigo-600 focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-full p-1 transition">
            <ShoppingCart className="w-6 h-6" />
            {cartItemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-indigo-500 text-xs text-white font-bold rounded-full px-1.5 py-0.5 shadow"
              >
                {cartItemCount}
              </motion.span>
            )}
          </a>
        </div>

        {/* User Dropdown */}
        <div className="relative">
          <button
            onClick={toggleUserMenu}
            aria-haspopup="true"
            aria-expanded={userMenu}
            aria-label="User menu"
            className="flex items-center gap-1 rounded-full p-1 hover:bg-indigo-50 hover:text-indigo-600 focus-visible:ring-2 focus-visible:ring-indigo-400 transition"
          >
            <User className="w-6 h-6" />
            <ChevronDown className="w-4 h-4" />
          </button>

          <AnimatePresence>
            {userMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 bg-white text-gray-800 rounded-xl shadow-2xl w-44 py-2 border border-gray-100 z-50"
                role="menu"
              >
                <a
                  href="/account"
                  className="block px-4 py-2 hover:bg-indigo-50 rounded-lg flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-indigo-400"
                  role="menuitem"
                >
                  <User className="w-4 h-4" /> Profile
                </a>
                <a
                  href="/settings"
                  className="block px-4 py-2 hover:bg-indigo-50 rounded-lg flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-indigo-400"
                  role="menuitem"
                >
                  <Settings className="w-4 h-4" /> Settings
                </a>
                <a
                  href="/logout"
                  className="block px-4 py-2 hover:bg-red-50 rounded-lg flex items-center gap-2 text-red-600 focus-visible:ring-2 focus-visible:ring-red-400"
                  role="menuitem"
                >
                  <LogOut className="w-4 h-4" /> Logout
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none rounded-full hover:bg-indigo-50 p-1" aria-label="Open menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-white border-t border-gray-100 text-gray-700 font-medium px-4 pb-2 shadow-lg"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 px-2 rounded-lg flex items-center gap-2 hover:bg-indigo-50 hover:text-indigo-600 focus-visible:ring-2 focus-visible:ring-indigo-400 transition"
              tabIndex={0}
            >
              {link.icon} {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </nav>
);
};

export default Navbar;
