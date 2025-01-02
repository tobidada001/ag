import React from "react";
import rice from "../assets/images/rice.jpeg";
import tomato from "../assets/images/tomato.jpeg";
import cocoyam from "../assets/images/cocoyam.jpeg";
import potato from "../assets/images/potato.jpeg";
import pepper from "../assets/images/pepper.jpeg";
import Categories from "./Categories";

const HomePageCategorySection = () => {
  const categories = [
    {
      name: "Grains",
      image: rice,
      description: "Rice, maize, millet, and more.",
    },
    {
      name: "Vegetables",
      image: tomato,
      description: "Fresh tomatoes, peppers, and leafy greens.",
    },
    {
      name: "Fruits",
      image: cocoyam,
      description: "Sweet bananas, oranges, and tropical delights.",
    },
    {
      name: "Tubers",
      image: potato,
      description: "Yam, cassava, potatoes, and others.",
    },
    {
      name: "Legumes",
      image: pepper,
      description: "Beans, groundnuts, and rich protein sources.",
    },
  ];

  console.log("Our categories: ", categories);

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Explore Our Categories
          </h2>
          <p className="mt-4 text-gray-600">
            Browse through a wide range of fresh produce straight from Nigerian
            farms.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category, index) => (
          <Categories category={category}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageCategorySection;
