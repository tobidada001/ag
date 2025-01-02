import tomato from '../assets/images/tomato.jpeg'

export default () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={tomato}
            alt="Product Image"
            className="w-16 h-16 rounded-md object-cover"
          />
          <div>
            <h3 className="text-sm font-semibold text-gray-700">
              Olatife Farms Tomato
            </h3>
            <span className="text-xs text-gray-500">Qty: 1</span>
          </div>
        </div>
        <span className="text-sm font-semibold text-gray-800">₦18,000</span>
      </div>
    </>
  );
};
