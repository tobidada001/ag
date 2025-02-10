import React from 'react';
import { Link } from 'react-router-dom';

import rice from "../assets/images/rice.jpeg";
import tomato from "../assets/images/tomato.jpeg";
import cocoyam from "../assets/images/cocoyam.jpeg";
import potato from "../assets/images/potato.jpeg";
import pepper from "../assets/images/pepper.jpeg";
import ProductCard from './ProductCard';

const FeaturedCrops = () => {
  const featuredCrops = [
    { name: 'Tomatoes', image: rice, price: 328823, description: 'Fresh and juicy, perfect for your stews.' },
    { name: 'Rice', image: tomato, price: 898233, description: 'Premium quality long-grain rice.' },
    { name: 'Yam', image: cocoyam, price: 920000, description: 'Big and starchy, directly from the farm.' },
    { name: 'Pepper', image: potato, price: 4000, description: 'Spicy and fresh for your favorite dishes.' },
    { name: 'Groundnuts', image: pepper, price: 83772, description: 'Rich and crunchy, great for snacks.' },
  ];

  return (
    <div className="bg-white py-12">
      <div className=" mx-auto px-6 ">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Featured Crops</h2>
          <p className="mt-4 text-gray-600">Check out our top picks fresh from Nigerian farms.</p>
        </div>

        {/* Crops Grid */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuredCrops.map((crop, index) => (
            <ProductCard key={index} product={crop} /> 
          
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
