import React from "react"
import rice from "../assets/images/rice.jpeg";
import tomato from "../assets/images/tomato.jpeg";
import cocoyam from "../assets/images/cocoyam.jpeg";
import potato from "../assets/images/potato.jpeg";
import pepper from "../assets/images/pepper.jpeg";
import { ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
const SponsoredProducts = () => {
  const sponsoredItems = [
    { id: 1, name: "Premium Fertilizer", brand: "GreenGrow", image: rice, price: 20000 },
    { id: 2, name: "Organic Pesticide", brand: "NatureSafe", image: potato , price: 18500 },
    { id: 3, name: "Smart Irrigation System", brand: "AquaTech", image: pepper, price: 185400 },
    { id: 3, name: "Olasco Tractors", brand: "BioTechies", image: cocoyam, price: 6000000 },
  ]

  return (
    <section className="my-8 mt-20">
      <div className="mt-10 mb-8 flex gap-y-5 flex-col sm:flex-row items-center justify-between ">
        <h2 className="text-3xl text-center  md:text-4xl font-bold text-gray-800">Sponsored Products</h2>
        
         <button className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold shadow-sm hover:bg-green-50 transition-all duration-300 flex items-center group">
            See All <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
     
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {sponsoredItems.map((item) => (
         
          <ProductCard product={item} isSponsored={true} />
         
        ))}
      </div>
    </section>
  )
}

export default SponsoredProducts

