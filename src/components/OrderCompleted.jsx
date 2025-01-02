import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
// import { CheckCircleIcon } from '@heroicons/react/solid';

const OrderCompletedPage = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();

  const handleContinueShopping = () => {
    navigate('/shop'); // Navigate to shopping page
  };

  const handleViewOrder = () => {
    navigate(`/orders/${orderId}`); // Navigate to order details page
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-lg p-8 relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-green-600 to-green-400 animate-progress"></div>
        <div className="flex flex-col items-center text-center">
          {/* <CheckCircleIcon className="w-20 h-20 text-green-500 drop-shadow-lg" /> */}
          <h1 className="mt-6 text-3xl font-bold text-gray-800">
            Order Confirmed!
          </h1>
          <p className="mt-4 text-gray-600">
            Your order <span className="font-semibold">#{orderId}</span> has been successfully placed. 
            We’re getting it ready to be shipped!
          </p>
          <div className="mt-6 bg-gray-100 rounded-lg p-4 w-full">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Order ID:</span>
              <span className="font-medium text-gray-800">{orderId}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>Total Amount:</span>
              <span className="font-medium text-gray-800">₦15,000</span>
            </div>
          </div>
          <div className="mt-8 flex gap-4">
            <button
              onClick={handleViewOrder}
              className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 transform transition-transform hover:scale-105"
            >
              View Order Details
            </button>
           <Link to={'/products'}> <button
              onClick={handleContinueShopping}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow-lg hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300 transform transition-transform hover:scale-105"
            >
              Continue Shopping
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCompletedPage;
