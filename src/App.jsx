import React from 'react';
import Router from './router/Router';
import './index.css';

import Navbar from './components/major/navbar/Navbar';
import Footer from './components/major/footer/Footer';
import Banner from './components/major/Banner';
const App = () => {
  return (
  
<div className="flex flex-col min-h-screen">
<Navbar />
<Banner />
      <Router />
<Footer />

    </div>
  );
};

export default App;