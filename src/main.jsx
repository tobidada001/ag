import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Register from './pages/Register';
import ProductDetail from './pages/ProductDetail';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Products from './pages/Products';
// import ContactUs from './pages/ContactUs';

const Main = () => (

  <Router>
    <Navbar />


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product-detail" element={<ProductDetail />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/cart" element={<Cart />} />
      {/* <Route path="/contact-us" element={<ContactUs />} /> */}
      {/* <Route path="/products" element={<Products />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>



    {/* Footer Section */}
  <Footer />
  </Router>
);


createRoot(document.getElementById('root')).render(

  <>
   {/* Navbar section */}
   

  <StrictMode>
    <Main />
    

  </StrictMode>

  
  </>,
)
