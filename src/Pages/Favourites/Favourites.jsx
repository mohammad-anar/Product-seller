import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure/axiosSecure";
import { Rating } from "@smastrom/react-rating";
import { FaOpencart } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";

const Favourites = () => {
  const axiosSecure = useAxiosSecure();
  const { data: products, isLoading } = useQuery({
    queryKey: ["products", "carts"],
    queryFn: async () => {
      const res = await axiosSecure.get("/favourites");
      return res;
    },
  });
  console.log(products?.data);

  const handleCard = () => {
    console.log("cart");
  };
  return (
    <div>
      <div className="my-12 grid gird-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 ">
        {/* card 1  */}
        {products?.data.map((product) => (
          <div
            key={product._id}
            className="card  h-[400px] relative rounded-none bg-white w-full shadow-y shadow-md hover:shadow-sm duration-300 mx-auto"
          >
          <MdFavorite
                      size={50}
                      className="absolute top-2 right-2 hover:text-red duration-300 text-red-600 rounded-full p-2 "
                    />
            <figure className="px-14 pt-5">
              <img
                src={product.image}
                alt="image"
                className="rounded-xl max-w-[150px]"
              />
            </figure>
            <div className="card-body items-center text-center mt-4">
              <Rating style={{ maxWidth: 100 }} value={product.rating} />
              <div className="space-y-1">
                <p className="text-lg text-black font-medium">
                  {product.product_name}
                </p>
                <h2 className="text-red-600 -mt-6 font-bold">
                  <span className="ml-2">$ {product.price}</span>
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <FaOpencart
                  onClick={() => handleCard(product._id)}
                  size={50}
                  className="hover:text-red duration-300 hover:bg-gray-200 rounded-full p-2 hover:text-red-600"
                />
                <button onClick={() => handleDetails(product._id)} className="text-sm bg-gray-100 rounded-full px-3 p-1">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
