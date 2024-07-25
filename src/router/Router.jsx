// router/index.jsx
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* Add more routes here */}
    </Routes>
  );
};

export default Router;