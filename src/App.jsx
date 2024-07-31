import React from 'react';
import Router from './router/Router';
import './index.css';

import Navbar from './components/major/navbar/Navbar';
import Footer from './components/major/footer/Footer';

import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
      <Navbar />
      <Router />
      <Footer />
      <ToastContainer />
      </div>
    </CartProvider>
  );
};

export default App;