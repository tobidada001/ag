import React from "react"
import rice from "../assets/images/rice.jpeg";
import tomato from "../assets/images/tomato.jpeg";
import cocoyam from "../assets/images/cocoyam.jpeg";
import potato from "../assets/images/potato.jpeg";
import pepper from "../assets/images/pepper.jpeg";
const SponsoredProducts = () => {
  const sponsoredItems = [
    { id: 1, name: "Premium Fertilizer", brand: "GreenGrow", image: rice },
    { id: 2, name: "Organic Pesticide", brand: "NatureSafe", image: potato },
    { id: 3, name: "Smart Irrigation System", brand: "AquaTech", image: pepper},
    { id: 3, name: "Olasco Tractors", brand: "BioTechies", image: cocoyam},
  ]

  return (
    <section className="my-8">
      <h2 className="text-3xl text-center mt-16 mb-10 md:text-4xl font-bold text-gray-800">Sponsored Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {sponsoredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-2">by {item.brand}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SponsoredProducts

