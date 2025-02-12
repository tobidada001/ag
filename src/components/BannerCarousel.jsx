"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import bgimage from '../assets/images/countryside-woman-holding-plant-leaves.jpg';
import rice from "../assets/images/rice.jpeg";
import tomato from "../assets/images/tomato.jpeg";
import guava from "../assets/images/guava.png";
import vegetables from "../assets/images/vegetables.png";



const banners = [
  {
    id: 1,
    title: "Fresh from Farm to Table",
    description: "Discover the best agricultural products for your needs",
    buttonText: "Shop Now",
    buttonLink: "/products",
    image: bgimage,
  },
  {
    id: 2,
    title: "Organic Vegetables",
    description: "100% Organic and Pesticide-free Vegetables",
    buttonText: "Explore Veggies",
    buttonLink: "/products",
    image: vegetables,
  },
  {
    id: 3,
    title: "Premium Fruits",
    description: "Juicy and Fresh Fruits Delivered to Your Doorstep",
    buttonText: "Browse Fruits",
    buttonLink: "/products",
    image: guava,
  },
  {
    id: 4,
    title: "Farm Fresh Dairy",
    description: "Pure and Nutritious Dairy Products",
    buttonText: "Discover Dairy",
    buttonLink: "/products",
    image: tomato,
  },
  {
    id: 5,
    title: "Sustainable Farming",
    description: "Supporting Local Farmers and Sustainable Practices",
    buttonText: "Learn More",
    buttonLink: "/products",
    image: rice,
  },
]

const BannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(2)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000) // Auto-advance every 5 seconds
    return () => clearInterval(interval)
  }, [nextSlide]) // Added nextSlide to dependencies

  return (
    <div className="relative w-full h-96  overflow-hidden rounded-lg shadow-xl">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${banner.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

        {/* Only show this when the banner has some text on it. */}
            {(banner.title || banner.description) && (<div className="absolute inset-0 bg-black bg-opacity-40" />) }


          <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">{banner.title}</h2>
            <p className="text-xl mb-6 animate-fadeInUp animation-delay-200">{banner.description}</p>
            <a
              href={banner.buttonLink}
              className="bg-white text-green-600 font-semibold py-2 px-6 rounded-full hover:bg-green-600 hover:text-white transition duration-300 animate-fadeInUp animation-delay-400"
            >
              {banner.buttonText}
            </a>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition duration-300"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition duration-300"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default BannerCarousel

