import { useState, useEffect } from "react"
import { Clock, Star, TrendingUp, Zap } from "lucide-react"

export default function ProductListTopBanner({ listing_type }) {
  const [timeLeft, setTimeLeft] = useState(3600) // 1 hour in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  const renderBanner = () => {
    switch (listing_type) {
      case "flash_sales":
        return (
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg shadow-sm p-3 mb-1">
            <h2 className="text-2xl font-bold text-white mb-2">Flash Sales!</h2>
            <div className="flex md:justify-between items-start md:items-center md:flex-row flex-col">
              <div>
                <p className="text-white mb-2">Don't miss out on these amazing deals!</p>
                <p className="text-xl font-semibold text-white">Ends in: {formatTime(timeLeft)}</p>
              </div>
              <button className="bg-white text-orange-500 px-6 py-2 rounded-full font-semibold hover:bg-orange-100 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        )
      case "sponsored_products":
        return (
          <div className="bg-blue-100 border-l-4 border-blue-500 rounded-lg shadow-sm p-3 mb-1">
            <div className="flex items-center">
              <Zap className="text-blue-500 mr-2" />
              <h2 className="text-lg font-semibold text-blue-700">Sponsored Products</h2>
            </div>
            <p className="text-blue-600 mt-1">Handpicked selections from our trusted partners</p>
          </div>
        )
      case "best_selling":
        return (
          <div className="bg-green-100 border-l-4 border-green-500 rounded-lg shadow-sm p-3 mb-1">
            <div className="flex items-center">
              <TrendingUp className="text-green-500 mr-2" />
              <h2 className="text-lg font-semibold text-green-700">Best Selling Products</h2>
            </div>
            <p className="text-green-600 mt-1">Our customers' favorite picks</p>
          </div>
        )
      case "featured_products":
        return (
          <div className="bg-purple-100 border-l-4 border-purple-500 rounded-lg shadow-sm p-3 mb-1">
            <div className="flex items-center">
              <Star className="text-purple-500 mr-2" />
              <h2 className="text-lg font-semibold text-purple-700">Featured Products</h2>
            </div>
            <p className="text-purple-600 mt-1">Discover our curated selection of top products</p>
          </div>
        )
      default:
        return (
          <div className="bg-gray-100 border-l-4 border-gray-500 rounded-lg shadow-sm p-3 mb-1">
            <div className="flex items-center">
              <Clock className="text-gray-500 mr-2" />
              <h2 className="text-lg font-semibold text-gray-700">Product Listings</h2>
            </div>
            <p className="text-gray-600 mt-1">Explore our wide range of products</p>
          </div>
        )
    }
  }

  return renderBanner()
}

