// router/index.jsx
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Shop from '../pages/Shop';
import ProductDetailPage from '../pages/ProductDetailPage';
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />7
      <Route path="/product/:id" element={<ProductDetailPage />} />
      {/* Add more routes here */}
    </Routes>
  );
};

export default Router;