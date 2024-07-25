import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out hover:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
    >
      {children}
    </button>
  );
};

export default Button;