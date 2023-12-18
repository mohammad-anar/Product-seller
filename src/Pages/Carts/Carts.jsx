import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure/axiosSecure";
import Loader from "../../Components/Shared/Loader/Loader";
import toast from "react-hot-toast";
import { useState } from "react";

const Carts = () => {
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
      .delete(`/carts/${id}`)
      .then((res) => {
        if (res.data?.deletedCount === 1) {
          refetch();
          toast.success(`deleted 🔥`);
        }
      })
      .catch((err) => console.log(err));
  };
  const cartTotal = products?.data?.data.reduce((total, current) => {
        total = total + (current?.price * current?.quantity);
        return total
        
  }, 0)
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
                          {(product?.price * (product?.quantity || 1)).toFixed(
                            2
                          )}
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
              <div className="flex items-center justify-end gap-5 my-6 mb-0">
                <button className="btn px-8 bg-red-600 text-white border-0 rounded-full hover:bg-red-500 ">
                  Continue shopping
                </button>
                <button className="btn px-8 bg-red-600 text-white border-0 rounded-full hover:bg-red-500 ">
                  Clear cart
                </button>
              </div>
            </div>
          }
        </div>
      )}
      {/* cart total  */}
      <hr className="border-1 my-12 border-gray-300" />
      <div className="max-w-xl text-center my-12 bg-gray-100 p-12 px-20 rounded-xl ml-auto">
        <h2 className="text-4xl font-medium mb-8">Cart total</h2>
        <div className="w-full bg-transparent">
          <table className="border border-gray-400 w-full">
            <tr className="border border-gray-400 h-12">
              <td className="border border-gray-400 text-lg font-bold">
                SubTotal
              </td>
              <td className="border border-gray-400 text-base">$ {cartTotal.toFixed(2)}</td>
            </tr>
            <tr className="border border-gray-400 h-12 w-1/2">
              <td className="border border-gray-400 text-lg font-bold">Total</td>
              <td className="border border-gray-400 text-base">$ {cartTotal.toFixed(2)}</td>
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
            <button className={`${agree || "btn-disabled"}  btn btn-wide bg-red-600 text-white border-0 rounded-full hover:bg-red-500`}>
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
