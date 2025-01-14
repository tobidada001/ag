import React from 'react';

const Help = () => {
  const faqItems = [
    {
      question: 'How do I create a new order?',
      answer: 'To create a new order, go to the Orders page and click on the "New Order" button. Fill in the required information and submit the form.'
    },
    {
      question: 'How can I update my inventory?',
      answer: 'Navigate to the Inventory page, find the item you want to update, and click on the "Edit" button. Make your changes and save them.'
    },
    {
      question: 'Where can I view my sales reports?',
      answer: 'Sales reports can be found on the Reports page. You can view various analytics and generate custom reports based on your needs.'
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Help & Support</h2>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
        {faqItems.map((item, index) => (
          <div key={index} className="mb-4">
            <h4 className="font-bold mb-2">{item.question}</h4>
            <p>{item.answer}</p>
          </div>
        ))}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Need More Help?</h3>
          <p>If you can't find the answer to your question, please contact our support team:</p>
          <p className="mt-2">
            Email: <a href="mailto:support@farmerdashboard.com" className="text-blue-600 hover:text-blue-800">support@farmerdashboard.com</a>
          </p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default Help;

