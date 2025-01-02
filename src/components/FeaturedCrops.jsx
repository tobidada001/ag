import React from 'react';
import { Link } from 'react-router-dom';

import rice from "../assets/images/rice.jpeg";
import tomato from "../assets/images/tomato.jpeg";
import cocoyam from "../assets/images/cocoyam.jpeg";
import potato from "../assets/images/potato.jpeg";
import pepper from "../assets/images/pepper.jpeg";

const FeaturedCrops = () => {
  const featuredCrops = [
    { name: 'Tomatoes', image: rice, price: '₦5,000 per basket', description: 'Fresh and juicy, perfect for your stews.' },
    { name: 'Rice', image: tomato, price: '₦20,000 per 50kg bag', description: 'Premium quality long-grain rice.' },
    { name: 'Yam', image: cocoyam, price: '₦800 per tuber', description: 'Big and starchy, directly from the farm.' },
    { name: 'Pepper', image: potato, price: '₦3,000 per basket', description: 'Spicy and fresh for your favorite dishes.' },
    { name: 'Groundnuts', image: pepper, price: '₦2,500 per bag', description: 'Rich and crunchy, great for snacks.' },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Featured Crops</h2>
          <p className="mt-4 text-gray-600">Check out our top picks fresh from Nigerian farms.</p>
        </div>

        {/* Crops Grid */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuredCrops.map((crop, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${crop.image})` }}></div>
              
              {/* Content */}
              <div className="p-4 text-center">
                <Link to={'/product-detail'}><h3 className="text-xl font-bold text-gray-700">{crop.name}</h3></Link>
                <p className="text-gray-600 text-sm mt-2">{crop.description}</p>
                <p className="text-lg font-semibold text-green-600 mt-2">{crop.price}</p>
                <button className="mt-4 bg-yellow-500 text-white hover:bg-yellow-600 px-4 py-2 rounded-lg text-sm font-medium">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
            <Link to={'/products'} className="bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-medium">See More Crops</Link>
        </div>

      </div>
    </div>
  );
};

export default FeaturedCrops;
