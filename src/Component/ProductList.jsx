import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ProductList = ({ productslist }) => {
  return (
    <div className="flex justify-center items-center gap-20 flex-wrap">
      {productslist &&
        productslist.products.map((product, id) => (
          <div className="border flex flex-col py-3" key={id}>
                 <img src={product.images[0]}alt="product image"
              className="w-full max-w-[400px] max-h-[400px] object-cover"/>
            <div className="flex justify-between p-3">
              <h3> Titel : {product.title}</h3>
              <p>Price: ${product.price}</p>
            </div>
            <hr />
            <div className="flex justify-between p-2">
              <h3>Category : {product.category}</h3>
              <p>Brand : {product.brand}</p>
            </div>

            <div className="py-3 text-center">
            <Link
                to={`/products/${product.id}`}>
                  <button className="bg-green-500 text-white py-3 px-5 rounded-sm mt-3 capitalize">View Product</button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

ProductList.propTypes = {
  productslist: PropTypes.object.isRequired,
};

export default ProductList;
