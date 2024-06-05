import { useState, useEffect } from "react";
import ProductList from "./Component/ProductList";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

function App() {
  const [productslist, setProductslist] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProductslist(data);
    };

    fetchProducts();
  }, []);
  return (
    <div className="max-w-[1140px] m-auto my-10 ">
      <Header />
      <h1 className="text-lg font-bold text-center my-10 uppercase">All Product List</h1>
 
      {productslist ? (
<ProductList productslist={productslist} />
      ) : (
        <p className="font-bold text-xxl capitalize">Loading  All Productt..</p>
      )}
      <Footer />
    </div>
  );
}

export default App;
