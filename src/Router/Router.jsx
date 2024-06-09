import { Routes, Route } from 'react-router-dom';
import Product from '../Pages/Home'; 
import Home from '../Pages/Home';
const Router = () => {
  return (
    <Routes>
      <Route path="/AllProduct" element={<Product />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
};

export default Router;
