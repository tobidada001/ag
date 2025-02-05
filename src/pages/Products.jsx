import ProductCard from "../components/ProductCard"
import ProductListSidebar from "../components/ProductListSidebar"
import tomato from "../assets/images/tomato.jpeg"
import ProductListTopBanner from "../components/ProductListTopBanner"
import Pagination from "../components/Pagination"
import { useSidebar } from "../context/SidebarContext"

const Products = () => {
  const { sidebarOpen, closeSidebar } = useSidebar()

  const updateFilters = (filters) => {
    // Implement your filter logic here
    console.log("Filters updated:", filters)
  }

  const products = [
    {
      id: 1,
      name: "Fresh Tomatoes",
      category: "Vegetables",
      price: 23834.2,
      image: tomato,
    },
    // ... other products
  ]

  return (
    <div className="min-h-screen bg-gray-100 mt-5 mx-2 sm:mx-5 md:mx-10 lg:mx-20">
      <div className="flex flex-col md:flex-row">
        <ProductListSidebar updateFilters={updateFilters} />
        <main className="flex-1">
          
          <div className="p-4 md:p-8">
            <div className=" bg-white shadow-md ">
              <ProductListTopBanner listing_type={'flash_sales'}/>
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <>
                <ProductCard key={product.id} product={product} />
                <ProductCard key={product.id} product={product} />
                <ProductCard key={product.id} product={product} />
                <ProductCard key={product.id} product={product} />
                <ProductCard key={product.id} product={product} />
                <ProductCard key={product.id} product={product} />
                <ProductCard key={product.id} product={product} />
                <ProductCard key={product.id} product={product} />
                <ProductCard key={product.id} product={product} />
                </>
              ))}
            </div>
            <Pagination />
          </div>
        </main>
      </div>
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={closeSidebar}></div>
      )}
    </div>
  )
}

export default Products

