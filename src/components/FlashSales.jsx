import React, { useState, useEffect } from "react"
import { ChevronRight, Zap } from "lucide-react"
import rice from "../assets/images/rice.jpeg";
import tomato from "../assets/images/tomato.jpeg";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const CountdownTimer = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const difference = endTime - new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null
    }

    return (
      <span className="text-2xl font-bold mx-1" key={interval}>
        {timeLeft[interval].toString().padStart(2, "0")}
        <span className="text-xs ml-1">{interval.charAt(0)}</span>
      </span>
    )
  })

  return (
    <div className="text-center my-6">
      {timerComponents.length ? (
        <div className="bg-white text-orange-600 rounded-lg py-3 px-6 inline-block shadow-lg">
          <span className="text-xl font-semibold mr-2">Ends in:</span>
          {timerComponents}
        </div>
      ) : (
        <span className="text-2xl font-bold text-red-600">Sale has ended!</span>
      )}
    </div>
  )
}

const FlashSales = () => {
  const flashSaleItems = [
    { id: 1, name: "Organic Apples", originalPrice: 200000.99, price: 190342.99, image: rice },
    { id: 2, name: "Fresh Carrots", originalPrice: 18939834.99, price: 238984.99, image: tomato },
    { id: 3, name: "Farm Eggs", originalPrice: 48394832233.99, price: 498932.99, image: rice },
    { id: 4, name: "Organic Milk", originalPrice: 4438398.99, price: 983283.99, image: tomato},
  ]

  // Set the end time for the flash sale (e.g., 24 hours from now)
  const endTime = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)

 
  return (
    <section className="my-12 bg-gradient-to-r from-green-100 to-[#daffe8] rounded-3xl overflow-hidden shadow-2xl">
      <div className="bg-white bg-opacity-5 p-8">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <Zap className="h-12 w-12 text-yellow-400 mr-4" />
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              Flash Sales
            </h2>
            <Zap className="h-12 w-12 text-yellow-400 ml-4" />
          </div>
          <div className="flex flex-col sm:flex-row items-center space-x-4">
            <CountdownTimer endTime={endTime} />
            <Link to={'/products?type=flash-sales'} className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-green-50 transition-all duration-300 flex items-center group">
              See All <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
          {flashSaleItems.map((item) => (
            <>
            <ProductCard product={item}/>
            </>
          ))}
        </div>
      </div>
    </section>
  )

}

export default FlashSales

