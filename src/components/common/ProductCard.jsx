import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, category, price, imageUrl }) => {
  return (
    <div className="relative max-w-xs md:max-w-sm bg-custom-light-pink rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-lg group">
      <div className="relative">
        <img className="w-full h-48 md:h-56 lg:h-64 object-cover" src={imageUrl} alt={name} />
        <div className="absolute bottom-0 left-0 right-0 px-6 py-4 transform opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full transition-all duration-500">
          <Link to={`/product/${id}`} className="block bg-black text-white text-center w-auto px-6 py-2 mx-auto rounded">
            View Product
          </Link>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="text-gray-400 text-sm font-semibold">{category}</div>
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{price.toFixed(2)} DA</p>
      </div>
    </div>
  );
};

export default ProductCard;