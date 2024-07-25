// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'; // Adjust the path as needed
import cartIcon from '../../../assets/shopping-cart.png'; // Adjust the path as needed

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <Link to="/">
        <img src={logo} alt="Logo" className="h-12" /> {/* Imported logo */}
      </Link>
      <div className="flex items-center ml-auto">
        <nav className="hidden md:flex items-center space-x-8 text-lg"> {/* Hide on mobile, show on desktop */}
          <Link to="/" className="hover:text-gray-300">Accueil</Link>
          <Link to="/about" className="hover:text-gray-300">A Propos</Link>
          <Link to="/shop" className="hover:text-gray-300">Boutique</Link>
        </nav>
        <Link to="/cart" className="hover:text-gray-300 ml-4"> {/* Added margin-left for spacing */}
          <img src={cartIcon} alt="Cart" className="h-6 w-6" /> {/* Imported cart icon */}
        </Link>
        <button className="md:hidden ml-4" onClick={toggleSidebar}> {/* Show on mobile, hide on desktop */}
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Sidebar for mobile */}
      <div className={`fixed inset-0 top-16 bg-black bg-opacity-75 z-50 flex flex-col space-y-4 p-8 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden`}>
        <button className="self-end" onClick={toggleSidebar}>
          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <Link to="/" className="hover:text-gray-300" onClick={toggleSidebar}>Accueil</Link>
        <Link to="/about" className="hover:text-gray-300" onClick={toggleSidebar}>A Propos</Link>
        <Link to="/shop" className="hover:text-gray-300" onClick={toggleSidebar}>Boutique</Link>
      </div>
    </header>
  );
};

export default Navbar;