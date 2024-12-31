const ProductListSidebar = () => (
  <aside className="w-full lg:w-1/4 bg-white p-6 shadow-md rounded-md">
    <h3 className="text-lg font-semibold mb-6 text-gray-800">Filters</h3>

    {/* Price Range */}
    <div className="mb-8">
      <h4 className="text-md font-medium mb-2 text-gray-800">Price Range</h4>
      <input
        type="range"
        className="w-full h-2 bg-green-200 accent-yellow-400 rounded-lg"
        min="0"
        max="1000"
      />
      <div className="flex justify-between text-sm text-gray-600 mt-2">
        <span>₦0</span>
        <span>₦1000</span>
      </div>
    </div>

    {/* Categories */}
    <div className="mb-8">
      <h4 className="text-md font-medium mb-2 text-gray-800">Categories</h4>
      <ul className="space-y-2">
        {['Vegetables', 'Fruits', 'Grains', 'Tubers'].map((category) => (
          <li key={category}>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 h-5 w-5 text-yellow-500 rounded border-gray-300 focus:ring-yellow-500"
              />
              <span className="text-gray-700">{category}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>

    {/* Availability */}
    <div>
      <h4 className="text-md font-medium mb-2 text-gray-800">Availability</h4>
      <ul className="space-y-2">
        <li>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 h-5 w-5 text-yellow-500 rounded border-gray-300 focus:ring-yellow-500"
            />
            <span className="text-gray-700">In Stock</span>
          </label>
        </li>
        <li>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 h-5 w-5 text-yellow-500 rounded border-gray-300 focus:ring-yellow-500"
            />
            <span className="text-gray-700">Out of Stock</span>
          </label>
        </li>
      </ul>
    </div>
  </aside>
);

export default ProductListSidebar;
