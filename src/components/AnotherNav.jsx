'use client'

import { useState } from 'react'

import { Menu, X, Search, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

const AnotherNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to={"/"} className="flex items-center">
              <img className="h-8 w-8 mr-2" src="/placeholder.svg?height=32&width=32" alt="Agrocommerce Logo" />
              <span className="font-bold text-xl">AgroMart</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to={"/"} className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to={"/products"} className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">Products</Link>
              <Link to={"/farmers"} className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">Farmers</Link>
              <Link to={"/about"} className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to={"/contact"} className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-xs ml-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-green-700 text-white rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="absolute right-0 top-0 mt-2 mr-3">
                <Search className="h-5 w-5 text-green-300" />
              </button>
            </div>
          </div>

          {/* Shopping Cart Icon */}
          <div className="hidden md:block ml-4">
            <button className="flex items-center hover:bg-green-700 px-3 py-2 rounded-md">
              <ShoppingCart className="h-5 w-5" />
              <span className="ml-1">Cart</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-green-200 hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link href="/products" className="hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium">Products</Link>
          <Link href="/farmers" className="hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium">Farmers</Link>
          <Link href="/about" className="hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium">About</Link>
          <Link href="/contact" className="hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
        </div>
        <div className="px-2 pt-2 pb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-green-700 text-white rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="absolute right-0 top-0 mt-2 mr-3">
              <Search className="h-5 w-5 text-green-300" />
            </button>
          </div>
        </div>
        <div className="px-2 pt-2 pb-3">
          <button className="flex items-center hover:bg-green-700 px-3 py-2 rounded-md w-full">
            <ShoppingCart className="h-5 w-5" />
            <span className="ml-1">Cart</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default AnotherNav

