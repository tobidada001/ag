import React from 'react';

const Inventory = () => {
  const inventoryItems = [
    { id: 1, name: 'Apples', quantity: 100, unit: 'kg' },
    { id: 2, name: 'Oranges', quantity: 75, unit: 'kg' },
    { id: 3, name: 'Carrots', quantity: 200, unit: 'kg' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Inventory Management</h2>
      <table className="w-full bg-white shadow-md rounded">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Item Name</th>
            <th className="py-3 px-6 text-left">Quantity</th>
            <th className="py-3 px-6 text-left">Unit</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {inventoryItems.map((item) => (
            <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">{item.name}</td>
              <td className="py-3 px-6 text-left">{item.quantity}</td>
              <td className="py-3 px-6 text-left">{item.unit}</td>
              <td className="py-3 px-6 text-left">
                <button className="text-blue-600 hover:text-blue-900 mr-2">Edit</button>
                <button className="text-red-600 hover:text-red-900">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;

