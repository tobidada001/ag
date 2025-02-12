import React from 'react';
import { Package, ShoppingCart, DollarSign, Truck, Wallet, Ship } from 'lucide-react';
import { useUserType } from '../../context/UserTypeContext';

const Dashboard = () => {
  const stats = []
  const { userType } = useUserType();
  const usertype = userType;
  // Sample data
  if (usertype === 'farmer') {
    stats.push(
      { title: 'Total Products', value: 45, icon: <Package size={24} /> },
      { title: 'Total Orders', value: 128, icon: <ShoppingCart size={24} /> },
      { title: 'Total Sales', value: '₦5,240', icon: <DollarSign size={24} /> },
      { title: 'Pending Deliveries', value: 8, icon: <Truck size={24} /> }
    );
  } else if (usertype === 'buyer' || usertype === undefined) {
    stats.push(
      { title: 'Wallet Balance', value: 4500000, icon: <Wallet size={24} /> },
      { title: 'Total Orders', value: 128, icon: <Ship size={24} /> },
      { title: 'Total Spent', value: '₦5,240', icon: <DollarSign size={24} /> },
      { title: 'Active Orders', value: 8, icon: <Truck size={24} /> }
    );
  }




  const recentOrders = [
    { id: 1, product: 'Organic Tomatoes', quantity: 50, total: '250', status: 'Delivered' },
    { id: 2, product: 'Fresh Corn', quantity: 100, total: '300', status: 'Processing' },
    { id: 3, product: 'Green Beans', quantity: 30, total: '90', status: 'Shipped' },
    { id: 4, product: 'Red Potatoes', quantity: 80, total: '160', status: 'Pending' },
    { id: 5, product: 'Carrots', quantity: 60, total: '120', status: 'Delivered' },
  ];

  return (
    <div className="p-3 md:p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Good morning, Johnson</h1>
      
      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} icon={stat.icon} />
        ))}
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-xl font-semibold p-4 bg-gray-50 border-b">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₦{order.total}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
    <div className="mr-4 text-green-500">{icon}</div>
    <div>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-2xl font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

const getStatusColor = (status) => {
  switch (status) {
    case 'Delivered':
      return 'bg-green-100 text-green-800';
    case 'Processing':
      return 'bg-yellow-100 text-yellow-800';
    case 'Shipped':
      return 'bg-blue-100 text-blue-800';
    case 'Pending':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default Dashboard;

