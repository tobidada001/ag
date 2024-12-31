import { useState } from "react";
import star from '/assets/star.svg';

export default () => {
    const imageFromNet = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
    
    const [mainImage, setMainImage] = useState(imageFromNet)
    const [qty, setQtyChange] = useState('1')



    function changeImage(event) {
        setMainImage(event.target.src)
        // document.getElementById('mainImage').src = src;
    }

    
    


  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={mainImage}
              alt="Product"
              className="w-full h-auto rounded-lg shadow-md mb-4"
              id="mainImage"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              <img
                src="https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Thumbnail 1"
                className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300" 
                onClick={changeImage}
              />
              <img
                src="https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Thumbnail 2"
                className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onClick={changeImage}
              />
              <img
                src="https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Thumbnail 3"
                className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onClick={changeImage}
              />
              <img
                src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Thumbnail 4"
                className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onClick={changeImage}
              />
            </div>
          </div>

          {/* <!-- Product Details --> */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2">Mama Gold Rice</h2>
            
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">₦17,000</span>
              <span className="text-gray-500 line-through">₦8,000</span>
            </div>
            <div className="flex text-blue-600 items-center mb-4">

            <img src={star} width={25} height={25} />
            <img src={star} width={25} height={25} />
            <img src={star} width={25} height={25} />
            <img src={star} width={25} height={25} />
            <img src={star} width={25} height={25} />
             
              <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
            </div>
            <p className="text-gray-700 mb-6">
              Experience premium sound quality and industry-leading noise
              cancellation with these wireless headphones. Perfect for music
              lovers and frequent travelers.
            </p>

            <div className="mb-6">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value={qty} onChange={setQtyChange}
                className="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div className="flex space-x-4 mb-6">
              <button className="bg-[#481E14] flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-[#9B3922] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Add to Cart
              </button>
              <button className="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                Wishlist
              </button>
            </div>
          </div>

          <div className=" w-full py-8 md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
              <div className="mx-auto max-w-5xl text-center">
                <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                  Farm Produce Details
                </h2>
                <div className="mx-auto max-w-2xl space-y-6 mt-8">
                  <p className="text-base font-normal text-gray-500">
                    Our fresh organic farm produce is sourced directly from
                    sustainable farms. Each product is carefully grown using
                    eco-friendly methods, ensuring the highest quality for our
                    consumers.
                  </p>

                  <p className="text-base font-semibold text-gray-900">
                    Key Features and Benefits:
                  </p>
                  <ul className="list-outside list-disc space-y-4 pl-4 text-base font-normal text-gray-500 text-left inline-block">
                    <li>
                      <span className="font-semibold text-gray-900">
                        {" "}
                        Freshness Guaranteed:{" "}
                      </span>
                      Our produce is harvested daily to ensure maximum freshness
                      and nutritional value.
                    </li>
                    <li>
                      <span className="font-semibold text-gray-900">
                        {" "}
                        Organic Certification:{" "}
                      </span>
                      Certified for 100% organic farming practices, free from
                      harmful chemicals and pesticides.
                    </li>
                    <li>
                      <span className="font-semibold text-gray-900">
                        {" "}
                        Locally Grown:{" "}
                      </span>
                      Sourced directly from local farmers, supporting community
                      development and reducing carbon footprint.
                    </li>
                    <li>
                      <span className="font-semibold text-gray-900">
                        {" "}
                        Sustainable Practices:{" "}
                      </span>
                      Using environmentally friendly and sustainable farming
                      techniques to preserve the land for future generations.
                    </li>
                    <li>
                      <span className="font-semibold text-gray-900">
                        {" "}
                        Packed with Care:{" "}
                      </span>
                      Handpicked, carefully packed, and delivered to your
                      doorstep with minimal handling.
                    </li>
                  </ul>
                </div>
                <div className="mx-auto mb-6 max-w-3xl space-y-6 md:mb-12 mt-8">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Key Product Details:
                  </h3>
                  <table className="w-full border border-gray-300 mx-auto">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">
                          Property
                        </th>
                        <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="px-4 py-2 text-sm text-gray-600">
                          Produce Name
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-900">
                          Organic Carrots
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-4 py-2 text-sm text-gray-600">
                          Harvest Date
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-900">
                          December 5, 2023
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-4 py-2 text-sm text-gray-600">
                          Weight per Unit
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-900">
                          1 kg
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-4 py-2 text-sm text-gray-600">
                          Price
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-900">
                          $2 per kg
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm text-gray-600">
                          Farming Method
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-900">
                          Completely Organic
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Average  Rating --> */}

      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* <!-- Average Rating Section --> */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">Average Rating</h2>
            <div className="mt-6">
              <p className="text-4xl font-extrabold text-gray-800">4.5</p>
              <div className="flex items-center mt-2">
              
              
              <img src={star} width={25} height={25} />
            <img src={star} width={25} height={25} />
            <img src={star} width={25} height={25} />
            <img src={star} width={25} height={25} />
            <img src={star} width={25} height={25} />





              </div>
            </div>
            <div className="mt-6 space-y-2">
              <div className="flex items-center">
                <span className="w-12 text-sm text-gray-700">5</span>
                <div className="w-full bg-gray-300 h-2 rounded-full mr-4">
                  <div
                    className="h-2 bg-green-600 rounded-full"
                    style={{width: '90%'}}
                  ></div>
                </div>
                <span className="text-sm text-gray-700">90%</span>
              </div>
              <div className="flex items-center">
                <span className="w-12 text-sm text-gray-700">4</span>
                <div className="w-full bg-gray-300 h-2 rounded-full mr-4">
                  <div
                    className="h-2 bg-green-600 rounded-full"
                    style={{width: '60%'}}
                  ></div>
                </div>
                <span className="text-sm text-gray-700">60%</span>
              </div>
              <div className="flex items-center">
                <span className="w-12 text-sm text-gray-700">3</span>
                <div className="w-full bg-gray-300 h-2 rounded-full mr-4">
                  <div
                    className="h-2 bg-green-600 rounded-full"
                    style={{width: '40%'}}
                  ></div>
                </div>
                <span className="text-sm text-gray-700">40%</span>
              </div>
              <div className="flex items-center">
                <span className="w-12 text-sm text-gray-700">2</span>
                <div className="w-full bg-gray-300 h-2 rounded-full mr-4">
                  <div
                    className="h-2 bg-green-600 rounded-full"
                    style={{width: '30%'}}
                  ></div>
                </div>
                <span className="text-sm text-gray-700">30%</span>
              </div>
              <div className="flex items-center">
                <span className="w-12 text-sm text-gray-700">1</span>
                <div className="w-full bg-gray-300 h-2 rounded-full mr-4">
                  <div
                    className="h-2 bg-green-600 rounded-full"
                    style={{width: '10%'}}
                  ></div>
                </div>
                <span className="text-sm text-gray-700">10%</span>
              </div>
            </div>
          </div>

          {/* <!-- Submit Your Review Section --> */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">
              Submit Your Review
            </h2>
            <form className="mt-6 space-y-6">
              <div className="flex items-center">
                <label htmlFor="rating" className="block text-gray-700 font-medium">
                  Add Your Rating <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center ml-4">
                  <button type="button" className="text-yellow-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                    </svg>
                  </button>
                  {/* <!-- Add more star buttons here --> */}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="mail@domain.com"
                    className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="review" className="block text-gray-700 font-medium">
                  Write Your Review <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="review"
                  rows="4"
                  placeholder="Write here..."
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-medium py-2 rounded-md hover:bg-green-700"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>

        {/* <!-- Customer Feedback Section --> */}
        <div className="container mx-auto px-6 lg:px-16 mt-12">
          <h2 className="text-2xl font-bold text-gray-800">
            Customer Feedbacks
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg mt-6">
            <div className="flex items-start space-x-4">
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  Robert Karmazov
                </h3>
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                  </svg>
                  {/* <!-- Add more stars here --> */}
                </div>
                <p className="text-gray-600 mt-4">
                  I recently had the opportunity to explore this amazing
                  platform, and it left a lasting impression. The seamless user
                  interface and robust set of features make it a go-to for
                  creating visually stunning designs.
                </p>
                <p className="text-sm text-gray-500 mt-2">20 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};
