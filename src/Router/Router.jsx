import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Services from '../Pages/Services';
import Product from '../Pages/Product';
import Contact from '../Pages/Contact';
import About from '../Pages/About';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/product" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
