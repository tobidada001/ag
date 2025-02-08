import { Link, useParams } from "react-router-dom"
import { ChevronLeft, Truck, Calendar, CreditCard, Package } from "lucide-react"

const OrderDetails = () => {
  const { id } = useParams()

  // In a real application, you would fetch the order details based on the ID
  const order = {
    id: id,
    buyer: "Sunshine Grocers Ltd.",
    date: "2023-05-01",
    deliveryDate: "2023-05-10",
    total: 500000, // in Naira
    status: "In Progress",
    items: [
      { name: "Fresh Tomatoes", quantity: 100, unit: "kg", price: 1000 },
      { name: "Sweet Potatoes", quantity: 50, unit: "kg", price: 800 },
      { name: "Green Peppers", quantity: 30, unit: "kg", price: 1200 },
    ],
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(amount)
  }

  return (
    <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex items-center">
          <Link to={'/dashboard/orders'} className="flex items-center text-green-600 hover:text-green-800 transition-colors">
            <ChevronLeft className="w-5 h-5 mr-1" />
            <span>Back to Orders</span>
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-green-600 text-white flex justify-between items-center">
            <h2 className="text-2xl font-bold">Order #{id}</h2>
            <span className="px-3 py-1 bg-green-700 rounded-full text-sm font-medium">{order.status}</span>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <Truck className="w-5 h-5 mr-2 text-green-600" />
                  Buyer Details
                </h3>
                <p className="text-gray-600">{order.buyer}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-green-600" />
                  Order Dates
                </h3>
                <p className="text-gray-600">Ordered: {order.date}</p>
                <p className="text-gray-600">Expected Delivery: {order.deliveryDate}</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Package className="w-5 h-5 mr-2 text-green-600" />
                Order Items
              </h3>
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-200 text-gray-700 uppercase text-xs leading-normal">
                      <th className="py-3 px-6 text-left">Item</th>
                      <th className="py-3 px-6 text-right">Quantity</th>
                      <th className="py-3 px-6 text-right">Price</th>
                      <th className="py-3 px-6 text-right">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm">
                    {order.items.map((item, index) => (
                      <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left font-medium">{item.name}</td>
                        <td className="py-3 px-6 text-right">
                          {item.quantity} {item.unit}
                        </td>
                        <td className="py-3 px-6 text-right">{formatCurrency(item.price)}</td>
                        <td className="py-3 px-6 text-right font-medium">
                          {formatCurrency(item.quantity * item.price)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="text-right">
                <h3 className="text-lg font-semibold mb-2 flex items-center justify-end">
                  <CreditCard className="w-5 h-5 mr-2 text-green-600" />
                  Total Amount
                </h3>
                <p className="text-3xl font-bold text-green-600">{formatCurrency(order.total)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>If you have any questions about this order, please contact our support team.</p>
         
        </div>
      </div>
    </div>
  )
}

export default OrderDetails

