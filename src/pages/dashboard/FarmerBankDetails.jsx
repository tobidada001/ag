import React, { useState } from "react"
import { PlusCircle, Edit, Trash2, X } from "lucide-react"

const FarmerBankDetails = () => {
  const [accounts, setAccounts] = useState([
    { id: 1, accountName: "John Doe", accountNumber: "1234567890", bankName: "AgriBank", branchCode: "AGR001" },
    { id: 2, accountName: "John Doe", accountNumber: "0987654321", bankName: "FarmersUnited", branchCode: "FU002" },
  ])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newAccount, setNewAccount] = useState({
    accountName: "",
    accountNumber: "",
    bankName: "",
    branchCode: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewAccount({ ...newAccount, [name]: value })
  }

  const handleAddAccount = (e) => {
    e.preventDefault()
    const id = accounts.length + 1
    setAccounts([...accounts, { id, ...newAccount }])
    setNewAccount({ accountName: "", accountNumber: "", bankName: "", branchCode: "" })
    setIsModalOpen(false)
  }

  const handleDeleteAccount = (id) => {
    setAccounts(accounts.filter((account) => account.id !== id))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Your Bank Accounts</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-300 flex items-center"
        >
          <PlusCircle className="w-5 h-5 mr-2" />
          Add New Account
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {accounts.map((account) => (
          <div
            key={account.id}
            className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800">{account.bankName}</h2>
            <p className="text-gray-600 mb-2">Account Name: {account.accountName}</p>
            <p className="text-gray-600 mb-2">Account Number: {account.accountNumber}</p>
            <p className="text-gray-600 mb-4">Branch Code: {account.branchCode}</p>
            <div className="flex justify-end space-x-2">
              <button className="text-blue-500 hover:text-blue-700">
                <Edit className="w-5 h-5" />
              </button>
              <button className="text-red-500 hover:text-red-700" onClick={() => handleDeleteAccount(account.id)}>
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Add New Bank Account</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleAddAccount}>
              <div className="mb-4">
                <label htmlFor="accountName" className="block text-gray-700 font-bold mb-2">
                  Account Name
                </label>
                <input
                  type="text"
                  id="accountName"
                  name="accountName"
                  value={newAccount.accountName}
                  onChange={handleInputChange}
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
                  value={newAccount.accountNumber}
                  onChange={handleInputChange}
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
                  value={newAccount.bankName}
                  onChange={handleInputChange}
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
                  value={newAccount.branchCode}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
              >
                Add Bank Account
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default FarmerBankDetails

