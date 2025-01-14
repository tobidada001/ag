import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, ShoppingCart, Package, User, ClipboardList, Search, Bell, User2 } from 'lucide-react';

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-green-600 text-white w-64 min-h-screen p-4 fixed md:static md:translate-x-0 transition-all duration-300 ease-in-out z-50 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-bold">Agripathway</span>
          <button onClick={closeSidebar} className="md:hidden">
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col space-y-2">
          <NavLink to="/dashboard" icon={<Home size={20} />}>Dashboard</NavLink>
          <NavLink to="/dashboard/products" icon={<Package size={20} />}>Products</NavLink>
          <NavLink to="/dashboard/orders" icon={<ClipboardList size={20} />}>Orders</NavLink>
          {/* <NavLink to="/dashboard/farmers" icon={<User size={20} />}>Farmers</NavLink> */}
          <NavLink to="/dashboard/profile" icon={<User2 size={20} />}>Profile</NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white shadow-md z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <button onClick={toggleSidebar} className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                  <Menu size={24} />
                </button>
                {/* <div className="hidden md:block">
                  <span className="text-xl font-bold text-green-600">Agripathway</span>
                </div> */}
              </div>

              {/* Search Bar */}
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

              {/* User Profile and Notifications */}
              <div className="flex items-center">
                <button className="p-2 rounded-full text-gray-400 hover:bg-gray-100">
                  <Bell size={20} />
                </button>
                <div className="ml-3 relative">
                  <div className="flex items-center">
                    <button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                      <span className="sr-only">Open user menu</span>
                      <User size={32} className="bg-gray-300 p-1 rounded-full text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>

      {/* Backdrop for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}
    </div>
  );
};

const NavLink = ({ to, icon, children }) => (
  <Link
    to={to}
    className="flex items-center space-x-2 hover:bg-green-500 p-2 rounded-md transition"
  >
    {icon}
    <span>{children}</span>
  </Link>
);

export default DashboardLayout;

