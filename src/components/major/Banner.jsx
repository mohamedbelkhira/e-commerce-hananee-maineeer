// src/components/Banner.tsx
import React from 'react';
import bannerImage from '../../assets/slides.jpg'; // Adjust the path as needed

const Banner = () => {
  return (
    <div className="relative w-full flex justify-center mt-4">
      <div className="relative w-full max-w-6xl overflow-hidden">
        <img
          src={bannerImage}
          alt="Banner"
          className="object-cover w-full h-64 md:h-96"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="text-white px-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">Welcome to Our Shop</h1>
            <p className="text-sm md:text-lg">Discover our latest collection of elegant and original fashion items.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
