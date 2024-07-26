import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'; // Adjust the path as needed
import InstagramIcon from '../../../assets/icons/instagram.png'; // Adjust the path as needed
import PhoneIcon from '../../../assets/icons/smartphone-call.png'; // Adjust the path as needed

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center md:space-x-4 w-full md:w-auto">
          <img src={logo} alt="Logo" className="h-24 mb-4 md:mb-0" />
          
        </div>

        <div className="flex flex-col justify-center items-center md:items-start flex-grow md:flex-grow-0">
            <p className="text-xl text-center md:text-left max-w-md">
              Notre objectif est d’habiller chaque femme avec élégance et originalité, en mettant
              l'accent sur la qualité à chaque étape.
            </p>
          </div>
        <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
          <nav className="flex flex-row text-xl items-center space-x-6 mb-4 md:mb-0">
            <Link to="/" className="hover:text-gray-300">Accueil</Link>
            <Link to="/about" className="hover:text-gray-300">A Propos</Link>
            <Link to="/shop" className="hover:text-gray-300">Boutique</Link>
          </nav>
          <div className="text-center md:text-left text-xl pt-4">
            <h3 className="font-semibold mb-2">Contactez nous</h3>
            <div className="flex items-center space-x-2">
              <img src={InstagramIcon} alt="Instagram" className="h-6 w-6" />
              <span>test_nom_insta</span>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <img src={PhoneIcon} alt="Phone" className="h-6 w-6" />
              <span>0540554611</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;