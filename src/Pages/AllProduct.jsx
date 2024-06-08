import { useState, useEffect } from "react";
import ProductList from '../Component/ProductList';

function App() {
  const [productslist, setProductslist] = useState(null);
  const [count] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProductslist(data);
    };

    fetchProducts();
  }, [count]);



  return (
    <div className="max-w-[1140px] m-auto py-10">
      {productslist ? (
        <ProductList productslist={productslist} />
      ) : (
        <p className="text-center text-black font-xxl font-bold">Loading All Product ...</p>
      )}

    </div>
  );
}

export default App;
