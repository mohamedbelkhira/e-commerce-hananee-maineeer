import React, { useState, useEffect } from 'react';
import ProductFilter from './ProductFilter';
import ProductList from './ProductList';

// Sample products data

import productImage1 from '../../../assets/product.jpg';
import productImage2 from '../../../assets/model2.jpeg';
import productImage3 from '../../../assets/model3.jpeg';
import productImage4 from '../../../assets/produt_jaune.jpg';

const sampleProducts = [
  { id: '1', name: 'Luxurious Product 1', category: 'Chaussures', price: 2499, imageUrl: productImage1 },
  { id: '2', name: 'Luxurious Product 2', category: 'Chaussures', price: 2499, imageUrl: productImage2 },
  { id: '3', name: 'Luxurious Product 3', category: 'Vetments', price: 2499, imageUrl: productImage3 },
  { id: '4', name: 'Luxurious Product 4', category: 'Chaussures', price: 2499, imageUrl: productImage4 },
  { id: '5', name: 'Luxurious Product 1', category: 'Chaussures', price: 2499, imageUrl: productImage1 },
  { id: '6', name: 'Luxurious Product 2', category: 'Chaussures', price: 2499, imageUrl: productImage2 },
  { id: '7', name: 'Luxurious Product 3', category: 'Vetments', price: 2499, imageUrl: productImage3 },
  { id: '8', name: 'Luxurious Product 4', category: 'Vetments', price: 2499, imageUrl: productImage4 },
        
  // Add more products as needed
];

const ProductDisplay = () => {
  const [products, setProducts] = useState(sampleProducts);
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);

  const categories = [...new Set(sampleProducts.map(product => product.category))];

  const handleFilterChange = (filters) => {
    let filtered = products;

    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    if (filters.minPrice) {
      filtered = filtered.filter(product => product.price >= filters.minPrice);
    }

    if (filters.maxPrice) {
      filtered = filtered.filter(product => product.price <= filters.maxPrice);
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <div className="flex flex-col md:flex-row container mx-auto px-4 py-8 space-y-8 md:space-y-0 md:space-x-8">
      <div className="md:w-1/4">
        <ProductFilter categories={categories} onFilterChange={handleFilterChange} />
      </div>
      <div className="md:w-3/4">
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductDisplay;