import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import Sidebar from './Sidebar';
import TopBar from './TopBar';
import DashboardLayout from './DashboardLayout';

const Layout = () => {
  return (
    <>

    <DashboardLayout>
      
      <Outlet />
    </DashboardLayout>

    
    </>
  );
};

export default Layout;

