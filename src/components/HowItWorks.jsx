import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Sign Up',
      description: 'Create an account on our platform with your basic details.',
      icon: '/icons/signup.svg',
    },
    {
      title: 'List Your Crops',
      description: 'Add the crops you have available, including prices and quantities.',
      icon: '/icons/list-crops.svg',
    },
    {
      title: 'Receive Orders',
      description: 'Customers will place orders, and you’ll be notified instantly.',
      icon: '/icons/orders.svg',
    },
    {
      title: 'Deliver & Earn',
      description: 'Fulfill the orders and get paid directly into your account.',
      icon: '/icons/deliver.svg',
    },
  ];

  return (
    <div className="bg-green-50 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How It Works</h2>
          <p className="mt-4 text-gray-600">Join the platform in four simple steps and start earning today.</p>
        </div>

        {/* Steps */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 p-6 text-center">
              {/* Icon */}
              <div className="flex justify-center items-center h-16 w-16 mx-auto mb-4 bg-green-100 rounded-full">
                <img src={step.icon} alt={`${step.title} icon`} className="h-8 w-8" />
              </div>
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-700">{step.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
