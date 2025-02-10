// import React, { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, Search, ShoppingCart, X } from 'lucide-react';
import logo from '../assets/icons/agripathwaylogo.png'
// import { useSidebar } from "../context/SidebarContext";

// const Navbar = () => {
//   const [showSearch, setShowSearch] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();
//   const menuRef = useRef(null);

//   const { toggleSidebar } = useSidebar()

//   useEffect(() => {
//     if (location.pathname === "/") {
//       setShowSearch(true);
//     } else {
//       setShowSearch(false);
//     }
//   }, [location.pathname]);

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setIsMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleOutsideClick);
//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, []);

//   return (
//     <header className="bg-green-700 shadow-md sticky top-0 z-50">
//       <nav className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-6">


//  {/* Sidebar Toggle Button */}
//  <button className="text-white hover:text-yellow-400 transition duration-300 md:hidden" onClick={toggleSidebar}>
//           <Menu className="w-6 h-6" />
//         </button>


//         {/* Logo */}
//         <div className="text-white text-lg sm:text-2xl flex font-semibold justify-center items-center flex-shrink-0"><img src={logo} className="h-12 w-10 md:w-20"/><span>Agripathway</span></div>

//         {/* Desktop Links */}
//         <div className="hidden lg:flex space-x-6 text-white">
//           <Link to="/" className="hover:text-yellow-400 transition duration-300">
//             Home
//           </Link>
//           <Link to="/products" className="hover:text-yellow-400 transition duration-300">
//             Products
//           </Link>
//           <Link to="/about" className="hover:text-yellow-400 transition duration-300">
//             About
//           </Link>
//         </div>

//         {/* Search Field */}
//         <div
//           className={`absolute top-full left-0 w-full bg-green-700 p-4 transition-all duration-300 lg:relative lg:top-auto lg:left-auto lg:w-auto lg:bg-transparent lg:p-0 lg:flex ${
//             showSearch ? "block" : "hidden"
//           }`}
//         >
//           <div className="flex items-center w-full lg:w-auto">
//             <input
//               type="text"
//               placeholder="Search for products..."
//               className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//             <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-r-md">
//               <Search />
//             </button>
//           </div>
//         </div>

//         {/* Search & Cart Icons */}
//         <div className="flex items-center space-x-4">
//           {/* Search Button */}
//           <button
//             className="text-white hover:text-yellow-400 transition duration-300"
//             onClick={() => setShowSearch((prev) => !prev)}
//           >
//             <Search className="w-6 h-6" />
//           </button>

//           {/* Cart Icon */}
//           <Link to={'/cart'} className="text-white hover:text-yellow-400 transition duration-300">
//             <ShoppingCart className="w-6 h-6" />
//           </Link>

//           {/* Hamburger Icon */}
//           <button
//             className="text-white hover:text-yellow-400 transition duration-300 lg:hidden"
//             onClick={() => setIsMenuOpen((prev) => !prev)}
//           >
//             <Menu className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Offcanvas Menu */}
//         <div
//           ref={menuRef}
//           className={`fixed top-0 right-0 h-full w-64 bg-green-800 text-white transform transition-transform duration-300 ${
//             isMenuOpen ? "translate-x-0" : "translate-x-full"
//           } z-50 lg:hidden`}
//         >
//           <div className="flex justify-between items-center p-4 border-b border-green-600">
//             <span className="text-xl font-bold">Menu</span>
//             <button
//               onClick={() => setIsMenuOpen(false)}
//               className="text-white hover:text-yellow-400 transition"
//             >
//               <X className="w-6 h-6" />
//             </button>
//           </div>
//           <div className="flex flex-col space-y-4 p-4">
//             <Link to="/" className="hover:text-yellow-400 transition duration-300">
//               Home
//             </Link>
//             <Link to="/products" className="hover:text-yellow-400 transition duration-300">
//               Products
//             </Link>
//             <Link to="/about" className="hover:text-yellow-400 transition duration-300">
//               About
//             </Link>
//             <Link
//               to="/login"
//               className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-center transition duration-300"
//             >
//               Login
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, ShoppingCart, User, Search } from "lucide-react"
import MobileSidebar from "./MobileSidebar"

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const sidebarRef = useRef(null)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <>
      <nav className="bg-green-600 z-50 sticky w-full top-0 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and site name */}
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-8 mr-2" src={logo} alt="AgroCommerce Logo" />
              <span className="font-bold text-xl">Agripathway</span>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="hover:bg-green-700 px-3 py-2 rounded-md">
                  Home
                </a>
                <a href="/products" className="hover:bg-green-700 px-3 py-2 rounded-md">
                  Products
                </a>
                <a href="/about" className="hover:bg-green-700 px-3 py-2 rounded-md">
                  About
                </a>
                <a href="/contact" className="hover:bg-green-700 px-3 py-2 rounded-md">
                  Contact
                </a>
              </div>
            </div>

            {/* Search, cart, and login */}
            <div className="hidden md:flex items-center">
              <div className="relative mr-4 hidden lg:block">
                <input
                  type="text"
                  placeholder="Search crops..."
                  className="bg-green-700 text-white placeholder-green-200 rounded-full py-1 px-4 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="absolute right-0 top-0 mt-1 mr-2">
                  <Search className="h-5 w-5 text-green-200" />
                </button>
              </div>
              <a href="/cart" className="p-2 hover:bg-green-700 rounded-full">
                <ShoppingCart className="h-6 w-6" />
              </a>
              <a href="/login" className="p-2 hover:bg-green-700 rounded-full">
                <User className="h-6 w-6" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleSidebar}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile sidebar */}
        <div ref={sidebarRef}>
          <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </div>
      </nav>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  )
}

export default Navbar

