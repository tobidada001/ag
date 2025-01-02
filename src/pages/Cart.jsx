import React from "react";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
export default () => {
  return (
    <div class="font-sans md:max-w-6xl max-md:max-w-xl mx-auto bg-white py-4 mt-16">
      <h2 class="text-2xl font-bold text-gray-800">Cart</h2>
      <hr class="border-gray-300 mt-4 mb-8" />

      <div class="grid md:grid-cols-3 gap-4">
        <div class="md:col-span-2 bg-gray-100 p-4 rounded-md">
          <div class="space-y-4">
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </div>

        <div class="bg-gray-100 rounded-md p-4 md:sticky top-0">
          <div class="flex border border-yellow-600 overflow-hidden rounded-md">
            <input
              type="email"
              placeholder="Promo code"
              class="w-full outline-none bg-white border-yellow-600 text-gray-600 text-sm px-4 py-2.5"
            />
            <button
              type="button"
              class="flex items-center justify-center font-semibold tracking-wide bg-yellow-500 hover:bg-yellow-400 px-4 text-sm text-white"
            >
              Apply
            </button>
          </div>

          <ul class="text-gray-800 mt-8 space-y-4">
            <li class="flex flex-wrap gap-4 text-base">
              Discount <span class="ml-auto font-bold">₦199.29</span>
            </li>
            <li class="flex flex-wrap gap-4 text-base">
              Shipping <span class="ml-auto font-bold">₦280.50</span>
            </li>
            <li class="flex flex-wrap gap-4 text-base">
              Tax <span class="ml-auto font-bold">₦120.59</span>
            </li>
            <li class="flex flex-wrap gap-4 text-base font-bold">
              Total <span class="ml-auto">₦18,690</span>
            </li>
          </ul>

          <div class="mt-8 space-y-2">
            <Link
              to={"/checkout"}
              type="button"
              class="text-sm text-center px-4 py-2.5 w-full font-semibold tracking-wide bg-green-600 hover:bg-green-700 text-white rounded-md"
            >
              Checkout
            </Link>
            <Link
              to={"/products"}
              type="button"
              class="text-sm px-4 py-2.5 w-full text-center font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md"
            >
              Continue Shopping{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
