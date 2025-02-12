import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/icons/agripathwaylogo.png'
import { Menu, X, Home, ShoppingCart, Package, User, ClipboardList, Search, Bell, User2, LogOut, GitGraph, DollarSign, Gift } from 'lucide-react';
import LogoutModal from '../../components/LogoutModal';
import Topbar from '../../components/Topbar';
import { useUserType } from '../../context/UserTypeContext';


const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  
  // const usertype = 'farmer';
  const { userType } = useUserType();

  const usertype = userType;

  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleLogout = () => {
    closeModal()
    navigate('/');
  }


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
        className={`bg-green-50 text-[#333333] w-64 min-h-screen p-4 fixed md:static md:translate-x-0 transition-all duration-300 ease-in-out z-50 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl flex items-center font-bold w-full text-center"><img src={logo} className="h-10  md:w-2/12"/>Agripathway</span>
          <button onClick={closeSidebar} className="md:hidden">
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col space-y-2">
          <CustomNavLink to="/dashboard" end={true} icon={<Home size={20} />} >Dashboard</CustomNavLink>
         {usertype==='farmer' && <CustomNavLink to="/dashboard/promotions" icon={<GitGraph size={20} />}>Promotions</CustomNavLink>}
          <CustomNavLink to="/dashboard/wallet" icon={<User size={20} />}>Wallet</CustomNavLink>
          {usertype==='farmer' &&  <CustomNavLink to="/dashboard/products" icon={<Package size={20} />}>Products</CustomNavLink> }
          <CustomNavLink to="/dashboard/orders"  icon={<ClipboardList size={20} />}>Orders</CustomNavLink>
          {usertype==='buyer' &&  <CustomNavLink to="/dashboard/wishlist" icon={<Gift size={20} />}>Wishlist</CustomNavLink> }

          <CustomNavLink to="/dashboard/transactions"  icon={<DollarSign size={20} />}>Transactions</CustomNavLink>
          <CustomNavLink to="/dashboard/profile" icon={<User2 size={20} />}>Profile</CustomNavLink>
        

          <button onClick={openModal} className={`flex items-center space-x-2 hover:bg-green-100 p-2 rounded-md transition  hover:text-gray-800  border-green-900`}>
              <LogOut className='text-red-600' size={20} /> <span>Logout</span>
        </button>
        </nav>

          <div className='absolute left-0 right-0 bottom-4 text-center'>
        <Link to={'/dashboard/profile'} className='py-1 px-3 mx-auto bg-green-200 text-sm rounded-xl font-semibold text-green-800'>Verified</Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">

          <Topbar toggleSidebar={toggleSidebar} openModal={openModal}/>


        {/* Top Bar
        <header className="bg-white shadow-md z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <button onClick={toggleSidebar} className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
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
        </header> */}

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto  md:px-6 ">
            {children}
          </div>
        </main>
      </div>


      {/* <LogoutModal isOpen={true} /> */}
      <LogoutModal isOpen={isModalOpen} onClose={closeModal} onLogout={handleLogout} />


      
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



const CustomNavLink = ({ to, icon, children, end = false }) => (
  <NavLink
    to={to} end={end}
    className={({ isActive }) =>
      `flex items-center space-x-2 hover:bg-green-100 p-2 rounded-md transition ${
        isActive ? 'text-gray-50 bg-green-500 hover:text-gray-800 border-l-4 border-green-900' : 'text-gray-900'
      }`
    }
  >
    {icon}
    <span>{children}</span>
  </NavLink>
);
export default DashboardLayout;

