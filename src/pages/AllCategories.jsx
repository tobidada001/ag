import React from "react"
import { Carrot, Egg, Drumstick, Wheat, Leaf, Tractor } from "lucide-react"
import rice from "../assets/images/rice.jpeg";
import tomato from "../assets/images/tomato.jpeg";
import cocoyam from "../assets/images/cocoyam.jpeg";
import potato from "../assets/images/potato.jpeg";
import pepper from "../assets/images/pepper.jpeg";


const AllCategories = () => {
  const categories = [
    { id: 1, name: "Fruits & Vegetables", icon: rice, color: "bg-red-100 text-red-600" },
    { id: 2, name: "Dairy & Eggs", icon: tomato, color: "bg-yellow-100 text-yellow-600" },
    { id: 3, name: "Meat & Poultry", icon: cocoyam, color: "bg-orange-100 text-orange-600" },
    { id: 4, name: "Grains & Cereals", icon: rice, color: "bg-green-100 text-green-600" },
    { id: 5, name: "Organic Products", icon: pepper, color: "bg-lime-100 text-lime-600" },
    { id: 6, name: "Farm Equipment", icon: potato, color: "bg-blue-100 text-blue-600" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">All Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`${category.color} rounded-lg p-1  text-center cursor-pointer transition-transform duration-300 hover:scale-105`}
          >
            {/* <category.icon className="w-16 h-16 mx-auto mb-4" /> */}
            <img src={category.icon} className="w-full h-32 aspect-auto mx-auto " />
            <h2 className="text-xl font-semibold my-2">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllCategories

