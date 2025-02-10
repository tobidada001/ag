"use client"

import { useState } from "react"
import { Package, Truck, CheckCircle, Search } from "lucide-react"

const TrackingProgress = ({ steps }) => {
  return (
    <div className="flex space-x-4 overflow-x-auto py-4">
      {steps.map((step) => (
        <div key={step.id} className="flex items-center flex-shrink-0">
          {step.completed ? (
            <CheckCircle className="h-6 w-6 text-green-500" />
          ) : (
            <Package className="h-6 w-6 text-gray-400" />
          )}
          <div className="ml-2">
            <p className="text-gray-700 font-medium">{step.title}</p>
            {step.date && <p className="text-gray-500 text-sm">{step.date}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}

const OrderItems = ({ items }) => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Order Items</h3>
      <ul className="divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.id} className="py-3 flex justify-between items-center">
            <div>
              <span className="font-medium">{item.name}</span>
              <span className="text-gray-600 ml-2">x {item.quantity}</span>
            </div>
            <span className="font-semibold">₦{item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-right">
        <span className="font-bold text-lg">
          Total: ₦{items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
        </span>
      </div>
    </div>
  )
}

const OrderTracking = () => {
  const [trackingId, setTrackingId] = useState("")
  const [order, setOrder] = useState(null)
  const [error, setError] = useState("")

  const handleTrackOrder = (e) => {
    e.preventDefault()
    setError("")
    
    setTimeout(() => {
      if (trackingId === "ORD-12345") {
        setOrder({
          id: "ORD-12345",
          status: "In Transit",
          estimatedDelivery: "2023-06-15",
          currentLocation: "Lagos Distribution Center",
          items: [
            { id: 1, name: "Organic Apples", quantity: 2, price: 190342.99 },
            { id: 2, name: "Fresh Carrots", quantity: 1, price: 238984.99 },
          ],
          trackingSteps: [
            { id: 1, title: "Order Placed", date: "2023-06-10", completed: true },
            { id: 2, title: "Processing", date: "2023-06-11", completed: true },
            { id: 3, title: "In Transit", date: "2023-06-12", completed: true },
            { id: 4, title: "Out for Delivery", date: null, completed: false },
            { id: 5, title: "Delivered", date: null, completed: false },
          ],
        })
      } else {
        setError("No order found with this tracking ID. Please check and try again.")
        setOrder(null)
      }
    }, 1000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Order Tracking</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <form onSubmit={handleTrackOrder} className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="Enter your tracking ID"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
              >
                <Search className="h-5 w-5 mr-2" />
                Track Order
              </button>
            </div>
          </form>

          {error && <p className="text-red-600 mb-4">{error}</p>}

          {order && (
            <>
              <div className="flex flex-wrap justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-semibold">Order #{order.id}</h2>
                  <p className="text-gray-600">Estimated Delivery: {order.estimatedDelivery}</p>
                </div>
                <div className="mt-4 sm:mt-0">
                  <span className="bg-blue-100 text-blue-800 font-medium px-3 py-1 rounded-full text-sm">
                    {order.status}
                  </span>
                </div>
              </div>
              <TrackingProgress steps={order.trackingSteps} />
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Current Location</h3>
                <div className="bg-gray-100 p-4 rounded-lg flex items-center">
                  <Truck className="h-6 w-6 text-gray-600 mr-3" />
                  <span>{order.currentLocation}</span>
                </div>
              </div>
              <OrderItems items={order.items} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default OrderTracking

