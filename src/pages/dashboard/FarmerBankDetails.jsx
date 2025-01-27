import React, { useState } from "react"
import { Save } from "lucide-react"

const FarmerBankDetails = () => {
  const [bankDetails, setBankDetails] = useState({
    accountName: "",
    accountNumber: "",
    bankName: "",
    branchCode: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setBankDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Submitted bank details:", bankDetails)
    alert("Bank details saved successfully!")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Add Bank Details</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="accountName" className="block text-gray-700 font-bold mb-2">
              Account Name
            </label>
            <input
              type="text"
              id="accountName"
              name="accountName"
              value={bankDetails.accountName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="accountNumber" className="block text-gray-700 font-bold mb-2">
              Account Number
            </label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              value={bankDetails.accountNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="bankName" className="block text-gray-700 font-bold mb-2">
              Bank Name
            </label>
            <input
              type="text"
              id="bankName"
              name="bankName"
              value={bankDetails.bankName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="branchCode" className="block text-gray-700 font-bold mb-2">
              Branch Code
            </label>
            <input
              type="text"
              id="branchCode"
              name="branchCode"
              value={bankDetails.branchCode}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
          >
            <Save className="w-5 h-5 mr-2" />
            Save Bank Details
          </button>
        </form>
      </div>
    </div>
  )
}

export default FarmerBankDetails

