import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryList({onNav=true}) {
    
  const categories =  [
    "Fruits & Vegetables", "Grains & Cereals", "Dairy & Eggs", "Meat & Poultry", "Fish & Seafood", 
    "Herbs & Spices", "Farm Equipment", "Seeds & Seedlings", "Organic Products", "Animal Feed",
  ]

  return (
     <ul className={`${onNav && "pl-4 mt-2 space-y-2"}`}>
        {categories.map((category, index) => (
            <li key={index}>
            <Link to={`/products?category=${category}`} className={`block py-1 text-gray-600 ${onNav ? ("hover:text-white") : ("hover:text-green-500")}`}>
                {category}
            </Link>
            </li>
        ))}
        </ul>
  )
}
  
  
  
