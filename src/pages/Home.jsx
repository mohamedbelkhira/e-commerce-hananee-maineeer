import React from 'react';
import Banner from '../components/major/Banner';
import LatestProductsSection from '../components/major/LatestProductsSection';
import PopularProductsSection from '../components/major/PopularProductsSection';
import WhyUsSection from '../components/major/WhyUsSection';
import ClientReviewsSection from '../components/major/ClientReviewsSection';
const Home = () => {
  return (
    <div className="home">
      <Banner />
    
    <LatestProductsSection />
    <PopularProductsSection />
    <WhyUsSection />
    <ClientReviewsSection /> 
    </div>
  );
};

export default Home;