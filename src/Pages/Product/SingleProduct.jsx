import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
        const response = await fetch(`https://dummyjson.com/product/${id}`);
        const data = await response.json();
        setProduct(data);
 
    };
    fetchProduct();
  }, [id]);

  if (product === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-[1140px] m-auto py-8">
    <div className="flex justify-center items-center flex-col">
    <div className="flex flex-col items-center">
                <img src={product.thumbnail} alt="product Image" className="w-80 h-80 object-cover border border-spacing-1 p-5" />
                <h2 className="text-lg font-semibold uppercase mt-5">{product.title}</h2>
                <p className="w-2/4 text-center text-xxl mt-5 mb-5">{product.description}</p>
                <div className="flex justify-between gap-10 items-center border-2 p-4 mb-2">
                <p className="text-center text-lg ">Rating: {product.rating}</p>
                <p className=" text-center text-lg">Tag: {product.tags}</p>
                <p className=" text-center text-lg">Brand : {product.brand}</p>
                <p className="text-lg">Price: ${product.price}</p>
                </div>
                <button className="bg-green-500 text-white py-3 px-5 rounded-sm mt-3">Add to Cart</button>

            </div>
    </div>
</div>
  );
}

export default SingleProduct;
