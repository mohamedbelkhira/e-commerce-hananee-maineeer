import React from 'react';
import Router from './router/Router';
import './index.css';

import Navbar from './components/major/navbar/Navbar';
import Footer from './components/major/footer/Footer';
import Banner from './components/major/Banner';

import ListProduct from './components/common/ListProduct';
import ProductCarousel from './components/common/ProductCarousel';

const App = () => {
  return (
  
<div className="flex flex-col min-h-screen">
<Navbar />
<Banner />
<ProductCarousel />
      <Router />
<Footer />

    </div>
  );
};

export default App;