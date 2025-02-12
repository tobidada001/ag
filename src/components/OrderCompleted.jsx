import { CheckCircle, Truck, Calendar, CreditCard } from "lucide-react"

const OrderCompleted = () => {
  // Mock order data (replace with actual data from your order system)
  const orderDetails = {
    orderNumber: "12345",
    date: "May 15, 2023",
    total: "250.00",
    paymentMethod: "Credit Card (**** 1234)",
    shippingAddress: "123 Farm Lane, Harvest City, AG 12345",
    items: [
      { name: "Organic Tomatoes", quantity: 2, price: "10.00" },
      { name: "Fresh Eggs (Dozen)", quantity: 1, price: "5.00" },
      { name: "Artisanal Cheese", quantity: 1, price: "15.00" },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-green-600 px-4 py-8 text-white text-center">
            <CheckCircle className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-3xl font-bold">Order Confirmed!</h1>
            <p className="mt-2">Thank you for your purchase</p>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-sm text-gray-600">Order Number</p>
                <p className="text-lg font-semibold">{orderDetails.orderNumber}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Order Date</p>
                <p className="text-lg font-semibold">{orderDetails.date}</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                {orderDetails.items.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span>
                      {item.quantity}x {item.name}
                    </span>
                    <span>₦{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between font-semibold">
                <span>Total</span>
                <span>₦{orderDetails.total}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div className="flex items-center">
                <Truck className="w-5 h-5 mr-3 text-green-600" />
                <div>
                  <p className="font-semibold">Shipping Address</p>
                  <p className="text-sm text-gray-600">{orderDetails.shippingAddress}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-3 text-green-600" />
                <div>
                  <p className="font-semibold">Estimated Delivery Date</p>
                  <p className="text-sm text-gray-600">May 20, 2023</p>
                </div>
              </div>
              {/* <div className="flex items-center">
                <CreditCard className="w-5 h-5 mr-3 text-green-600" />
                <div>
                  <p className="font-semibold">Payment Method</p>
                  <p className="text-sm text-gray-600">{orderDetails.paymentMethod}</p>
                </div>
              </div> */}
            </div>
          </div>

          <div className="bg-gray-50 px-6 py-4">
            <p className="text-center text-gray-600 text-sm">
              Need help?{" "}
              <a href="#" className="text-green-600 hover:underline">
                Contact our support team
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="/" className="text-green-600 hover:underline font-semibold">
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
  )
}

export default OrderCompleted

