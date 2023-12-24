
import PropTypes from "prop-types";
const Card = ({product, handleDelete}) => {
  return (
    <div
      key={product._id}
      className="card md:hidden border max-w-xl py-12 rounded-none bg-white w-full shadow-md hover:shadow-sm duration-300 mx-auto"
    >
      <figure className="px-14 pt-5">
        <img
          src={product.image}
          alt="image"
          className="rounded-xl max-w-[150px]"
        />
      </figure>
      <div className="card-body items-center text-center mt-4 text-base">
        <div className="">
          <p className="text-xl mb-4 text-black font-medium">
            {product.product_name} {"(Model)"}
          </p>
          <h2 className="text-red-600 mt-2 font-bold">
            <span className="ml-2">
              <span className="text-black text-base">Price:</span>${" "}
              {product.price}
            </span>
          </h2>
          <h2 className=" my-1">
            <span className="ml-2 ">Quantity: {product.quantity}</span>
          </h2>
          <h2 className="text-center">
            Total: ${(product?.price * (product?.quantity || 1)).toFixed(2)}
          </h2>
          <button
            onClick={() => handleDelete(product._id)}
            className="btn btn-sm bg-red-600 border-0 mt-2 text-white hover:bg-red-500 block mx-auto"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
    product: PropTypes.object,
    handleDelete: PropTypes.func
}

export default Card;
