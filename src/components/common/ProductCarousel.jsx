import React from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import productImage from '../../assets/product.jpg';

// Import slick-carousel CSS directly in the JavaScript file
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Button from './Button';
const products = [
  { id: '1', name: 'Luxurious Product 1', category: 'Chaussures', price: 2499, imageUrl: productImage },
  { id: '2', name: 'Luxurious Product 2', category: 'Chaussures', price: 2499, imageUrl: productImage },
  { id: '3', name: 'Luxurious Product 3', category: 'Chaussures', price: 2499, imageUrl: productImage },
  { id: '4', name: 'Luxurious Product 4', category: 'Chaussures', price: 2499, imageUrl: productImage },
  { id: '5', name: 'Luxurious Product 5', category: 'Chaussures', price: 2499, imageUrl: productImage },
  { id: '6', name: 'Luxurious Product 6', category: 'Chaussures', price: 2499, imageUrl: productImage },
  // Add more products as needed
];

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4, // Set slidesToScroll to the same value as slidesToShow
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3, // Match slidesToScroll with slidesToShow
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, // Match slidesToScroll with slidesToShow
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, // Match slidesToScroll with slidesToShow
        }
      }
    ]
  };

  return (
    <div className="container mx-auto my-8">
     <div className="text-center mb-8">
        <h2 className="text-gray-500 text-lg mb-2 relative flex items-center justify-center">
          <span className="flex-grow border-t border-gray-300 mx-4"></span>
          Derniers produits
          <span className="flex-grow border-t border-gray-300 mx-4"></span>
        </h2>
        <h1 className="text-3xl font-bold">Nouveaux arrivages</h1>
      </div>
       <Slider {...settings} className="mx-4">
        {products.map(product => (
          <div key={product.id} className="px-2">
            <ProductCard {...product} />
          </div>
        ))}
      </Slider>
      <div className="text-center mt-16">
        <Button onClick={() => console.log('View More clicked')}>View More</Button>
      </div>
    </div>
  );
};

export default ProductCarousel;
