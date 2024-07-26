import React from 'react';
import Banner from '../components/major/Banner';
import TitleSection from '../components/major/shoppage/TitleSection';
import ProductDetail from './ProductDetail';



const ProductDetailPage = () => {
  return (
    <div className="home">
      
      
    <Banner />  
    <TitleSection />
    <ProductDetail />
   
    </div>
  );
};

export default ProductDetailPage;