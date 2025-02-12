import { Bell } from "lucide-react"

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      message: "New order received for 100kg of corn",
      time: "10 minutes ago",
      category: "Order",
    },
    {
      id: 2,
      message: "Weather alert: Heavy rain expected in your region tomorrow",
      time: "1 hour ago",
      category: "Alert",
    },
    {
      id: 3,
      message: "Your product listing for tomatoes has been approved",
      time: "2 hours ago",
      category: "Product",
    },
    {
      id: 4,
      message: "New message from buyer regarding your wheat offer",
      time: "1 day ago",
      category: "Message",
    },
    {
      id: 5,
      message: "Reminder: Complete your profile to attract more buyers",
      time: "2 days ago",
      category: "Reminder",
    },
  ]

  const getCategoryColor = (category) => {
    switch (category) {
      case "Order":
        return "text-green-600 bg-green-100"
      case "Alert":
        return "text-red-600 bg-red-100"
      case "Product":
        return "text-blue-600 bg-blue-100"
      case "Message":
        return "text-yellow-600 bg-yellow-100"
      case "Reminder":
        return "text-purple-600 bg-purple-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-semibold mb-6">Notifications</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <ul className="divide-y divide-gray-200">
          {notifications.map((notification) => (
            <li key={notification.id}>
              <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                <div className="flex items-center">
                  <div
                    className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${getCategoryColor(notification.category)}`}
                  >
                    <Bell className="h-5 w-5" />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">{notification.message}</p>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getCategoryColor(notification.category)}`}
                        >
                          {notification.category}
                        </p>
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{notification.time}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Notifications

