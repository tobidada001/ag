// import { categories } from "../data/categories"

import { Link } from "react-router-dom"


const Showcase = () => {

    const categories =  [
        "Fruits & Vegetables",
        "Grains & Cereals",
        "Dairy & Eggs",
        "Meat & Poultry",
        "Fish & Seafood",
        "Herbs & Spices",
        "Farm Equipment",
        "Seeds & Seedlings",
        "Organic Products",
        "Animal Feed",
      ]
      
      
  return (
    <aside className="hidden md:block w-1/4 lg:w-1/5 pr-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={`/products?category=${category}`} className="text-gray-600 hover:text-green-500">
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Showcase;

