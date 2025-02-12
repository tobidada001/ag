import { useState } from "react"
import { Search, Eye, RefreshCw, HelpCircle, X } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Pagination from "../../components/Pagination"

const BuyerOrdersList = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("")

  const navigate = useNavigate()

  const [orders, setOrders] = useState([
    {
      id: 1,
      date: "2023-05-01",
      items: [
        { name: "Organic Tomatoes", quantity: 2, price: 5.99 },
        { name: "Fresh Corn", quantity: 3, price: 2.5 },
      ],
      total: 19.48,
      status: "Delivered",
      deliveryDetails: "123 Main St, Cityville, State, 12345",
    },
    {
      id: 2,
      date: "2023-05-05",
      items: [
        { name: "Apples", quantity: 5, price: 3.99 },
        { name: "Whole Wheat Flour", quantity: 1, price: 4.5 },
      ],
      total: 24.45,
      status: "Processing",
      deliveryDetails: "456 Elm St, Townsburg, State, 67890",
    },
    {
      id: 3,
      date: "2023-05-10",
      items: [{ name: "Free-range Eggs", quantity: 2, price: 5.99 }],
      total: 11.98,
      status: "Pending",
      deliveryDetails: "789 Oak St, Villageton, State, 13579",
    },
  ])

  const filteredOrders = orders.filter(
    (order) =>
      (order.items.some((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        order.id.toString().includes(searchTerm)) &&
      (statusFilter === "" || order.status === statusFilter),
  )

  const handleViewOrder = (orderId) => {
    navigate(`/dashboard/orders/${orderId}`)
  }

  const handleReorder = (order) => {
    // Implement reorder logic here
    console.log("Reordering:", order)
  }

  const handleOpenModal = (order) => {
    setSelectedOrder(order)
    setIsModalOpen(true)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Processing":
        return "bg-blue-100 text-blue-800"
      case "Delivered":
        return "bg-green-100 text-green-800"
      case "Canceled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">My Orders</h1>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Processing">Processing</option>
          <option value="Delivered">Delivered</option>
          <option value="Canceled">Canceled</option>
        </select>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.items.map((item) => `${item.name} (${item.quantity})`).join(", ")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₦{order.total.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleViewOrder(order.id)}
                    className="text-indigo-600 hover:text-indigo-900 mr-3"
                  >
                    <Eye size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-900 mr-3">
                    <X size={18} />
                  </button>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <Pagination />
    </div>
  )
}

export default BuyerOrdersList

