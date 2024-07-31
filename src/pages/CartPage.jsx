import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-700">Votre panier est vide.</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-12">Votre panier</h1>
      <div className="grid grid-cols-1 gap-8 mb-12">
        {cart.map((item, index) => (
          <div key={index} className="flex items-center bg-white p-6 rounded-lg shadow-lg">
            <img src={item.imageUrl} alt={item.name} className="w-24 h-24 rounded-lg object-cover" />
            <div className="ml-6">
              <h2 className="text-2xl font-bold text-gray-800">{item.name}</h2>
              <p className="text-lg text-gray-600">Couleur: {item.color}</p>
              <p className="text-lg text-gray-600">Quantité: {item.quantity}</p>
              <p className="text-lg text-gray-600">Prix: {item.price} DA</p>
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
      <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-800">Total: {getTotalPrice()} DA</h2>
        <button
          className="bg-black text-2xl text-white px-10 py-4 rounded-full shadow-lg hover:bg-gray-900 transition duration-300"
          onClick={() => alert('Proceed to checkout')}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;