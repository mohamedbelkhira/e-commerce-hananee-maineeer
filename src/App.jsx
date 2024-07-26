import React from 'react';
import Router from './router/Router';
import './index.css';

import Navbar from './components/major/navbar/Navbar';
import Footer from './components/major/footer/Footer';
import Banner from './components/major/Banner';

import LatestProductsSection from './components/common/LatestProductsSection';
import PopularProductsSection from './components/common/PopularProductsSection';
import WhyUsSection from './components/common/WhyUsSection';
import ClientReviewsSection from './components/common/ClientReviewsSection';


const App = () => {
  return (
  
<div className="flex flex-col min-h-screen">
<Navbar />
<Banner />
<LatestProductsSection />
<PopularProductsSection />
<WhyUsSection />
<ClientReviewsSection/>
      <Router />
<Footer />

    </div>
  );
};

export default App;