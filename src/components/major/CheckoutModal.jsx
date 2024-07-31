import React, { useState, useContext } from 'react';
import CartContext from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutModal = ({ onClose }) => {
  const { cart, setCart } = useContext(CartContext);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [wilaya, setWilaya] = useState('');
  const [commune, setCommune] = useState('');
  const [address, setAddress] = useState('');
  const [shippingCost, setShippingCost] = useState(0);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const wilayaShippingCost = { "Wilaya1": 100, "Wilaya2": 200 }; // Add actual shipping costs per Wilaya

  const cartTotalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalPrice = cartTotalPrice + shippingCost;

  const validateFields = () => {
    const newErrors = {};

    if (!fullName) newErrors.fullName = 'Nom complet est requis.';
    if (!phoneNumber) {
      newErrors.phoneNumber = 'Numéro de téléphone est requis.';
    } else if (!/^(05|06|07)\d{8}$/.test(phoneNumber)) {
      newErrors.phoneNumber = 'Numéro de téléphone invalide. Il doit commencer par 05, 06 ou 07 et contenir 10 chiffres.';
    }
    if (!wilaya) newErrors.wilaya = 'Wilaya est requise.';
    if (!commune) newErrors.commune = 'Commune est requise.';
    if (!address) newErrors.address = 'Adresse est requise.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirm = () => {
    if (validateFields()) {
      setCart([]); // Clear the cart
      navigate('/checkout-succeed');
    }
  };

  const handleWilayaChange = (e) => {
    const selectedWilaya = e.target.value;
    setWilaya(selectedWilaya);
    setShippingCost(wilayaShippingCost[selectedWilaya] || 0);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center p-4 overflow-y-auto">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-6">Finaliser la commande</h2>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Nom complet</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={`w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Numéro de téléphone</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className={`w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Wilaya</label>
          <select
            value={wilaya}
            onChange={handleWilayaChange}
            className={`w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.wilaya ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Sélectionner une wilaya</option>
            <option value="Wilaya1">Wilaya1</option>
            <option value="Wilaya2">Wilaya2</option>
            {/* Add more wilayas */}
          </select>
          {errors.wilaya && <p className="text-red-500 text-sm mt-1">{errors.wilaya}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Commune</label>
          <input
            type="text"
            value={commune}
            onChange={(e) => setCommune(e.target.value)}
            className={`w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.commune ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.commune && <p className="text-red-500 text-sm mt-1">{errors.commune}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Adresse</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={`w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-lg font-medium">Prix des articles:</p>
            <p className="text-lg font-bold">{cartTotalPrice} DA</p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-lg font-medium">Prix de livraison:</p>
            <p className="text-lg font-bold">{shippingCost} DA</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-lg font-medium">Prix total:</p>
            <p className="text-lg font-bold">{totalPrice} DA</p>
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
          >
            Annuler
          </button>
          <button
            onClick={handleConfirm}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Confirmer
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;