import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingPage from './../Component/LoadingPage';

const Category = () => {
  const [allCategory, setAllCategory] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://dummyjson.com/products/categories');
      const data = await response.json();
      setAllCategory(data);
      setLoading(false);
    };
    fetchCategories();
  }, []);
  

  return (
    <div>
    {loading ? (<LoadingPage/>) : (
      
      <div>
      <div className="grid grid-cols-4 gap-5 p-10">
        {allCategory && allCategory.map((item, id) => (
          
          <Link key={id} to={`/all-category/${item.slug}`}>
            <div className="py-3 px-2 bg-green-500 rounded-md w-[100%] flex align-middle justify-center" >
            <h2 className="text-center align-middle text-xl text-white">{item.name}</h2>
          </div></Link> 

        ) ) }

      </div>
      </div>
    )}
    </div>
  );
};

export default Category;
