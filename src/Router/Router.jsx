import { Routes, Route } from 'react-router-dom';
import Product from '../Pages/Product';
import Services from '../Pages/Services';
import Contact from '../Pages/Contact';
import About from '../Pages/About';


const Router = () => {
  return (
    <Routes>
      <Route path="/Product" element={<Product />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
