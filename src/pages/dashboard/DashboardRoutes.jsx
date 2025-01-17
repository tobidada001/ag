import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './Dashboard';
import OrdersList from './OrdersList';
import OrderDetails from './OrderDetails';
import Inventory from './Inventory';
import Messages from './Messages';
import Profile from './Profile';
import Help from './Help';
import Reports from './Reports';
import Sidebar from './Sidebar';
import NotFound from '../NotFound';
import Products from './Products';

function DashboardRoutes() {
  return (
    // <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='products' element={<Products />} />
          <Route path='sort' element={<Sidebar />} />
          <Route path="orders" element={<OrdersList />} />
          <Route path="orders/:id" element={<OrderDetails />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="messages" element={<Messages />} />
          <Route path="reports" element={<Reports />} />
          <Route path="profile" element={<Profile />} />
          <Route path="help" element={<Help />} />
          <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>
    // </Router>
  );
}

export default DashboardRoutes;

