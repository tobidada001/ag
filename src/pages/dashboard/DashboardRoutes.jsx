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
import FarmerWallet from './FarmerWallet';
import FarmerBankDetails from './FarmerBankDetails';
import PromotionStats from './PromotionStats';
import AddPromotion from './AddPromotion';
import BuyerOrdersList from './BuyersOrderList';
import Transactions from './Transactions';
import BankAccounts from './BankAccounts';



function DashboardRoutes() {
  const usertype = localStorage.getItem('usertype');

  return (
    // <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='wallet' element={<FarmerWallet />} />
          <Route path='transactions' element={<Transactions />} />

          {usertype === 'farmer' && (
          <>
          <Route path='products' element={<Products />} />
          {/* <Route path='bank' element={<BankAccounts />} /> */}
          <Route path='promotions' element={<PromotionStats />} />
          <Route path='promotions/add' element={<AddPromotion />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path='link-bank-account' element={<BankAccounts />} />
          <Route path="reports" element={<Reports />} />
          </>
          )
        }

  
          <Route path='sort' element={<Sidebar />} />
          <Route path="orders" element={usertype === 'farmer' ? <OrdersList /> : <BuyerOrdersList /> } />
          <Route path="orders/:id" element={<OrderDetails />} />
          <Route path="messages" element={<Messages />} />
          <Route path="profile" element={<Profile />} />
          <Route path="help" element={<Help />} />
          <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>
    // </Router>
  );
}

export default DashboardRoutes;

