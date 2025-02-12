import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Footer from './components/Footer';
import OrderCompletedPage from './components/OrderCompleted';
import OTPVerification from './pages/auth/OTPVerification';
import LoadingSpinner from './components/LoadingSpinner';
import { SidebarProvider } from './context/SidebarContext';
import Navbar from './components/Navbar';
import { UserTypeProvider } from './context/UserTypeContext';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const Register = lazy(() => import('./pages/auth/Register'));
const Login = lazy(() => import('./pages/auth/Login'));
const About = lazy(() => import('./pages/About'));
const DashboardRoutes = lazy(() => import('./pages/dashboard/DashboardRoutes'));
const Contact = lazy(() => import('./pages/Contact'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Checkout = lazy(() => import('./pages/orders/Checkout'));
const Cart = lazy(() => import('./pages/orders/Cart'));
const OrderTracking = lazy(() => import('./pages/orders/OrderTracking'));
const LiveChat = lazy(() => import('./pages/LiveChat'));
const NotFound = lazy(() => import('./pages/NotFound'));

const Main = () => {
  const location = useLocation();

  // Check if the current route starts with /dashboard
  const isDashboardRoute = location.pathname.startsWith('/dashboard');

  return (
    <>
      <SidebarProvider>
      {!isDashboardRoute && <Navbar />}
   

      
      {/* Wrap routes in Suspense to handle lazy loading */}
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-completed" element={<OrderCompletedPage />} />
          <Route path="/verify-otp" element={<OTPVerification />} />
          <Route path="/dashboard/*" element={<DashboardRoutes />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route path="/chat" element={<LiveChat />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {!isDashboardRoute && <Footer />}
      </SidebarProvider>
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <UserTypeProvider>
    <div className="flex flex-col justify-between min-h-screen">
      <Router>
        <Main />
      </Router>
    </div>
    </UserTypeProvider>
  </StrictMode>
);
