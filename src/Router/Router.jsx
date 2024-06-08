import { Routes, Route } from 'react-router-dom';
import Product from '../Pages/AllProduct';
import SingleProduct from '../Pages/SingleProduct';
import Catagory from '../Pages/Catagory'
import Contact from '../Pages/Contact';

const Router = () => {
  return (
    <Routes>
      <Route path="/AllProduct" element={<Product />} />
      <Route path="/SingleProduct" element={<SingleProduct />} />
      <Route path="/Catagory" element={<Catagory />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
