import React from 'react';

const HomePageCategorySection = () => {
  const categories = [
    { name: 'Grains', image: '/assets/images/rice.jpeg', description: 'Rice, maize, millet, and more.' },
    { name: 'Vegetables', image: '/assets/images/tomato.jpeg', description: 'Fresh tomatoes, peppers, and leafy greens.' },
    { name: 'Fruits', image: '/assets/images/cocoyam.jpeg', description: 'Sweet bananas, oranges, and tropical delights.' },
    { name: 'Tubers', image: '/assets/images/potato.jpeg', description: 'Yam, cassava, potatoes, and others.' },
    { name: 'Legumes', image: '/assets/images/pepper.jpeg', description: 'Beans, groundnuts, and rich protein sources.' },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Explore Our Categories</h2>
          <p className="mt-4 text-gray-600">Browse through a wide range of fresh produce straight from Nigerian farms.</p>
        </div>

        {/* Categories Grid */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${category.image})` }}></div>
              
              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-gray-700">{category.name}</h3>
                <p className="text-sm text-gray-500 mt-2">{category.description}</p>
                <button className="mt-4 text-yellow-500 hover:text-yellow-600 font-medium">
                  View Products &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageCategorySection;
