"use client"

import { useState, useEffect } from "react"
import { Plus, Edit2, Trash2, X } from "lucide-react"

const BankAccounts = () => {
  const [accounts, setAccounts] = useState([])
  const [showAddForm, setShowAddForm] = useState(false)
  const [newAccount, setNewAccount] = useState({
    bankName: "",
    accountNumber: "",
    accountName: "",
    branchCode: "",
    logoUrl: "",
  })
  const [editingIndex, setEditingIndex] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewAccount({ ...newAccount, [name]: value })
  }

  useEffect(() => {
    // Fetch bank accounts data
    // For now, we'll use dummy data
    const dummyAccounts = [
      {
        id: 1,
        bankName: "First Bank",
        accountNumber: "1234567890",
        accountName: "Oluwatobi Dada",
        branchCode: "001",
        logoUrl: "https://example.com/firstbank-logo.png",
      },
      {
        id: 2,
        bankName: "Zenith Bank",
        accountNumber: "0987654321",
        accountName: "Adeola Oghene",
        branchCode: "002",
        logoUrl: "https://example.com/zenithbank-logo.png",
      },
    ]
    setAccounts(dummyAccounts)
  }, [])

  const handleAddAccount = (e) => {
    e.preventDefault()
    if (editingIndex !== null) {
      // Edit existing account
      const updatedAccounts = [...accounts]
      updatedAccounts[editingIndex] = { ...newAccount, id: accounts[editingIndex].id }
      setAccounts(updatedAccounts)
      setEditingIndex(null)
    } else {
      // Add new account
      setAccounts([...accounts, { ...newAccount, id: Date.now() }])
    }
    setNewAccount({ bankName: "", accountNumber: "", accountName: "", branchCode: "", logoUrl: "" })
    setShowAddForm(false)
  }

  const handleEditAccount = (index) => {
    setNewAccount(accounts[index])
    setEditingIndex(index)
    setShowAddForm(true)
  }

  const handleDeleteAccount = (id) => {
    setAccounts(accounts.filter((account) => account.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Manage Bank Accounts</h1>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 relative">
          <div className="p-4 sm:p-6">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center text-sm"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add New Bank Account
              </button>
            </div>
            {showAddForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">
                      {editingIndex !== null ? "Edit Bank Account" : "Add New Bank Account"}
                    </h2>
                    <button onClick={() => setShowAddForm(false)} className="text-gray-500 hover:text-gray-700">
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <form onSubmit={handleAddAccount} className="space-y-4">
                    <div>
                      <label htmlFor="accountName" className="block text-sm font-medium text-gray-700 mb-1">
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
                    <div>
                      <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700 mb-1">
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
                    <div>
                      <label htmlFor="bankName" className="block text-sm font-medium text-gray-700 mb-1">
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
                    <div>
                      <label htmlFor="branchCode" className="block text-sm font-medium text-gray-700 mb-1">
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
                      {editingIndex !== null ? "Update Bank Account" : "Add Bank Account"}
                    </button>
                  </form>
                </div>
              </div>
            )}

            <ul className="divide-y divide-gray-200">
              {accounts.map((account, index) => (
                <li key={account.id} className="py-4">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center">
                      <div className="mr-4 flex-shrink-0">
                        <img
                          src={account.logoUrl || "https://via.placeholder.com/50"}
                          alt={`${account.bankName} logo`}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-lg font-medium text-gray-900">{account.bankName}</p>
                        <p className="text-sm text-gray-500">Account Number: ••••{account.accountNumber.slice(-4)}</p>
                        <p className="text-sm text-gray-500">{account.accountName}</p>
                        {/* <p className="text-sm text-gray-500">Branch Code: {account.branchCode}</p> */}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button onClick={() => handleEditAccount(index)} className="text-blue-600 hover:text-blue-800">
                        <Edit2 className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteAccount(account.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BankAccounts

