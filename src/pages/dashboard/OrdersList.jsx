import React, { useState } from 'react';
import { Search, Eye, Truck, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../../components/Pagination';

const OrdersList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const [orders, setOrders] = useState([
    { id: 1, customerName: 'John Doe', product: 'Organic Tomatoes', quantity: 50, total: 149.50, status: 'Pending' },
    { id: 2, customerName: 'Jane Smith', product: 'Fresh Corn', quantity: 100, total: 150.00, status: 'Shipped' },
    { id: 3, customerName: 'Bob Johnson', product: 'Apples', quantity: 75, total: 299.25, status: 'Delivered' },
    { id: 4, customerName: 'Alice Brown', product: 'Whole Wheat Flour', quantity: 25, total: 112.50, status: 'Pending' },
    { id: 5, customerName: 'Charlie Davis', product: 'Free-range Eggs', quantity: 30, total: 179.70, status: 'Shipped' },
  ]);

  const filteredOrders = orders.filter(order =>
    order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewOrder = (order) => {
    navigate('/dashboard/orders/6')
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      case 'Delivered': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Orders</h1>
      
      <div className="mb-6">
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
      </div>
      
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customerName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.product}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₦{order.total.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button 
                    onClick={() => handleViewOrder(order)} 
                    className="text-indigo-600 hover:text-indigo-900 mr-3"
                  >
                    <Eye size={18} />
                  </button>
                  <button className="text-green-600 hover:text-green-900">
                    <Truck size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    
            <Pagination />
    </div>
  );
};

export default OrdersList;

