import React, { useEffect, useState } from "react"
import {Wallet, DollarSign, Clock, ArrowDownCircle, ArrowUpCircle, CreditCard, Send, PlusCircle, History, List, RotateCcw, ShoppingCart,} from "lucide-react"
import { Link } from "react-router-dom"

const FarmerWallet2 = () => {
  const usertype = localStorage.getItem('usertype')
  const [activeTab, setActiveTab] = useState("overview")
  const [walletData, setWalletData] = useState(null)


 


  const farmerWalletData = {
    totalBalance: 5000,
    pendingBalance: 1500,
    availableBalance: 3500,
    recentTransactions: [
      { id: 1, type: "credit", amount: 1000, date: "2023-05-15", status: "completed", description: "Payment for Tomatoes"},
      { id: 2, type: "debit", amount: 50, date: "2023-05-14", status: "completed", description: "Platform fee" },
      { id: 3, type: "credit", amount: 750, date: "2023-05-12", status: "pending", description: "Payment for Carrots" },
      { id: 4, type: "credit", amount: 1200, date: "2023-05-10", status: "completed", description: "Payment for Potatoes", },
      { id: 5, type: "debit", amount: 100, date: "2023-05-08", status: "completed", description: "Withdrawal" },
    ],
  }

  const buyerWalletData = {
      totalBalance: 500000,
      pendingBalance: 1500,
      availableBalance: 3500,
      recentTransactions: [
        { id: 1, type: "credit", amount: 1000, date: "2023-05-15", status: "completed", description: "Payment for Tomatoes"},
        { id: 2, type: "debit", amount: 50, date: "2023-05-14", status: "completed", description: "Platform fee" },
        { id: 3, type: "credit", amount: 750, date: "2023-05-12", status: "pending", description: "Payment for Carrots" },
        { id: 4, type: "credit", amount: 1200, date: "2023-05-10", status: "completed", description: "Payment for Potatoes", },
        { id: 5, type: "debit", amount: 100, date: "2023-05-08", status: "completed", description: "Withdrawal" },
      ],
    } 
  

     
  useEffect(() => {
    if (usertype === 'buyer') {
      setWalletData (buyerWalletData)
    }else{
      setWalletData(farmerWalletData)
    }
    // return () => {
      
    // };
  }, []);


  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "usd" }).format(amount)
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
  }

  const renderOverviewTab = () => (
    <div className="space-y-8">
   <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
  {/* Total Balance */}
  <div className="bg-green-100 p-4 rounded-lg">
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold text-green-800">Total Balance</h2>
      <Wallet className="h-6 w-6 text-green-600" />
    </div>
    <p className="mt-2 text-3xl font-bold text-green-900">₦{walletData && walletData.totalBalance}</p>
  </div>

  {/* Total Transactions */}
  <div className="bg-purple-100 p-4 rounded-lg">
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold text-purple-800">Total Transactions</h2>
      <List className="h-6 w-6 text-purple-600" />
    </div>
    <p className="mt-2 text-3xl font-bold text-purple-900">{walletData && walletData.totalTransactions}</p>
  </div>

  {/* Total Spent */}
  <div className="bg-blue-100 p-4 rounded-lg">
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold text-blue-800">Total Spent</h2>
      <ShoppingCart className="h-6 w-6 text-blue-600" />
    </div>
    <p className="mt-2 text-3xl font-bold text-blue-900">₦{walletData && walletData.totalSpent}</p>
  </div>
</div>


      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg font-medium text-gray-900">Recent Transactions</h2>
        </div>
        <div className="border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            {walletData && walletData.recentTransactions.slice(0, 5).map((transaction) => (
              <li key={transaction.id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {transaction.type === "credit" ? (
                      <ArrowDownCircle className="h-5 w-5 text-green-500 mr-3" />
                    ) : (
                      <ArrowUpCircle className="h-5 w-5 text-red-500 mr-3" />
                    )}
                    <div className="text-sm font-medium text-gray-900">{transaction.description}</div>
                  </div>
                  <div className="flex items-center">
                    <div
                      className={`text-sm font-semibold ${transaction.type === "credit" ? "text-green-600" : "text-red-600"} mr-4`}
                    >
                      {transaction.type === "credit" ? "+" : "-"}
                      ₦{transaction.amount}
                    </div>
                    <div className="text-sm text-gray-500">{formatDate(transaction.date)}</div>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div
                    className={`text-xs ${transaction.status === "completed" ? "text-green-500" : "text-yellow-500"}`}
                  >
                    {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )

  const renderTransactionsTab = () => (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg font-medium text-gray-900">All Transactions</h2>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {walletData && walletData.recentTransactions.map((transaction) => (
            <li key={transaction.id} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {transaction.type === "credit" ? (
                    <ArrowDownCircle className="h-5 w-5 text-green-500 mr-3" />
                  ) : (
                    <ArrowUpCircle className="h-5 w-5 text-red-500 mr-3" />
                  )}
                  <div className="text-sm font-medium text-gray-900">{transaction.description}</div>
                </div>
                <div className="flex items-center">
                  <div
                    className={`text-sm font-semibold ${transaction.type === "credit" ? "text-green-600" : "text-red-600"} mr-4`}
                  >
                    {transaction.type === "credit" ? "+" : "-"}
                    ₦{transaction.amount}
                  </div>
                  <div className="text-sm text-gray-500">{formatDate(transaction.date)}</div>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div className={`text-xs ${transaction.status === "completed" ? "text-green-500" : "text-yellow-500"}`}>
                  {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-8">Johnson's Wallet</h1>

        {usertype === 'farmer' ? 
        <div className="bg-white shadow sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex flex-wrap justify-center gap-4">
            <Link to={'/dashboard/link-bank-account'} className="flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <PlusCircle className="h-5 w-5 mr-2" />
                Add Bank
              </Link>

              <button className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <CreditCard className="h-5 w-5 mr-2" />
                Withdraw Funds
              </button>
            
             
            </div>
          </div>
        </div>
          :

          <div className="bg-white shadow sm:rounded-lg mb-8">
  <div className="px-4 py-5 sm:p-6">
    <div className="flex flex-wrap justify-center gap-4">

      {/* Add Funds to Wallet */}
      <button 
        className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        <DollarSign className="h-5 w-5 mr-2" />
        Add Funds
      </button>

      {/* View Transaction History */}
      <Link 
        to={'/dashboard/transaction-history'} 
        className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        <List className="h-5 w-5 mr-2" />
        View Transaction History
      </Link>

      {/* Request Refund */}
      <button 
        className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        <RotateCcw className="h-5 w-5 mr-2" />
        Request Refund
      </button>

      <button 
        className="flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        <Send className="h-5 w-5 mr-2" />
        Transfer Funds
      </button>

    </div>
  </div>
</div>

        }

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
              <button
                onClick={() => setActiveTab("overview")}
                className={`${
                  activeTab === "overview"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex-1 text-center`}
              >
                <Wallet className="h-5 w-5 inline-block mr-2" />
                Overview
              </button>
              <button
                onClick={() => setActiveTab("transactions")}
                className={`${
                  activeTab === "transactions"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex-1 text-center`}
              >
                <History className="h-5 w-5 inline-block mr-2" />
                Transactions
              </button>
            </nav>
          </div>
          <div className="px-4 py-5 sm:p-6">
            {activeTab === "overview" && renderOverviewTab()}
            {activeTab === "transactions" && renderTransactionsTab()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FarmerWallet2

