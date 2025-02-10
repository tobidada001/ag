import { X } from "lucide-react"
import { useSidebar } from "../context/SidebarContext"
import { useState } from "react"

const categories = ["Fruits", "Vegetables", "Grains", "Dairy", "Meat"]
const priceRanges = ["Under $10", "$10 - $50", "$50 - $100", "Over $100"]
const ratings = [5, 4, 3, 2, 1]

export default function ProductListSidebar({ updateFilters }) {
  const { sidebarOpen, closeSidebar } = useSidebar()
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedPriceRange, setSelectedPriceRange] = useState("")
  const [selectedRating, setSelectedRating] = useState(0)
  const [organic, setOrganic] = useState(false)
  const [freeShipping, setFreeShipping] = useState(false)

  const applyFilters = () => {
    updateFilters({
      categories: selectedCategories,
      priceRange: selectedPriceRange,
      rating: selectedRating,
      organic,
      freeShipping,
    })
    if (window.innerWidth < 768) {
      closeSidebar()
    }
  }

  const resetFilters = () => {
    setSelectedCategories([])
    setSelectedPriceRange("")
    setSelectedRating(0)
    setOrganic(false)
    setFreeShipping(false)
    updateFilters({})
    if (window.innerWidth < 768) {
      closeSidebar()
    }
  }

  return (
    <>
      <aside
        className={`
          fixed inset-y-0 left-0  w-64 bg-white shadow-md transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0
        `}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Filters</h2>
          <button onClick={closeSidebar} className="md:hidden">
            <X size={24} />
          </button>
        </div>
        <div className="p-4 space-y-6 overflow-y-auto h-[calc(100vh-64px)] md:h-auto">
          <div>
            <h3 className="font-semibold mb-2">Categories</h3>
            {categories.map((category) => (
              <label key={category} className="flex items-center space-x-2 mb-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => {
                    setSelectedCategories(
                      selectedCategories.includes(category)
                        ? selectedCategories.filter((c) => c !== category)
                        : [...selectedCategories, category],
                    )
                  }}
                  className="form-checkbox text-green-600"
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
          <div>
            <h3 className="font-semibold mb-2">Price Range</h3>
            {priceRanges.map((range) => (
              <label key={range} className="flex items-center space-x-2 mb-2">
                <input
                  type="radio"
                  name="priceRange"
                  value={range}
                  checked={selectedPriceRange === range}
                  onChange={() => setSelectedPriceRange(range)}
                  className="form-radio text-green-600"
                />
                <span>{range}</span>
              </label>
            ))}
          </div>
          <div>
            <h3 className="font-semibold mb-2">Rating</h3>
            <div className="flex space-x-2">
              {ratings.map((rating) => (
                <button
                  key={rating}
                  onClick={() => setSelectedRating(rating)}
                  className={`w-8 h-8 rounded-full ${
                    selectedRating === rating ? "bg-green-600 text-white" : "bg-gray-200"
                  }`}
                >
                  {rating}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Other Filters</h3>
            <label className="flex items-center space-x-2 mb-2">
              <input
                type="checkbox"
                checked={organic}
                onChange={() => setOrganic(!organic)}
                className="form-checkbox text-green-600"
              />
              <span>Organic</span>
            </label>
            <label className="flex items-center space-x-2 mb-2">
              <input
                type="checkbox"
                checked={freeShipping}
                onChange={() => setFreeShipping(!freeShipping)}
                className="form-checkbox text-green-600"
              />
              <span>Free Shipping</span>
            </label>
          </div>
          <div className="space-y-2">
            <button
              onClick={applyFilters}
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Apply Filters
            </button>
            <button
              onClick={resetFilters}
              className="w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </aside>
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={closeSidebar}></div>
      )}
    </>
  )
}

