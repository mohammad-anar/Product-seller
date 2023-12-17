import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure/axiosSecure";
import Loader from "../../Components/Shared/Loader/Loader";

const Carts = () => {
  const axiosSecure = useAxiosSecure();
  const { data: products, isLoading } = useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const res = await axiosSecure.get("/carts");
      return res;
    },
  });
  console.log(products?.data);
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold md:text-2xl text-red-600">
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
              <table className="table border border-gray-400">
                {/* head */}
                <thead>
                  <tr className="text-base text-black border-gray-400 h-20">
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
                  {products?.data?.map((product) => (
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
                            {product?.product_name}
                          </div>
                        </div>
                      </td>

                      <td className="border-r border-gray-400">
                        <h1>$ {product?.price}</h1>
                      </td>
                      <td className="border-r border-gray-400">
                        <h2 className="text-center">{product?.quantity}</h2>
                      </td>
                      <td>
                        <h2>$ {product?.price * (product?.quantity || 1)}</h2>
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
