import React from 'react';

const ConfirmationModal = ({ onClose, name, phone }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
        <h2 className="text-3xl font-bold mb-4">Commande soumise!</h2>
        <p className="text-lg mb-4">Merci, {name}. Votre commande a été soumise avec succès.</p>
        <p className="text-lg mb-4">Notre équipe vous contactera bientôt au {phone}.</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;