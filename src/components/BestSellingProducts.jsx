import React from "react"
import rice from "../assets/images/rice.jpeg";
import tomato from "../assets/images/tomato.jpeg";
import cocoyam from "../assets/images/cocoyam.jpeg";
import potato from "../assets/images/potato.jpeg";
import guava from "../assets/images/guava.png";
import vegetables from "../assets/images/vegetables.png";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

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
      <div className="mt-10 mb-8 flex gap-y-5 flex-col sm:flex-row items-center justify-between ">
        <h2 className="text-3xl text-center  md:text-4xl font-bold text-gray-800">Best Selling Products</h2>
        
         <Link to={'/products?type=best-selling'} className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold shadow-sm hover:bg-green-50 transition-all duration-300 flex items-center group">
            See All <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
     
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {bestSellers.map((item) => (
          <>
            <ProductCard key={item.id} product={item} isBestSelling={true} />
          </>
        ))}
      </div>
    </section>
  )
}

export default BestSellingProducts

