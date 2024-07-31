import React, { useState } from 'react';

const ProductFilter = ({ categories, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onFilterChange({ category, minPrice, maxPrice });
  };

  const handleMinPriceChange = (e) => {
    const price = e.target.value;
    setMinPrice(price);
    onFilterChange({ category: selectedCategory, minPrice: price, maxPrice });
  };

  const handleMaxPriceChange = (e) => {
    const price = e.target.value;
    setMaxPrice(price);
    onFilterChange({ category: selectedCategory, minPrice, maxPrice: price });
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8 flex flex-col space-y-4">
      <div>
        <label className="block text-lg font-medium mb-2">Categorie</label>
        <div className="flex flex-col space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              value=""
              checked={selectedCategory === ''}
              onChange={handleCategoryChange}
              className="mr-2"
            />
            All Categories
          </label>
          {categories.map((category, index) => (
            <label key={index} className="flex items-center">
              <input
                type="radio"
                value={category}
                checked={selectedCategory === category}
                onChange={handleCategoryChange}
                className="mr-2"
              />
              {category}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-lg font-medium mb-2">Prix min</label>
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={handleMinPriceChange}
          className="p-2 rounded-lg shadow-md w-full"
        />
      </div>
      <div>
        <label className="block text-lg font-medium mb-2">Prix max</label>
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="p-2 rounded-lg shadow-md w-full"
        />
      </div>
    </div>
  );
};

export default ProductFilter;