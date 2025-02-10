"use client"

import { useState, useEffect, useRef } from "react"
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from "lucide-react"
import logo from '../assets/icons/agripathwaylogo.png';
import { Link } from "react-router-dom";


// import { categories } from "../data/categories"

const AnotherHeaderAgain = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const menuRef = useRef(null)

  const categories =  [
    "Fruits & Vegetables",
    "Grains & Cereals",
    "Dairy & Eggs",
    "Meat & Poultry",
    "Fish & Seafood",
    "Herbs & Spices",
    "Farm Equipment",
    "Seeds & Seedlings",
    "Organic Products",
    "Animal Feed",
  ]

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false)
      }
    }

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "visible"
    }

    return () => {
      document.body.style.overflow = "visible"
    }
  }, [isMenuOpen])

  return (
    <header className="bg-green-600 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button className="md:hidden mr-2" onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </button>
            
              <Link to={'/'} className="flex gap-1 items-center">
                <img src={logo} alt="Agripathway Logo" className="h-12 w-auto" />
                <span className="font-medium text-2xl hidden sm:block">Agripathway</span>
                </Link>
            {/* </div> */}
          </div>
          <div className="hidden md:flex flex-grow mx-4">
            <form className="w-full max-w-3xl">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search products, categories, and brands"
                  className="w-full py-2 px-4 pr-10 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button type="submit" className="absolute right-0 top-0 mt-2 mr-3">
                  <Search className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </form>
          </div>
          <div className="flex items-center space-x-4">
            <Link to={'/cart'} className="flex items-center">
              <ShoppingCart className="h-6 w-6 mr-1" />
              <span className="hidden md:inline">Cart</span>
            </Link>
            <Link to={'/login'} className="flex items-center">
              <User className="h-6 w-6 mr-1" />
              <span className="hidden md:inline">Account</span>
            </Link>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <form method="GET">
            <div className="relative">
              <input
                type="search" name="search"
                placeholder="Search products, categories, and brands"
                className="w-full py-2 px-4 pr-10 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button type="submit" className="absolute right-0 top-0 mt-2 mr-3">
                <Search className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Off-canvas menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 bottom-0 w-64 bg-green-700 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4" aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
          <nav className="mt-8">
            <ul className="space-y-4">
              <li>
                <Link to={'/'} className="block py-2 hover:text-green-200">
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="flex items-center justify-between w-full py-2 hover:text-green-200"
                >
                  Categories
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isCategoryOpen ? "transform rotate-180" : ""}`}
                  />
                </button>
                {isCategoryOpen && (
                  <ul className="pl-4 mt-2 space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link to={`/products?category=${category}`} className="block py-1 text-green-200 hover:text-white">
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link to={'/products'} className="block py-2 hover:text-green-200">
                  Deals
                </Link>
              </li>
              <li>
                <Link to={'/login'} className="block py-2 hover:text-green-200">
                  Sell on Agripathway
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default AnotherHeaderAgain;

