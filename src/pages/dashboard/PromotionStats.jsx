import { useState, useEffect } from "react"
import { Line, Bar, Doughnut } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Link } from "react-router-dom"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend)

const PromotionStats = () => {
  const [promotions, setPromotions] = useState([])
  const [selectedPromotion, setSelectedPromotion] = useState(null)
  const [dateRange, setDateRange] = useState("week")

  useEffect(() => {
    // Fetch promotions data
    const fetchPromotions = async () => {
      // Replace with your API call
    
      const data = [{'id' : 0, 'name' : 'Sponsored'}, 
        {'id' : 1, 'name': 'Flash sale'}, 
        {'id': 2, 'name': 'Best-selling'},
        {'id': 3, 'name': 'Featured'}
      ]



    //   const response = await fetch("/api/promotions")
    //   const data = await response.json()
      setPromotions(data)
      setSelectedPromotion(data[0])
    }

    fetchPromotions()
  }, [])

  const lineChartData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "Views",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Clicks",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
    ],
  }

  const barChartData = {
    labels: ["Rice", "Beans", "Cashew", "Mango", "Vegetable Oil"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  }

 

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
     <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold ">Promotion Statistics</h1>
        <Link to={'/dashboard/promotions/add'} className="bg-green-600 text-white font-medium py-2 px-5 rounded-lg" >Add New</Link>
    </div>
      <div className="bg-white p-6 my-10 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-100 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-blue-800">2,345</p>
              <p className="text-sm text-blue-600">Total Views</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-green-800">1,234</p>
              <p className="text-sm text-green-600">Total Clicks</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-yellow-800">4.5%</p>
              <p className="text-sm text-yellow-600">Conversion Rate</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-purple-800">₦500,678</p>
              <p className="text-sm text-purple-600">Total Revenue</p>
            </div>
          </div>
        </div>

      <div className="mb-8 flex justify-between items-center">
        <select
          value={selectedPromotion?.id || ""}
          onChange={(e) => setSelectedPromotion(promotions.find((p) => p.id === e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {promotions.map((promotion) => (
            <option key={promotion.id} value={promotion.id}>
              {promotion.name}
            </option>
          ))}
        </select>
        <div>
          <button
            onClick={() => setDateRange("week")}
            className={`px-4 py-2 rounded-l-md ${dateRange === "week" ? "bg-green-600 text-white" : "bg-gray-200"}`}
          >
            Week
          </button>
          <button
            onClick={() => setDateRange("month")}
            className={`px-4 py-2 rounded-r-md ${dateRange === "month" ? "bg-green-600 text-white" : "bg-gray-200"}`}
          >
            Month
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Performance Over Time</h2>
          <Line data={lineChartData} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Top Selling Products</h2>
          <Bar data={barChartData} />
        </div>
       
      </div>
    </div>
  )
}

export default PromotionStats

