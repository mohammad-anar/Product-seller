import PropTypes from "prop-types";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import ContentTop from "../Pages/Products/ContentTop";
import { GrFavorite } from "react-icons/gr";
import { FaOpencart } from "react-icons/fa";
import useAxiosSecure from "../hooks/useAxiosSecure/axiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Pagination from "../Pages/Products/Pagination";
import Loader from "./Shared/Loader/Loader";
import useAxiosPublic from "../hooks/useAxiosPublic/AxiosPublic";
import { useQuery } from "@tanstack/react-query";

const ProductsMain = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  // load data
  const axiosPublic = useAxiosPublic();

  const [sortCard, setSortCard] = useState(true);
  const [itemsPerPage, setItemPerPage] = useState(6);
  const [pageNumber, setPageNumber] = useState(0);
console.log(pageNumber);
  const { data, isLoading } = useQuery({
    queryKey: ["products", "carts", itemsPerPage, pageNumber],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products?size=${itemsPerPage}&page=${pageNumber}`);
      return res;
    },
  });

  const products = data?.data?.result;
  const totalCount = data?.data?.count;

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
    <>
      <div className="bg-white md:col-span-7 order-first lg:order-last mb-20 lg:mb-0">
        {/* top bar  */}
        <ContentTop setSortCart={setSortCard} />
        {/* cards  */}
        {isLoading ? (
          <div className="flex items-center justify-center h-[70vh]">
            <Loader />{" "}
          </div>
        ) : (
          <div className="flex flex-col ">
            {!isLoading && sortCard ? (
              <div className="my-12 grid gird-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 ">
                {/* card 1  */}
                {products?.map((product) => (
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
                      <Rating
                        style={{ maxWidth: 100 }}
                        value={product.rating}
                      />
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
                        <button
                          onClick={() => navigate(`/products/${product._id}`)}
                          className="text-gray-700 border-b hover:text-red-600 duration-300 "
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                {!isLoading && (
                  <div className="my-12 grid gird-cols-1 gap-5">
                    {products?.map((product) => (
                      <div
                        key={product._id}
                        className="w-full shadow-md hover:shadow-sm duration-300 pr-12"
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
            <div className="flex items-center justify-center flex-col gap-4">
              <Pagination
                count={totalCount}
                itemsPerPage={itemsPerPage}
                setItemPerPage={setItemPerPage}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
              />
              <select onChange={(e) => setItemPerPage(Number(e.target.value))} className="select select-bordered w-full max-w-[150px] bg-transparent focus:outline-offset-0">
                <option className="text-gray-400" disabled selected>
                  Item per page
                </option>
                <option>6</option>
                <option>9</option>
                <option>10</option>
                <option>20</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
ProductsMain.propTypes = {
  products: PropTypes.array,
};

export default ProductsMain;
