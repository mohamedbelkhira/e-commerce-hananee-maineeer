import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/major/Banner';

const CheckoutSucceed = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <>
      <Banner />
      <div className="container  mx-auto py-16">
        <div className="bg-custom-light-pink p-8 rounded-lg shadow-lg text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Commande confirmée</h2>
          <p className="text-lg mb-4">Votre commande a été soumise avec succès et notre équipe vous contactera bientôt au numéro de téléphone que vous avez fourni.</p>
          <p className="text-lg font-bold mb-6">Merci beaucoup!</p>
          <button
            onClick={handleGoHome}
            className="bg-black text-lg text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Retour à la page d'accueil
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckoutSucceed;