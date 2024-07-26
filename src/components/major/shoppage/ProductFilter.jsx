import React, { useState } from 'react';

const ProductFilter = ({ categories, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onFilterChange({ category: e.target.value, minPrice, maxPrice });
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
    onFilterChange({ category: selectedCategory, minPrice: e.target.value, maxPrice });
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
    onFilterChange({ category: selectedCategory, minPrice, maxPrice: e.target.value });
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8 flex flex-col space-y-4">
      <div>
        <label className="block text-lg font-medium mb-2">Categorie</label>
        <select value={selectedCategory} onChange={handleCategoryChange} className="p-2 rounded-lg shadow-md w-full">
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
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