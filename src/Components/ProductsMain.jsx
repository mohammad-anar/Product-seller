import PropTypes from "prop-types";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import ContentTop from "../Pages/Products/ContentTop";
import Pagination from "../Pages/Products/Pagination";
import { GrFavorite } from "react-icons/gr";
import { FaOpencart } from "react-icons/fa";
import useAxiosSecure from "../hooks/useAxiosSecure/axiosSecure";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic/AxiosPublic";
import Loader from "./Shared/Loader/Loader";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProductsMain = () => {
  const {user} = useAuth();
  const navigate = useNavigate();
  const [sortCard, setSortCard] = useState(true);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  // load data
  const { data: products, isLoading } = useQuery({
    queryKey: ["products", "carts"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products");
      return res;
    },
  });

  // cart handler
  const handleCard = (id) => {
    axiosSecure
      .post(`/carts?email=${user.email}`, { id })
      .then((res) => {
        console.log(res.data);
        if (res.data?.insertedId) {
          toast.success("item added to cart 👌");
        }
        if (res.data?.modifiedCount > 0) {
          toast.success("item added to cart 👌");
        }
      })
      .catch((err) => console.log(err));
  };
  const handleFavourite = (id) => {
    axiosSecure
      .post("/favourites", { id })
      .then((res) => {
        console.log(res.data);
        if (res.data?.insertedId) {
          toast.success("item added to favourite 👌");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-white md:col-span-7 order-first lg:order-last mb-20 lg:mb-0">
      {/* top bar  */}
      <ContentTop setSortCart={setSortCard} />
      {/* cards  */}
      <div className="flex flex-col ">
        {isLoading ? (
          <div className="felx items-center justify-center h-[80vh]">
            <Loader />
          </div>
        ) : sortCard ? (
          <div className="my-12 grid gird-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 ">
            {/* card 1  */}
            {products?.data.map((product) => (
              <div
                key={product._id}
                className="card  h-[350px] rounded-none bg-white w-full shadow-md hover:shadow-sm duration-300 mx-auto"
              >
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
                    <GrFavorite
                    onClick={() => handleFavourite(product._id)}
                      size={40}
                      className="hover:text-red duration-300 hover:bg-gray-200 rounded-full p-2 hover:text-red-600"
                    />
                    <FaOpencart
                      onClick={() => handleCard(product._id)}
                      size={40}
                      className="hover:text-red duration-300 hover:bg-gray-200 rounded-full p-2 hover:text-red-600"
                    />
                  </div>
                  <div>
                <button onClick={() => navigate(`/products/${product._id}`)} className="text-gray-700 border-b hover:text-red-600 duration-300 ">Details</button>
              </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {isLoading ? (
              <div className="felx items-center justify-center h-[80vh]">
                <Loader />
              </div>
            ) : (
              <div className="my-12 grid gird-cols-1 gap-5">
                {products?.data.map((product) => (
                  <div
                    key={product._id}
                    className="w-full shadow-md hover:shadow-sm duration-300"
                  >
                    <div className="flex items-center w-full gap-10">
                      <img
                        src={product.image}
                        className="max-w-sm w-72 h-60 p-2 rounded-lg bg-white"
                      />
                      <div className=" space-y-2 ml-4 w-full">
                        <h1 className="text-xl font-medium">
                          {product.product_name}
                        </h1>
                        <div>
                          <Rating
                            style={{ maxWidth: 100 }}
                            value={product.rating}
                          />
                        </div>
                        <div className="text-base">
                          <del className="text-gray-400">
                            $ {product.price + (product.price * 20) / 100}
                          </del>{" "}
                          <span className="ml-2">$ {product.price}</span>
                        </div>
                        <hr />
                        <div className="space-y-3">
                          <p className="text-base text-gray-700">
                            {product.description}
                          </p>
                          <div className="flex items-start gap-2">
                            <GrFavorite
                              size={40}
                              className="hover:text-red duration-300 hover:bg-gray-200 rounded-full p-2 hover:text-red-600"
                            />
                            <FaOpencart
                            onClick={() => handleCard(product._id)}
                              size={40}
                              className="hover:text-red duration-300 hover:bg-gray-200 rounded-full p-2 hover:text-red-600"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
        {/* card 1  long card*/}

        {/* Pagination  */}
        <div className="flex items-center justify-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
};
ProductsMain.propTypes = {
  products: PropTypes.array,
};

export default ProductsMain;
