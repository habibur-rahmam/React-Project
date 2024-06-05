import { useState, useEffect } from "react";
import ProductList from "./Component/ProductList";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

function App() {
  const [productslist, setProductslist] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
     
    };

    fetchProducts();
  }, [count]);

  const fetchproductbyClick = () => {
    setCount(count + 1);
    setTimeout(async() => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProductslist(data);
    }, 1000); 
  };

  return (
    <div className="max-w-[1140px] m-auto  ">
      <Header />
      <h1 className="text-lg font-bold text-center my-10 uppercase">All Product List</h1>
      
      {productslist ? (
<ProductList productslist={productslist} />
      ) : (
        <p className="font-bold text-base uppercase">fetch product by Click</p>
      )}
      <button className="bg-white text-green-500 border border-green-500 font-medium py-2 px-4 rounded capitalize mt-5 mb-5" onClick={fetchproductbyClick}>see all product</button>
      <Footer />
    </div>
  );
}

export default App;
