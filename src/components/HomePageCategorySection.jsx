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

        
        <div className="mt-10 flex overflow-x-auto whitespace-nowrap snap-x snap-mandatory">
          {categories.map((category, index) => (
          <Categories key={index} category={category}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageCategorySection;





// const categoryData = [
//   { id: 1, name: "Fruits", image: pepper },
//   { id: 2, name: "Vegetables", image: tomato },
//   { id: 3, name: "Grains", image: cocoyam },
//   { id: 4, name: "Dairy", image: rice },
//   { id: 5, name: "Meat", image: pepper },
//   { id: 6, name: "Poultry", image: tomato },
// ]

// const HomePageCategorySection = ({ design = "scroll" }) => {
//   const renderCategories = () => {
//     switch (design) {
//       case "grid":
//         return (
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//             {categoryData.map((category) => (
//               <div
//                 key={category.id}
//                 className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
//               >
//                 <img
//                   src={category.image || "/placeholder.svg"}
//                   alt={category.name}
//                   className="w-16 h-16 object-cover mb-2"
//                 />
//                 <span className="text-sm font-medium text-gray-800">{category.name}</span>
//               </div>
//             ))}
//           </div>
//         )

//       case "scroll":
//         return (
//           <div className="flex overflow-x-auto pb-4 justify-center space-x-4 scrollbar-hide">
//             {categoryData.map((category) => (
//               <div key={category.id} className="flex-shrink-0 flex flex-col items-center w-24">
//                 <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-2">
//                   <img
//                     src={category.image || "/placeholder.svg"}
//                     alt={category.name}
//                     className="w-12 h-12 object-cover"
//                   />
//                 </div>
//                 <span className="text-xs font-medium text-gray-800 text-center">{category.name}</span>
//               </div>
//             ))}
//           </div>
//         )

//       case "list":
//         return (
//           <div className="space-y-2">
//             {categoryData.map((category) => (
//               <div
//                 key={category.id}
//                 className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
//               >
//                 <img
//                   src={category.image || "/placeholder.svg"}
//                   alt={category.name}
//                   className="w-10 h-10 object-cover mr-4"
//                 />
//                 <span className="text-sm font-medium text-gray-800">{category.name}</span>
//               </div>
//             ))}
//           </div>
//         )

//       case "cards":
//         return (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {categoryData.map((category) => (
//               <div key={category.id} className="relative overflow-hidden rounded-lg shadow-md group">
//                 <img
//                   src={category.image || "/placeholder.svg"}
//                   alt={category.name}
//                   className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
//                   <span className="text-lg font-semibold text-white">{category.name}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )

//       default:
//         return null
//     }
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-2xl text-center font-bold mb-6 text-gray-800">Categories</h2>
//       {renderCategories()}
//     </div>
//   )
// }

// export default HomePageCategorySection

