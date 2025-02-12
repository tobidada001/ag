"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, Search, Bell, User, LogOut, Settings } from "lucide-react"
import { Link } from "react-router-dom"

const Topbar = ({ toggleSidebar, openModal }) => {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const notificationRef = useRef(null)
  const profileRef = useRef(null)

  const notifications = [
    { id: 1, message: "New crop price update available", time: "5m ago" },
    { id: 2, message: "Weather alert: Heavy rain expected", time: "1h ago" },
    { id: 3, message: "New buyer interested in your produce", time: "2h ago" },
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false)
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications)
    setShowProfileMenu(false)
  }

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu)
    setShowNotifications(false)
  }

  return (
    <header className="bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <Menu size={24} />
            </button>
          </div>

          <div className="hidden sm:block flex-grow max-w-md mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative" ref={notificationRef}>
              <button
                onClick={toggleNotifications}
                className="p-2 rounded-full text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <Bell size={20} />
              </button>
              {showNotifications && (
                <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {notifications.map((notification) => (
                      <a
                        key={notification.id}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        <p className="font-medium">{notification.message}</p>
                        <p className="text-xs text-gray-500">{notification.time}</p>
                      </a>
                    ))}
                    <Link
                      to="/dashboard/notifications"
                      className="block px-4 py-2 text-sm text-green-600 hover:bg-gray-100"
                      role="menuitem"
                    >
                      View all notifications
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="ml-3 relative" ref={profileRef}>
              <div>
                <button
                  onClick={toggleProfileMenu}
                  className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <span className="sr-only">Open user menu</span>
                  <User size={32} className="bg-gray-300 p-1 rounded-full text-gray-600" />
                </button>
              </div>
              {showProfileMenu && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Link to={'/dashboard/profile'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    <Settings className="inline-block mr-2" size={16} />
                    Settings
                  </Link>


                  <Link to={''} onClick={openModal} className="block w-auto px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    <LogOut className="inline-block mr-2" size={16} />
                    Logout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Topbar

