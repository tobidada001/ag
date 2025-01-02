import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

const FarmerRegistration = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 2));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  return (

    <>
      
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">

    <h1 className="text-gray-900 text-4xl mb-10 mt-16">Create your farmer account</h1>

    <Link to={'/'} className="border-b-2 border-green-700 text-green-700">Back to Home</Link>

      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg p-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <ProgressBar
            percent={(step / 2) * 100}
            filledBackground="linear-gradient(to right, #4caf50, #8bc34a)"
          >
            <Step transition="scale">
              {({ accomplished }) => (
                <div
                  className={`w-8 h-8 rounded-full ${
                    accomplished ? "bg-green-600" : "bg-gray-300"
                  }`}
                />
              )}
            </Step>
            <Step transition="scale">
              {({ accomplished }) => (
                <div
                  className={`w-8 h-8 rounded-full ${
                    accomplished ? "bg-green-600" : "bg-gray-300"
                  }`}
                />
              )}
            </Step>
            <Step transition="scale">
              {({ accomplished }) => (
                <div
                  className={`w-8 h-8 rounded-full ${
                    accomplished ? "bg-green-600" : "bg-gray-300"
                  }`}
                />
              )}
            </Step>
          </ProgressBar>
        </div>

        {/* Form Sections */}
        {step === 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Step 1: Personal Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
        )}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Step 2: Farm Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Farm Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Farm Address/Location
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Farm Size
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Type of Farming
                </label>
                <select
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                >
                  <option>Crop Farming</option>
                  <option>Livestock</option>
                  <option>Aquaculture</option>
                  <option>Mixed</option>
                </select>
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Step 3: Verification</h2>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Upload National ID Card
              </label>
              <input
                type="file"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Upload Proof of Farm Ownership/Operation
              </label>
              <input
                type="file"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between">
          <button
            onClick={prevStep}
            disabled={step === 0}
            className={`px-4 py-2 rounded-md ${
              step === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gray-600 text-white hover:bg-gray-700"
            }`}
          >
            Previous
          </button>
          {step < 2 ? (
            <button
              onClick={nextStep}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Next
            </button>
          ) : (
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>

    </>
  );
};

export default FarmerRegistration;
