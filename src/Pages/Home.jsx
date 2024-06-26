import { useState, useEffect } from "react";
import ProductList from '../Component/ProductList';
import LoadingPage from "../Component/LoadingPage";


function App() {
  const [productslist, setProductslist] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProductslist(data);
    };

    fetchProducts();
  }, []);
  if (productslist === null) {
    return <div>{<LoadingPage/>}</div>;
  }


  return (
    <div className="max-w-[1140px] m-auto py-10">
      <ProductList productslist={productslist} />
    </div>
  );
}

export default App;
