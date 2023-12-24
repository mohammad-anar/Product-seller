import PropTypes from "prop-types"
const TableRow = ({product, handleDelete}) => {
    return (
        <tr
                            key={product._id}
                            className="border border-gray-400"
                          >
                            <td className="border-r border-gray-400 w-48 p-6">
                              <div className=" w-full">
                                <img
                                  className=" w-32 mx-auto"
                                  src={product?.image}
                                  alt="product image"
                                />
                              </div>
                            </td>
                            <td className="border-r border-gray-400 ">
                              <div>
                                <div className="font-bold">
                                  <h2 className="text-center text-base">
                                    {product?.product_name}
                                  </h2>
                                </div>
                              </div>
                            </td>

                            <td className="border-r border-gray-400">
                              <h1>$ {product?.price}</h1>
                            </td>
                            <td className="border-r border-gray-400">
                              <h2 className="text-center">
                                {product?.quantity}
                              </h2>
                            </td>
                            <td className="border-r border-gray-400">
                              <h2 className="text-center">
                                $
                                {(
                                  product?.price * (product?.quantity || 1)
                                ).toFixed(2)}
                              </h2>
                            </td>
                            <td>
                              <button
                                onClick={() => handleDelete(product._id)}
                                className=" rounded-full border-2 w-12 h-12 text-gray-400 hover:border-0 hover:text-white hover:bg-red-600 duration-300"
                              >
                                X
                              </button>
                            </td>
                          </tr>
    );
};
TableRow.propTypes ={
    product: PropTypes.object,
    handleDelete: PropTypes.func,
}

export default TableRow;