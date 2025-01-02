import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => (
  <div className="bg-white shadow rounded-md overflow-hidden transition transform hover:scale-105 relative">
    {/* Product Image */}
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-cover"
    />

    {/* Product Details */}
    <div className="p-4">
    <Link to={'/product-detail'}><h3 className="text-xl font-bold text-gray-700">{product.name}</h3></Link>

      <p className="text-lg font-semibold text-green-600 mt-2">{product.price}</p>


      {/* Action Buttons */}
      <div className="mt-4 flex items-center justify-between">
        {/* Add to Cart Button */}
        <button
          className="bg-yellow-400 hover:bg-yellow-500 font-semibold text-gray-800 py-2 px-4 rounded flex items-center gap-2"
          aria-label="Add to cart">
          <ShoppingCart color="#444" />     
          Add to Cart
        </button>

        {/* Wishlist Button */}
        <button
          className="bg-yellow-100 hover:bg-yellow-200 text-yellow-600 p-2 rounded shadow"
          aria-label="Add to wishlist"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);


export default ProductCard;