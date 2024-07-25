// src/pages/LuxuriousShop.jsx
import React from 'react';
import ProductCard from './ProductCard';

import productImage from '../../assets/product.jpg'
const products = [
  { id: '1', name: 'Luxurious Product 1', category: 'Chaussures', price: 2499, imageUrl: productImage},
  { id: '2', name: 'Luxurious Product 2', category: 'Chaussures', price: 2499, imageUrl: productImage },
  { id: '3', name: 'Luxurious Product 3', category: 'Chaussures', price: 2499, imageUrl: productImage },
  { id: '4', name: 'Luxurious Product 3', category: 'Chaussures', price: 2499, imageUrl: productImage },  
  // Add more products as needed
];

const ListProduct = () => {
    return (
        <div className="container mx-auto my-8">
          <h1 className="text-3xl font-bold text-center mb-8">Our Luxurious Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {products.map(product => (
              <div key={product.id} className="flex justify-center">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      );
    };

export default ListProduct;