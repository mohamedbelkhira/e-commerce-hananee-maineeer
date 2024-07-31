import React, { useState, useContext } from 'react';
import CartContext from '../context/CartContext';
import CheckoutModal from '../components/major/CheckoutModal';
import Banner from '../components/major/Banner';
const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (cart.length === 0) {
    return (
      
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-700">Votre panier est vide.</h2>
      </div>
     
    );
  }

  return (
    <>
    <Banner />
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-12">Votre panier</h1>
      <div className="bg-custom-light-pink p-8 rounded-lg shadow-lg mb-12">
        <div className="grid grid-cols-1 gap-8">
          {cart.map((item, index) => (
            <div key={index} className="flex items-center bg-white p-6 rounded-lg shadow-md">
              <img src={item.imageUrl} alt={item.name} className="w-48 h-48 rounded-lg object-cover" />
              <div className="ml-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h2>
                <p className="text-xl text-gray-600 mb-1">Couleur: {item.color}</p>
                <p className="text-xl text-gray-600 mb-1">Quantité: {item.quantity}</p>
                <p className="text-xl text-gray-600 mb-1">Prix: {item.price} DA</p>
                <button
                  onClick={() => removeFromCart(item.id, item.color)}
                  className="mt-4 bg-red-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-red-600 transition duration-300"
                >
                  Retirer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-800">Total: {getTotalPrice()} DA</h2>
        <button
          className="bg-black text-2xl text-white px-10 py-4 rounded-full shadow-lg hover:bg-gray-900 transition duration-300"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>

      {isModalOpen && <CheckoutModal onClose={handleCloseModal} />}
    </div>
    </>
  );
};

export default CartPage;
