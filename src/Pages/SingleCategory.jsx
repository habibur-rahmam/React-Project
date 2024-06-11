import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CatagoryTwo from "../Pages/CategoryTwo";
import LoadingPage from './../Component/LoadingPage';

const SingleCategory = () => {
    const {singleCategory} = useParams()
    const [category, setCategory] = useState(null)
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
      const getSingleCat = async () => {
          const response = await fetch(`https://dummyjson.com/products/category/${singleCategory}`);
          const data = await response.json();
          setCategory(data);
          setLoading(false);
      };
      getSingleCat();
  }, [singleCategory]);
  

  return (
    <>
      {Loading ? (<LoadingPage/>) : (
        <CatagoryTwo categoryProducts ={category} categoryName ={singleCategory}/>
      )}
    </>
  )
}

export default SingleCategory