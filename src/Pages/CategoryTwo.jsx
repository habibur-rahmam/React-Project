import { Link } from "react-router-dom";

const CategoryTwo = ({categoryProducts, categoryName}) => {

    const items = categoryProducts

  return (
    <>
        <div>
            <h2 className="py-5 text-center font-bold text-black text-3xl capitalize">{categoryName}</h2>
            
        </div>
        <div className="grid grid-cols-3 gap-10 w-full px-6 py-10">
            {items.products.map((product, id) => (
                <div className="border flex flex-col rounded hover:bg-white py-6 px-6" key={id}> <img src= {product.images[0]} alt="Product Image" />
                    <h3 className="text-lg font-semibold uppercase mt-5 text-center">{product.title}</h3>
                        <div className="flex justify-between py-2">
                            <h2 className="text-start text-sm">Brand: {product.brand}</h2>
                            <h2 className="text-start text-sm">Price: {product.price}</h2>
                        </div>
                        <hr />
                        <div className="flex justify-between py-2">
                            <h2 className="text-start text-sm">Warranty: {product.warrantyInformation}</h2>
                            <h2 className="text-start text-sm">Overall Rating: {product.rating}</h2>
                        </div>
                        <div className="mt-5 bg-green-500 text-white py-3 px-5 text-center justify-center" key={product.id}>
                        <Link to={`/products/${product.id}`}>View Product</Link>
                        </div>  
                </div>
            ))}
        </div>
    </>
  )
}

export default CategoryTwo;