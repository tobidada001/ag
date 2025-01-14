import React from 'react';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
  const { id } = useParams();

  // In a real application, you would fetch the order details based on the ID
  const order = {
    id: id,
    customer: 'John Doe',
    date: '2023-05-01',
    total: 500,
    items: [
      { name: 'Apples', quantity: 10, price: 2 },
      { name: 'Oranges', quantity: 5, price: 3 },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Order Details - #{id}</h2>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <p><strong>Customer:</strong> {order.customer}</p>
          <p><strong>Date:</strong> {order.date}</p>
          <p><strong>Total:</strong> ${order.total}</p>
        </div>
        <h3 className="text-xl font-bold mb-2">Items</h3>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Item</th>
              <th className="py-3 px-6 text-left">Quantity</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Subtotal</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {order.items.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{item.name}</td>
                <td className="py-3 px-6 text-left">{item.quantity}</td>
                <td className="py-3 px-6 text-left">${item.price}</td>
                <td className="py-3 px-6 text-left">${item.quantity * item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetails;

