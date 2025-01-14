import React from 'react';
import { Search, Bell, User } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-white shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-green-600">Agripathway</span>
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
    </div>
  );
};

export default TopBar;

