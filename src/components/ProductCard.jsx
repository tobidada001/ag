// import { MapPin } from "lucide-react";
// import { Link } from "react-router-dom";


// const ProductCard = ( props) => (
  

//   <div key={props.id}
//   className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
  
//   <img src={props.product.image || "/placeholder.svg"} alt={props.product.name} className="w-full h-48 object-cover" />
//   <div className="p-4">
//     <h3 className="font-semibold text-lg mb-2">{props.product.name}</h3>
//     <div className="flex justify-between items-center">
//       <span className="text-gray-700 font-bold">₦{parseFloat(props.product.price).toFixed(2)}</span>
//       <div className="flex items-center">
//         <span className="text-gray-600 mr-1 flex items-center gap-1"><MapPin className="w-4 h-4" /> Ibadan</span>
//         {/* <span className="text-gray-600">{props.product.rating}</span> */}
//       </div>
//     </div>
//     <button className="mt-3 w-full bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600 transition-colors duration-300">
//       Add to Cart
//     </button>
//   </div>
// </div>
// );


// export default ProductCard;





import { FileQuestion, MapPin, Star } from 'lucide-react';
import { Link } from "react-router-dom";


// product isBestSelling


const ProductCard = ({ product, isBestSelling, isSponsored }) => {
  const originalPrice = parseFloat(product.originalPrice || product.price);
  const currentPrice = parseFloat(product.price);
  const isDiscounted = originalPrice > currentPrice;
  const discountPercentage = isDiscounted
    ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
    : 0;

  return (
    <div
      key={product.id}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 relative"
    >
      {isDiscounted && (
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-bl-lg z-10">
          {discountPercentage}% OFF
        </div>
      )}
      <img
        src={product.image || "/placeholder.svg"}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <div className="flex justify-between items-center">
          <div>
            {isDiscounted ? (
              <div className="flex flex-col">
                <span className="text-gray-500 line-through text-sm">
                  ₦{originalPrice.toFixed(2)}
                </span>
                <span className="text-red-600 font-bold">
                  ₦{currentPrice.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-gray-700 font-bold">
                ₦{currentPrice.toFixed(2)}
              </span>
            )}
          </div>
          <div className="flex items-center">
            <span className="text-gray-600 mr-1 flex items-center gap-1">
              <MapPin className="w-4 h-4" /> Ibadan
            </span>
            {isBestSelling && (
              <div className="flex items-center text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="ml-1 text-sm">{product.rating}</span>
              </div>
            )}
          </div>
        </div>

        {isSponsored && <p className='text-sm text-gray-400'>Sponsored</p> }
        <button className="mt-3 w-full bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600 transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;