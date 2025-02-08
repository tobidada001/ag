"use client"

import { useState, useEffect } from "react"
import { ArrowDownCircle, ArrowUpCircle, Search, Filter } from "lucide-react"

const Transactions = () => {
  const [transactions, setTransactions] = useState([])
  const [filteredTransactions, setFilteredTransactions] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")

  useEffect(() => {
    // Fetch transactions data
    // For now, we'll use dummy data
    const dummyTransactions = [
      {
        id: 1, type: "credit", amount: 1000, date: "2023-05-15", status: "completed", description: "Payment for Tomatoes",},
      { id: 2, type: "debit", amount: 50, date: "2023-05-14", status: "completed", description: "Platform fee" },
      { id: 3, type: "credit", amount: 750, date: "2023-05-12", status: "pending", description: "Payment for Carrots" },
      {id: 4,type: "credit",amount: 1200,date: "2023-05-10",status: "completed",description: "Payment for Potatoes",},
      { id: 5, type: "debit", amount: 100, date: "2023-05-08", status: "completed", description: "Withdrawal" }, ]
      
    setTransactions(dummyTransactions)
    setFilteredTransactions(dummyTransactions)
  }, [])

  useEffect(() => {
    const filtered = transactions.filter((transaction) => {
      const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesType = filterType === "all" || transaction.type === filterType
      const matchesStatus = filterStatus === "all" || transaction.status === filterStatus
      return matchesSearch && matchesType && matchesStatus
    })
    setFilteredTransactions(filtered)
  }, [searchTerm, filterType, filterStatus, transactions])

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Transactions</h1>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex-grow">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search transactions..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <select
                  className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="credit">Credit</option>
                  <option value="debit">Debit</option>
                </select>
                <select
                  className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Statuses</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {filteredTransactions.map((transaction) => (
              <li key={transaction.id} className="p-6 hover:bg-gray-50 transition duration-150 ease-in-out">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {transaction.type === "credit" ? (
                      <ArrowDownCircle className="h-8 w-8 text-green-500" />
                    ) : (
                      <ArrowUpCircle className="h-8 w-8 text-red-500" />
                    )}
                    <div>
                      <p className="text-sm font-medium text-gray-900">{transaction.description}</p>
                      <p className="text-sm text-gray-500">{formatDate(transaction.date)}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className={`text-sm font-semibold ${
                        transaction.type === "credit" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {transaction.type === "credit" ? "+" : "-"}₦{transaction.amount}
                    </p>
                    <p
                      className={`text-xs ${transaction.status === "completed" ? "text-green-500" : "text-yellow-500"}`}
                    >
                      {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Transactions

