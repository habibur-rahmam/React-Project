import PropTypes from "prop-types";

const ProductList = ({ productslist }) => {
  return (
    <div className="flex justify-center items-center gap-20 flex-wrap">
      {productslist &&
        productslist.products.map((product, index) => (
          <div className="border flex flex-col py-3" key={index}>
            <img
              src={product.images[0]}
              alt="product"
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
              <button className="bg-green-700 text-white py-3 px-5 rounded-sm ">
                Add to Cart
              </button>
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
