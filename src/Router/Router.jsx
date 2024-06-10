import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Layout from '../Layout/Layout';
import SingleProduct from '../Pages/Product/SingleProduct';
import Category from './../Pages/Category';
import SingleCategory from '../Pages/SingleCategory';

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="category" element={<Category />} />
        <Route path='/all-category/:singleCategory' element={<SingleCategory />}/>
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
    </Layout>
  );
};

export default Router;
