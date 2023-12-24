import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure/axiosSecure";
import Loader from "../../Components/Shared/Loader/Loader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../hooks/useAuth";
import IfNoItem from "./IfNoItem";
import TableRow from "./TableRow";
import Card from "./Card";
import CartTotal from "./CartTotal";

const Carts = () => {
  const {user} = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["carts", user],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
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
    <>
      {products?.data?.data?.length > 0 ? (
        <div className="p-4">
          <h2 className="text-xl font-semibold md:text-2xl text-gray-800  text-center my-12 mt-6">
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
                          <TableRow key={product._id} product={product} handleDelete={handleDelete}/>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="my-12 grid gird-cols-1  ">
                    {/* card 1  */}
                    {products?.data?.data?.map((product) => (
                      <Card key={product._id} product={product} handleDelete={handleDelete}/>
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
          <CartTotal cartTotal={cartTotal} products_info={products?.data?.data} />
        </div>
      ) : (
        // is empty return this
        <IfNoItem/>
      )}
    </>
  );
};

export default Carts;
