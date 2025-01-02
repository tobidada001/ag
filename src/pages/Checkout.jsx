import OrderItem from "../components/OrderItem";

export default () => {
  return (
    <>
      {/* <!-- Breadcrumb --> */}
      <div className="container mx-auto mt-28 mb-6  px-6 text-sm text-gray-500">
        Account / My Account / Product / View Cart /{" "}
        <span className="text-black">Checkout</span>
      </div>

      <div className="container mx-auto px-6 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* <!-- Billing Details --> */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
          <form className="space-y-6">
            {/* <!-- Name Fields --> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-normal text-gray-700">
                  First Name*
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 outline-none focus:ring-green-900"
                />
              </div>
              <div>
                <label className="block text-sm font-normal text-gray-700">
                  Last Name*
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 outline-none focus:ring-green-900"
                />
              </div>
            </div>

            {/* <!-- Company and Email --> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-normal text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 outline-none focus:ring-green-900"
                />
              </div>
              <div>
                <label className="block text-sm font-normal text-gray-700">
                  Email Address*
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 outline-none focus:ring-green-900"
                />
              </div>
            </div>

            {/* <!-- Street Address --> */}
            <div>
              <label className="block text-sm font-normal text-gray-700">
                Street Address*
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 outline-none focus:ring-green-900"
              />
            </div>

            {/* <!-- Apartment and City --> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-normal text-gray-700">
                  Apartment, floor, etc. (optional)
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 outline-none focus:ring-green-900"
                />
              </div>
              <div>
                <label className="block text-sm font-normal text-gray-700">
                  Town/City*
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 outline-none focus:ring-green-900"
                />
              </div>
            </div>

            {/* <!-- Phone --> */}
            <div>
              <label className="block text-sm font-normal text-gray-700">
                Phone Number*
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 outline-none focus:ring-green-900"
              />
            </div>

            {/* <!-- Save Info Checkbox --> */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="h-4 w-4 border-gray-300 rounded"
              />
              <label className="text-sm text-gray-700">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>

        {/* <!-- Order Summary --> */}
        <div className="lg:col-span-1 bg-white border border-gray-300 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Order Summary
          </h2>

          {/* <!-- Order Items --> */}
          <div className="space-y-4">
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
          </div>

          {/* <!-- Divider --> */}
          <div className="border-t border-gray-200 my-4"></div>

          {/* <!-- Summary Details --> */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span>₦5,000</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-800">
              <span>Total</span>
              <span>₦25,000</span>
            </div>
          </div>

          {/* <!-- Discount Code --> */}
          <div className="mt-6 flex items-center">
            <input
              type="text"
              placeholder="Discount Code"
              className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:ring-2 focus:ring-[#2A9D8F]"
            />
            <button className="bg-yellow-500 hover:bg-yellow-400 text-white focus:outline-none px-4 py-2 rounded-r-md">
              Apply
            </button>
          </div>

          {/* <!-- Action Buttons --> */}
          <div className="flex flex-col gap-4 mt-6">
            <button className="w-full bg-green-700 hover:bg-green-600 text-white py-3 rounded-md font-bold">
              Proceed to Checkout
            </button>
            <a
              href="#"
              className="w-full text-center bg-yellow-100 hover:bg-yellow-200 text-gray-700 py-3 rounded-md font-bold"
            >
              Back to Shop
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
