import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, ShoppingCart, Package, User, ClipboardList, LogOut } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Mobile Menu Icon */}
      <div className="md:hidden p-4">
        <button onClick={toggleSidebar} aria-label="Toggle Sidebar">
          {isOpen ? <X size={24} className="text-green-600" /> : <Menu size={24} className="text-green-600" />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full bg-green-600 text-white z-50 w-64 transform md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}
      >
        {/* Sidebar Header */}
        <div className="p-4 text-xl font-bold border-b border-green-500 flex justify-between items-center md:block">
          Agripathway
          <button
            onClick={closeSidebar}
            className="md:hidden"
            aria-label="Close Sidebar"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-2 p-4">
          <Link
            to="/dashboard"
            className="flex items-center hover:bg-green-500 p-2 rounded-md transition"
            onClick={closeSidebar} // Close sidebar on navigation
          >
            <Home size={20} className="mr-2" />
            Dashboard
          </Link>
          <Link
            to="/dashboard/products"
            className="flex items-center hover:bg-green-500 p-2 rounded-md transition"
            onClick={closeSidebar}
          >
            <Package size={20} className="mr-2" />
            Products
          </Link>
          <Link
            to="/dashboard/orders"
            className="flex items-center hover:bg-green-500 p-2 rounded-md transition"
            onClick={closeSidebar}
          >
            <ClipboardList size={20} className="mr-2" />
            Orders
          </Link>
          <Link
            to="/dashboard/farmers"
            className="flex items-center hover:bg-green-500 p-2 rounded-md transition"
            onClick={closeSidebar}
          >
            <User size={20} className="mr-2" />
            Farmers
          </Link>
          <Link
            to="/dashboard/profile"
            className="flex items-center hover:bg-green-500 p-2 rounded-md transition"
            onClick={closeSidebar}
          >
            <ShoppingCart size={20} className="mr-2" />
            Profiles
          </Link>

          {/* <Link
            to="/dashboard/logout"
            className="flex items-center hover:bg-green-500 p-2 rounded-md transition"
            onClick={closeSidebar}
          >
            <LogOut size={20} className="mr-2" />
            Logout
          </Link> */}
        </nav>
      </div>

      {/* Backdrop for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

   
    </div>
  );
};

export default Sidebar;
