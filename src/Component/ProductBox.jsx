import PropTypes from 'prop-types';
const ProductBox = ({ title, price, catagory, tag })  => {
    return (
      <div className="border flex flex-col mt-8">
        <img src="https://via.placeholder.com/400" alt="All product" />
        <div className="flex justify-between p-3">
          <h3 className="text-sm text-black capitalize">{title}</h3>
          <p className="text-sm text-black capitalize">price: ${price}</p>
        </div>
        <hr />
        <div className="flex justify-between p-3">
          <h3 className="text-sm text-black capitalize">{catagory}</h3>
          <p className="text-sm text-black capitalize">{tag}</p>
        </div>
        <div className="mt-3 mb-3 text-center">
          <button className="bg-green-600 text-white py-2 px-5 rounded-sm text-sm uppercase">Add product</button>
        </div>
      </div>
    );
  };

  ProductBox.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    catagory: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,

  };
  
  export default ProductBox;
  