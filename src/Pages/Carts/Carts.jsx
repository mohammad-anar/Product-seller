import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure/axiosSecure";
import Loader from "../../Components/Shared/Loader/Loader";
import toast from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Carts = () => {
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);
  const axiosSecure = useAxiosSecure();
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const res = await axiosSecure.get("/carts");
      return res;
    },
  });
  const handleDelete = (id) => {
    axiosSecure
      .delete(`/carts?id=${id}`)
      .then((res) => {
        if (res.data?.deletedCount === 1) {
          refetch();
          toast.success(`deleted 🔥`);
        }
      })
      .catch((err) => console.log(err));
  };
  const cartTotal = products?.data?.data.reduce((total, current) => {
    total = total + current?.price * current?.quantity;
    return total;
  }, 0);

  //   clear all cart items
  const handleClearCart = () => {
    axiosSecure
      .delete(`/carts`)
      .then((res) => {
        console.log(res);
        if (res.data?.deletedCount > 0) {
          refetch();
          toast.success(`deleted all carts items 🔥`);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold md:text-2xl text-red-600 text-center my-12 mt-6">
        Your Shopping Cart
      </h2>
      {isLoading ? (
        <div className="flex items-center justify-center h-[80vh]">
          <Loader />
        </div>
      ) : (
        <div>
          {
            <div>
              <div className="overflow-x-auto hidden md:block">
                <table className="table border bg-transparent border-gray-400 text-center">
                  {/* head */}
                  <thead>
                    <tr className="text-lg text-black border-gray-400 h-20">
                      <th
                        colSpan={2}
                        className="border-r border-gray-400 text-center"
                      >
                        Product
                      </th>
                      <th className="border-r border-gray-400">Price</th>
                      <th className="border-r border-gray-400">Quantity</th>
                      <th className="border-r border-gray-400">Total</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {/* row 1 */}
                    {products?.data?.data?.map((product) => (
                      <tr key={product._id} className="border border-gray-400">
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
                          <h2 className="text-center">{product?.quantity}</h2>
                        </td>
                        <td className="border-r border-gray-400">
                          <h2 className="text-center">
                            ${" "}
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
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="my-12 grid gird-cols-1  ">
                {/* card 1  */}
                {products?.data?.data?.map((product) => (
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
                            <span className="text-black text-base">
                              Price:{" "}
                            </span>
                            $ {product.price}
                          </span>
                        </h2>
                        <h2 className=" my-1">
                          <span className="ml-2 ">
                            Quantity: {product.quantity}
                          </span>
                        </h2>
                        <h2 className="text-center">
                          {" "}
                          Total: $
                          {(product?.price * (product?.quantity || 1)).toFixed(
                            2
                          )}
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
                ))}
              </div>
              <div className="flex items-center justify-end gap-5 my-6 mb-0">
                <button
                  onClick={() => navigate("/products")}
                  className={`btn px-8 bg-red-600 text-white border-0 rounded-full hover:bg-red-500 `}
                >
                  Continue shopping
                </button>
                <button
                  onClick={handleClearCart}
                  className={`${
                    products?.data?.data?.length > 0 || "hidden"
                  } btn px-8 bg-red-600 text-white border-0 rounded-full hover:bg-red-500`}
                >
                  Clear cart
                </button>
              </div>
            </div>
          }
        </div>
      )}
      {/* cart total  */}
      <hr className="border-1 my-12 border-gray-300" />
      <div className="max-w-xl text-center my-12 bg-gray-100 p-12 px-20 rounded-xl mx-auto md:ml-auto">
        <h2 className="text-4xl font-medium mb-8">Cart total</h2>
        <div className="w-full bg-transparent">
          <table className="border border-gray-400 w-full">
            <tr className="border border-gray-400 h-12">
              <td className="border border-gray-400 text-lg font-bold">
                SubTotal
              </td>
              <td className="border border-gray-400 text-base">
                $ {cartTotal?.toFixed(2)}
              </td>
            </tr>
            <tr className="border border-gray-400 h-12 w-1/2">
              <td className="border border-gray-400 text-lg font-bold">
                Total
              </td>
              <td className="border border-gray-400 text-base">
                $ {cartTotal?.toFixed(2)}
              </td>
            </tr>
          </table>
          <div className="flex items-center gap-4 my-5">
            <input
              onClick={() => setAgree(!agree)}
              type="checkbox"
              className="checkbox chckbox-xs border-gray-400"
            />
            <p className="text-gray-700 text-base my-4">
              I agree with the terms and conditions
            </p>
          </div>
          <div className="text-left">
            <button
              className={`${
                agree || "btn-disabled"
              }  btn btn-wide bg-red-600 text-white border-0 rounded-full hover:bg-red-500`}
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
