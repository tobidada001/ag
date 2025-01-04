import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-green-600 text-white fixed top-0 w-full z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="font-bold text-xl">AgriPathway</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.href}
                className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Cart, User Icons, and Login Button */}
          <div className="flex items-center absolute md:relative right-0 mr-12 md:space-x-4">
            <Link to={"/cart"} className="p-2 hover:bg-green-700 rounded-full">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link to={"/account"} className="p-2 hover:bg-green-700 rounded-full">
              <User className="h-6 w-6" />
            </Link>
            <Link to={"/login"} className="hover:bg-green-700 hidden md:block px-3 py-2 rounded-md text-sm font-medium">
              Login
            </Link>
          </div>

          


          {/* Mobile menu button */}
          <div className="md:hidden">

            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-green-700 focus:outline-none"
              aria-expanded={isOpen}
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




  {/* Search Bar */}
          <div className='md:hidden block mb-2'>
              <form>
                <input type='search' className='rounded-md outline-none text-sm text-black w-full' placeholder='Search product or category' />
              </form>
            </div>





      </div>

      {/* Off-canvas Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 md:hidden ${isOpen ? '' : 'pointer-events-none'}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Background overlay */}
        <div 
          className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
            isOpen ? 'opacity-25' : 'opacity-0 pointer-events-none'
          }`} 
          aria-hidden="true" 
          onClick={toggleMenu}
        ></div>
        
        {/* Off-canvas menu */}
        <nav 
          className={`fixed inset-y-0 right-0 max-w-xs w-full bg-green-600 shadow-xl overflow-y-auto transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`} 
          tabIndex="0"
        >
          <div className="px-4 pt-5 pb-3 space-y-1">
            <div className="flex items-center justify-between">
              <div className="font-bold text-xl">AgriPathway</div>
              <button
                onClick={toggleMenu}
                className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to={"/login"}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700"
              onClick={toggleMenu}
            >
              Login
            </Link>
            <Link
              to={"/cart"}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700"
              onClick={toggleMenu}
            >
              Cart
            </Link>
            <Link
              to={"/account"}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700"
              onClick={toggleMenu}
            >
              Your Account
            </Link>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;

