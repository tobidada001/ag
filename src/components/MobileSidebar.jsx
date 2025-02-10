import { ShoppingCart, User, Search, X } from "lucide-react"
import {Link} from "react-router-dom"

const MobileSidebar = ({ isOpen, onClose }) => {
  const cropCategories = ["Vegetables", "Fruits", "Grains", "Herbs", "Nuts", "Flowers"]

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-green-800 overflow-y-auto transition duration-300 ease-in-out transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:hidden`}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Menu</h2>
          <button onClick={onClose} className="text-white">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search crops..."
            className="w-full bg-green-700 text-white placeholder-green-200 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="absolute right-0 top-0 mt-2 mr-3">
            <Search className="h-5 w-5 text-green-200" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="space-y-2 mb-6">
          <Link to="/" className="block text-white hover:bg-green-700 px-3 py-2 rounded-md">
            Home
          </Link>
          <Link to="/products" className="block text-white hover:bg-green-700 px-3 py-2 rounded-md">
            Products
          </Link>
          <Link to="/about" className="block text-white hover:bg-green-700 px-3 py-2 rounded-md">
            About
          </Link>
          <Link to="/contact" className="block text-white hover:bg-green-700 px-3 py-2 rounded-md">
            Contact
          </Link>
        </div>

        {/* Crop Categories */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Crop Categories</h3>
          <ul className="space-y-2">
            {cropCategories.map((category, index) => (
              <li key={index}>
                <Link to={`/category/${category.toLowerCase()}`} className="block text-green-200 hover:text-white">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Cart and Login */}
        <div className="flex justify-around">
          <Link to="/cart" className="text-white hover:bg-green-700 p-2 rounded-full">
            <ShoppingCart className="h-6 w-6" />
          </Link>
          <Link to="/login" className="text-white hover:bg-green-700 p-2 rounded-full">
            <User className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MobileSidebar

