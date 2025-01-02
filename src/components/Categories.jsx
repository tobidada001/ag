import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

export default ({category}) => {

  
  return (
    <div
      className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden" >
      <div
        className="h-40 bg-cover bg-center"
        style={{ backgroundImage:  `url(${category.image})` }}
      >
      </div>


      {/* Content */}
      <div className="p-4 text-center">
        <Link to={'/products'}><h3 className="text-xl font-bold text-gray-700">{category.name}</h3></Link>
        <p className="text-sm text-gray-500 mt-2">{category.description}</p>

        <Link to={'/products'} >

        <button className="mt-4 text-yellow-500 hover:text-yellow-600 font-medium  ">

          View Products &rarr;
        </button>
        </Link>
      </div>
    </div>
  );
};
