import React from 'react';
import Router from './router/Router';
import './index.css';

import Navbar from './components/major/navbar/Navbar';
import Footer from './components/major/footer/Footer';



const App = () => {
  return (
  
<div className="flex flex-col min-h-screen">
<Navbar />

      <Router />
<Footer />

    </div>
  );
};

export default App;