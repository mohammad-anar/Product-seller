import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure/axiosSecure";
import Loader from "../../Components/Shared/Loader/Loader";

const Carts = () => {
  const axiosSecure = useAxiosSecure();
  const { data: products, isLoading} = useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const res = await axiosSecure.get("/carts");
      return res;
    },
  });
//   console.log(products?.data?.data);
const handleDelete = (id) => {
    console.log(id);
    axiosSecure.delete("/carts", {id})
}
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
              <table className="table border border-gray-400 text-center">
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
                            <h2 className="text-center text-base">{product?.product_name}</h2>
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
                        <h2 className="text-center">$ {(product?.price * (product?.quantity || 1)).toFixed(2)}</h2>
                      </td>
                      <td>
                        <button onClick={() => handleDelete(product._id)} className=" rounded-full border-2 w-12 h-12 text-gray-400 hover:border-0 hover:text-white hover:bg-red-600 duration-300">X</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          }
        </div>
      )}
    </div>
  );
};

export default Carts;
