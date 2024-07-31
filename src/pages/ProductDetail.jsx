import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/ProductService';
import ShoppingCart from '../assets/shopping-cart.png';
import CartContext from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    getProductById(id).then((product) => {
      setProduct(product);
      setSelectedColor(product.colors[0]);
    }).catch((error) => {
      console.error(error);
    });
  }, [id]);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      color: selectedColor.color,
      quantity,
      price: product.price,
      imageUrl: selectedColor.imageUrl,
    });
  };

  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 text-center md:text-left">
          <img src={selectedColor.imageUrl} alt={product.name} className="rounded-lg shadow-lg max-w-xs md:max-w-full" />
        </div>
        <div className="md:w-1/2 md:pl-8 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-bold text-gray-900 mb-4">Prix : {product.price} DA</p>
        
          <h3 className="text-xl font-semibold mb-2">Description:</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">{product.description}</p>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-5">Couleurs disponibles :</h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-10">
              {product.colors.map((colorOption, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(colorOption)}
                  className={`flex items-center justify-center p-2 rounded-full w-14 h-14 border-2 shadow-md transition-transform duration-300 ${selectedColor.color === colorOption.color ? 'border-gray-800 transform scale-110' : 'border-transparent'}`}
                >
                  <span
                    className="w-8 h-8 rounded-full"
                    style={{ backgroundColor: colorOption.hex }}
                  />
                </button>
              ))}
            </div>
            <div className="flex items-center mb-4">
              <label htmlFor="quantity" className="text-lg font-semibold mr-2">Quantité:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-20 p-2 rounded-lg shadow-md text-center"
              />
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-black text-2xl mt-10 text-white flex items-center justify-center px-8 py-4 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300 w-full md:w-auto"
            >
             Ajouter au panier 
             <span>  </span>
             <img src={ShoppingCart} alt="Cart" className="ml-5 h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;