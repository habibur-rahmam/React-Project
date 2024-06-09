import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Layout from '../Layout/Layout';

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Layout>
  );
};

export default Router;
