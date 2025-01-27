import React, { useState } from "react"
import { Package, Truck, CheckCircle } from "lucide-react"

const OrderTracking = () => {
  const [orderNumber, setOrderNumber] = useState("")
  const [orderStatus, setOrderStatus] = useState(null)

  const mockOrderStatuses = {
    12345: { status: "In Transit", eta: "2023-06-15" },
    67890: { status: "Delivered", deliveryDate: "2023-06-10" },
    11111: { status: "Processing", estimatedShipDate: "2023-06-14" },
  }

  const handleTrack = (e) => {
    e.preventDefault()
    setOrderStatus(mockOrderStatuses[orderNumber] || { status: "Not Found" })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Track Your Order</h1>
      <form onSubmit={handleTrack} className="mb-8">
        <div className="flex items-center">
          <input
            type="text"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            placeholder="Enter your order number"
            className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-r-md hover:bg-green-600 transition-colors duration-300"
          >
            Track Order
          </button>
        </div>
      </form>

      {orderStatus && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Order Status: {orderStatus.status}</h2>
          {orderStatus.status === "In Transit" && (
            <div className="flex items-center text-blue-600">
              <Truck className="w-6 h-6 mr-2" />
              <p>Your order is on its way! Estimated delivery: {orderStatus.eta}</p>
            </div>
          )}
          {orderStatus.status === "Delivered" && (
            <div className="flex items-center text-green-600">
              <CheckCircle className="w-6 h-6 mr-2" />
              <p>Your order was delivered on {orderStatus.deliveryDate}</p>
            </div>
          )}
          {orderStatus.status === "Processing" && (
            <div className="flex items-center text-yellow-600">
              <Package className="w-6 h-6 mr-2" />
              <p>Your order is being processed. Estimated ship date: {orderStatus.estimatedShipDate}</p>
            </div>
          )}
          {orderStatus.status === "Not Found" && (
            <p className="text-red-600">
              Sorry, we couldn't find an order with that number. Please check and try again.
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default OrderTracking

