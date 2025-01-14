import React from 'react';

const Messages = () => {
  const messages = [
    { id: 1, sender: 'John Doe', subject: 'Order Inquiry', date: '2023-05-01' },
    { id: 2, sender: 'Jane Smith', subject: 'Delivery Question', date: '2023-05-02' },
    { id: 3, sender: 'Bob Johnson', subject: 'Product Availability', date: '2023-05-03' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Messages</h2>
      <div className="bg-white shadow-md rounded">
        {messages.map((message) => (
          <div key={message.id} className="border-b border-gray-200 p-4 hover:bg-gray-100">
            <h3 className="font-bold">{message.subject}</h3>
            <p className="text-sm text-gray-600">From: {message.sender}</p>
            <p className="text-sm text-gray-600">Date: {message.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;

