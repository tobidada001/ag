import { useState } from "react"

const AddPromotion = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    promotionType: "",
    discountPercentage: "",
    startDate: "",
    endDate: "",
    image: null,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    setProduct({ ...product, image: file })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Promotion submitted:", product)
    
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-8">Add new Product to Promote</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Product Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"   id="name"
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            rows="3"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            
                id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            <option value="fruits">Fruits</option>
            <option value="vegetables">Vegetables</option>
            <option value="grains">Grains</option>
            <option value="dairy">Dairy</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"

            
               id="price"
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="promotionType">
            Promotion Type
          </label>
          <select
           
           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
           
            id="promotionType"
            name="promotionType"
            value={product.promotionType}
            onChange={handleChange}
            required
          >
            <option value="">Select a promotion type</option>
            <option value="discount">Sponsored</option>
            <option value="bundle">Flash Sale</option>
            <option value="seasonal">Best-setlling</option>
            <option value="featured">Featured Product</option>
          </select>
        </div>
        {product.promotionType === "discount" && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="discountPercentage">
              Discount Percentage
            </label>
            <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
             
                id="discountPercentage"
              type="number"
              name="discountPercentage"
              value={product.discountPercentage}
              onChange={handleChange}
              min="0"
              max="100"
              required
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
            Start Date
          </label>
          <input
                       className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                       id="startDate"
            type="date"
            name="startDate"
            value={product.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
            End Date
          </label>
          <input
                       className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                       id="endDate"
            type="date"
            name="endDate"
            value={product.endDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Product Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            name="image"
            onChange={handleImageUpload}
            accept="image/*"
            required
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Promotion
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddPromotion

