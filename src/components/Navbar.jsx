import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Search, ShoppingCart, X } from 'lucide-react';
import logo from '../assets/icons/agripathwaylogo.png'

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    if (location.pathname === "/") {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header className="bg-green-700 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-6">
        {/* Logo */}
        <div className="text-white text-lg sm:text-2xl flex font-semibold justify-center items-center flex-shrink-0"><img src={logo} className="h-12 w-10 md:w-20"/><span>Agripathway</span></div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-6 text-white">
          <Link to="/" className="hover:text-yellow-400 transition duration-300">
            Home
          </Link>
          <Link to="/products" className="hover:text-yellow-400 transition duration-300">
            Products
          </Link>
          <Link to="/about" className="hover:text-yellow-400 transition duration-300">
            About
          </Link>
        </div>

        {/* Search Field */}
        <div
          className={`absolute top-full left-0 w-full bg-green-700 p-4 transition-all duration-300 lg:relative lg:top-auto lg:left-auto lg:w-auto lg:bg-transparent lg:p-0 lg:flex ${
            showSearch ? "block" : "hidden"
          }`}
        >
          <div className="flex items-center w-full lg:w-auto">
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-r-md">
              <Search />
            </button>
          </div>
        </div>

        {/* Search & Cart Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Button */}
          <button
            className="text-white hover:text-yellow-400 transition duration-300"
            onClick={() => setShowSearch((prev) => !prev)}
          >
            <Search className="w-6 h-6" />
          </button>

          {/* Cart Icon */}
          <Link to={'/cart'} className="text-white hover:text-yellow-400 transition duration-300">
            <ShoppingCart className="w-6 h-6" />
          </Link>

          {/* Hamburger Icon */}
          <button
            className="text-white hover:text-yellow-400 transition duration-300 lg:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Offcanvas Menu */}
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 h-full w-64 bg-green-800 text-white transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } z-50 lg:hidden`}
        >
          <div className="flex justify-between items-center p-4 border-b border-green-600">
            <span className="text-xl font-bold">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-yellow-400 transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col space-y-4 p-4">
            <Link to="/" className="hover:text-yellow-400 transition duration-300">
              Home
            </Link>
            <Link to="/products" className="hover:text-yellow-400 transition duration-300">
              Products
            </Link>
            <Link to="/about" className="hover:text-yellow-400 transition duration-300">
              About
            </Link>
            <Link
              to="/login"
              className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-center transition duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

