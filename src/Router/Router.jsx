import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Layout from '../Layout/Layout';
import SingleProduct from '../Pages/Product/SingleProduct';

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/products/:id' element={<SingleProduct/>}/>
      </Routes>
    </Layout>
  );
};

export default Router;
