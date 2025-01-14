import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import DashboardLayout from './DashboardLayout';

const Layout = () => {
  return (
    <>

    <DashboardLayout>
      
      <Outlet />
    </DashboardLayout>

    {/* <div className="flex h-screen bg-gray-100">
    <Sidebar />
     
      <div className='flex flex-col w-full'>
      <TopBar  />
      <main className="flex-1 p-8 overflow-y-auto">

        <Outlet />
      </main>
      </div>
    </div> */}
    </>
  );
};

export default Layout;

