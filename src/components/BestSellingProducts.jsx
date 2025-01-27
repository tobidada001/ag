import React from "react"
import rice from "../assets/images/rice.jpeg";
import tomato from "../assets/images/tomato.jpeg";
import cocoyam from "../assets/images/cocoyam.jpeg";
import potato from "../assets/images/potato.jpeg";
import guava from "../assets/images/guava.png";
import vegetables from "../assets/images/vegetables.png";

const BestSellingProducts = () => {
  const bestSellers = [
    { id: 1, name: "Organic Tomatoes", price: 300238.99, rating: 4.8, image: tomato },
    { id: 2, name: "Fresh Spinach", price: 228731.49, rating: 4.7, image: vegetables },
    { id: 3, name: "Free-Range Chicken", price: 80000.99, rating: 4.9, image: rice},
    { id: 4, name: "Grass-Fed Beef", price: 12600.99, rating: 4.8, image: cocoyam },
    { id: 5, name: "Organic Honey", price: 6900.99, rating: 4.7, image: potato},
    { id: 6, name: "Fresh Strawberries", price: 14644.99, rating: 4.6, image: guava },
  ]

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Best Selling Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {bestSellers.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-bold">₦{item.price.toFixed(2)}</span>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span className="text-gray-600">{item.rating.toFixed(1)}</span>
                </div>
              </div>
              <button className="mt-3 w-full bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BestSellingProducts

