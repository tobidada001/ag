import { Trash2 } from "lucide-react"
import tomato from "../assets/images/tomato2.png"

const WishListItem = () => {
  return (
    <div className="border-b py-4 px-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <input type="checkbox" className="h-4 w-4" />
          <img src={tomato || "/placeholder.svg"} alt="Organic Banana" className="h-10 w-10 rounded-md" />
          <div>
            <p className="font-medium">Organic Banana</p>
            <p className="text-gray-500 text-sm">₦98 / lb</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto mt-4 sm:mt-0">
          <p className="text-right w-full sm:w-auto">₦35000.00</p>
          <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full w-full sm:w-auto text-center">
            In Stock
          </span>
          <button className="bg-green-600 text-white text-sm px-4 py-2 rounded-md w-full sm:w-auto">Add to Cart</button>
          <button className="text-gray-400 hover:text-red-600 w-full sm:w-auto flex justify-center sm:justify-start">
            <Trash2 className="hover:text-red-500" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default WishListItem

