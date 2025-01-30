import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";


const ProductCard = ( props) => (
  

  <div
  key={props.id}
  className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"

>
  {console.log('Props: ', props)}
  <img src={props.product.image || "/placeholder.svg"} alt={props.product.name} className="w-full h-48 object-cover" />
  <div className="p-4">
    <h3 className="font-semibold text-lg mb-2">{props.product.name}</h3>
    <div className="flex justify-between items-center">
      <span className="text-gray-700 font-bold">₦{parseFloat(props.product.price).toFixed(2)}</span>
      <div className="flex items-center">
        <span className="text-gray-600 mr-1 flex items-center gap-1"><MapPin className="w-4 h-4" /> Ibadan</span>
        {/* <span className="text-gray-600">{props.product.rating}</span> */}
      </div>
    </div>
    <button className="mt-3 w-full bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600 transition-colors duration-300">
      Add to Cart
    </button>
  </div>
</div>
);


export default ProductCard;