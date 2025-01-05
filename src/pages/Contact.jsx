import { useState } from "react";
import sideimage from '../assets/images/countryside-woman-holding-plant-leaves.jpg'
export default () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberInput = (e) => {
    e.target.value = e.target.value.replace(/[^+\d\s-]/g, "");
    setPhoneNumber(e.target.value);
  };

  return (
  
      <main className="py-5 flex">
        <div className="w-1/2 hidden lg:block">
          <img
            src={sideimage}
            className="h-screen"
          />
        </div>

        <div className=" lg:w-1/2 mx-auto px-4 text-gray-600 md:px-8">
          <div className="max-w-lg mx-auto space-y-3 sm:text-center">
            <h1 className="text-green-800 text-3xl font-semibold sm:text-4xl">
              Get in touch
            </h1>
            <p>We’d love to hear from you! Please fill out the form bellow.</p>
          </div>
          <div className="mt-12  mx-auto">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                <div>
                  <label className="font-medium">First name</label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-green-600 focus:border-green-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Last name</label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Phone number</label>

                <input
                  id="contactNumber"
                  onInput={handlePhoneNumberInput}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                  placeholder="e.g., +1 123-456-7890"
                  pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
                  maxLength="16"
                  type="text"
                />

                <p class="flex items-center mt-2 text-xs text-slate-400">
                  Include your country code for international numbers.
                </p>
              </div>

              <div>
                <label className="font-medium">Message</label>
                <textarea
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent focus:outline-none border focus:border-green-600 shadow-sm rounded-lg"
                ></textarea>
              </div>
              <button className="w-full px-4 py-2 text-white font-medium bg-green-800 hover:bg-green-700 active:bg-green-600 rounded-lg duration-150">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>

  );
};
