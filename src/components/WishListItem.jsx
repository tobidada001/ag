import { Trash2 } from 'lucide-react';
import tomato from '../assets/images/tomato2.png';

const WishListItem = () => {

    return (
  <tr className="border-b">
    <td className="py-4 px-4 text-left">
      <input type="checkbox" className="h-4 w-4" />
    </td>
    <td className="py-4 px-4 flex items-center gap-4">
      <img
        src={tomato}
        alt="Organic Banana"
        className="h-10 w-10 rounded-md"
      />
      <div>
        <p className="font-medium">Organic Banana</p>
        <p className="text-gray-500 text-sm">$.98 / lb</p>
      </div>
    </td>
    <td className="py-4 px-4 text-right">$35.00</td>
    <td className="py-4 px-4 text-center">
      <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
        In Stock
      </span>
    </td>
    <td className="py-4 px-4 text-center">
      <button className="bg-green-600 text-white text-sm px-4 py-2 rounded-md">
        Add to Cart
      </button>
    </td>
    <td className="py-4 px-4 text-center">
      <button className="text-gray-400 hover:text-red-600">
      
        <Trash2 className='hover:text-red-500'/>
      </button>
    </td>
  </tr>
    )
};


export default WishListItem;