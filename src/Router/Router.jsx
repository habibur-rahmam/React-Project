import { Routes, Route } from 'react-router-dom';
import Product from '../Pages/AllProduct';
import SingleProduct from '../Pages/SingleProduct';
import About from '../Pages/About';
import Contact from '../Pages/Contact';


const Router = () => {
  return (
    <Routes>
      <Route path="/Product" element={<Product />} />
      <Route path="/SingleProduct" element={<SingleProduct />} />
      <Route path="/about" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
