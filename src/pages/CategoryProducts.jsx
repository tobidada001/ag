import React, { useState } from "react"
import { Star, ShoppingCart } from "lucide-react"
import rice from "../assets/images/rice.jpeg";
import tomato from "../assets/images/tomato.jpeg";
import cocoyam from "../assets/images/cocoyam.jpeg";
import potato from "../assets/images/potato.jpeg";
import pepper from "../assets/images/pepper.jpeg";
import vegetables from "../assets/images/vegetables.png";
import guava from "../assets/images/guava.png";

const CategoryProducts = () => {
  const [category, setCategory] = useState("Fruits & Vegetables")
  const products = [
    { id: 1, name: "Organic Apples", price: 2500.99, rating: 4.5, image: rice },
    { id: 2, name: "Fresh Carrots", price: 1800.99, rating: 4.2, image: guava },
    { id: 3, name: "Ripe Bananas", price: 19000.49, rating: 4.7, image: pepper },
    { id: 4, name: "Organic Spinach", price: 3700.99, rating: 4.4, image: vegetables},
    { id: 5, name: "Red Tomatoes", price: 2540.49, rating: 4.6, image: tomato },
    { id: 6, name: "Green Bell Peppers", price: 44001.79, rating: 4.3, image: pepper },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">{category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h2>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-green-600">₦{product.price.toFixed(2)}</span>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-600">{product.rating}</span>
                </div>
              </div>
              <button className="w-full bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition-colors duration-300 flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryProducts

