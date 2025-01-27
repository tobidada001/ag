import React, { useState, useEffect } from "react"
import { Zap } from "lucide-react"
import rice from "../assets/images/rice.jpeg";
import tomato from "../assets/images/tomato.jpeg";
import cocoyam from "../assets/images/cocoyam.jpeg";
import potato from "../assets/images/potato.jpeg";
import pepper from "../assets/images/pepper.jpeg";

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
        <div className="bg-white text-red-600 rounded-lg py-3 px-6 inline-block shadow-lg">
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
    { id: 1, name: "Organic Apples", price: 200000.99, discountPrice: 190342.99, image: rice },
    { id: 2, name: "Fresh Carrots", price: 18939834.99, discountPrice: 238984.99, image: cocoyam },
    { id: 3, name: "Farm Eggs", price: 48394832233.99, discountPrice: 498932.99, image: pepper },
    { id: 4, name: "Organic Milk", price: 4438398.99, discountPrice: 983283.99, image: tomato},
  ]

  // Set the end time for the flash sale (e.g., 24 hours from now)
  const endTime = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)

  return (
    <section className="my-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl overflow-hidden shadow-2xl">
      <div className="bg-white bg-opacity-90 p-8">
        <div className="flex items-center justify-center mb-6">
          <Zap className="h-12 w-12 text-yellow-400 mr-4" />
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
            Flash Sales
          </h2>
          <Zap className="h-12 w-12 text-yellow-400 ml-4" />
        </div>
        <CountdownTimer endTime={endTime} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
          {flashSaleItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-48 object-cover" />
                <div className="absolute top-0 right-0 bg-red-600 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">
                  {Math.round(((item.price - item.discountPrice) / item.price) * 100)}% OFF
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                <div className="flex justify-between flex-wrap items-center">
                  <div className="flex flex-wrap">
                    <span className="text-gray-500 line-through">₦{item.price.toFixed(2)}</span>
                    <span className="text-red-600 font-bold ml-2">₦{item.discountPrice.toFixed(2)}</span>
                  </div>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FlashSales

