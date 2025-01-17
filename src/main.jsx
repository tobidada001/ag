import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OrderCompletedPage from './components/OrderCompleted';
import OTPVerification from './pages/OTPVerification';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const Reg = lazy(() => import('./pages/Reg'));
const Login = lazy(() => import('./pages/Login'));
const About = lazy(() => import('./pages/About'));
const DashboardRoutes = lazy(() => import('./pages/dashboard/DashboardRoutes'));
const Contact = lazy(() => import('./pages/Contact'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Wishlist = lazy(() => import('./pages/Wishlist'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Cart = lazy(() => import('./pages/Cart'));
const NotFound = lazy(() => import('./pages/NotFound'));

const Main = () => {
  const location = useLocation();

  // Check if the current route starts with /dashboard
  const isDashboardRoute = location.pathname.startsWith('/dashboard');

  return (
    <>
      {!isDashboardRoute && <Navbar />}
      
      {/* Wrap routes in Suspense to handle lazy loading */}
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Reg />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-completed" element={<OrderCompletedPage />} />
          <Route path="/verify-otp" element={<OTPVerification />} />
          <Route path="/dashboard/*" element={<DashboardRoutes />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      
      {!isDashboardRoute && <Footer />}
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="flex flex-col justify-between min-h-screen">
      <Router>
        <Main />
      </Router>
    </div>
  </StrictMode>
);
