import productImage1 from '../assets/product.jpg';
import productImage2 from '../assets/model2.jpeg';
import productImage3 from '../assets/model3.jpeg';
import productImage4 from '../assets/produt_jaune.jpg';
import productImage1Color1 from '../assets/product.jpg';
import productImage1Color2 from '../assets/product.jpg';

// Special for product 1
import florabeige from '../assets/modelbeige.jpg';
import floraorange from '../assets/modelorange.jpg';
import florarose from '../assets/modelrose.jpg';
import florableu from '../assets/modelbleu.jpg';
//blue : 8EADC9
const products = [
  {
    id: '1',
    name: 'Flora',
    category: 'Chaussures',
    price: 2499,
    description: 'Découvrez nos mules plates ouvertes, ornées d\'un motif floral délicatement brodé. Ce modèle, à la fois confortable et polyvalent, vous accompagne au quotidien tout en ajoutant une touche d\'originalité à votre style',
    colors: [
      { color: 'Black', hex: '#000000', imageUrl: productImage1Color1 },
      { color: 'Blue', hex: '#8EADC9', imageUrl: florableu },
      { color: 'Beige', hex: '#FDD8A9', imageUrl: florabeige },
      { color: 'Orange', hex: '#FDA01F', imageUrl: floraorange },
      { color: 'Pink', hex: '#FD73A2', imageUrl: florarose },
      
    ],
    imageUrl: productImage1,
  },
  {
    id: '2',
    name: 'Luxurious Product 2',
    category: 'Chaussures',
    price: 2499,
    description: 'Description for Luxurious Product 2',
    colors: [
      { color: 'Black', hex: '#000000', imageUrl: productImage2 },
    ],
    imageUrl: productImage2,
  },
  {
    id: '3',
    name: 'Luxurious Product 3',
    category: 'Chaussures',
    price: 2499,
    description: 'Description for Luxurious Product 3',
    colors: [
      { color: 'Green', hex: '#008000', imageUrl: productImage3 },
    ],
    imageUrl: productImage3,
  },
  {
    id: '4',
    name: 'Luxurious Product 4',
    category: 'Chaussures',
    price: 2499,
    description: 'Description for Luxurious Product 4',
    colors: [
      { color: 'Yellow', hex: '#FFFF00', imageUrl: productImage4 },
    ],
    imageUrl: productImage4,
  },
  // Add more products as needed
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500); // Simulate a network delay
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(p => p.id === id);
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Product not found'));
      }
    }, 500); // Simulate a network delay
  });
};
