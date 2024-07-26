import React from 'react';
import Banner from '../components/major/Banner';
import TitleSection from '../components/major/shoppage/TitleSection';
import ProductDisplay from '../components/major/shoppage/ProductDisplay';



const Shop = () => {
  return (
    <div className="home">
      <Banner />
      <TitleSection />
    <ProductDisplay />
   
    </div>
  );
};

export default Shop;