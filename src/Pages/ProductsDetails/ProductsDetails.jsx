import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure/axiosSecure";
import { useParams } from "react-router-dom";
import { TfiRulerPencil } from "react-icons/tfi";
import { Rating } from "@smastrom/react-rating";
import { FaShippingFast } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";


import { MdOutlineFavorite } from "react-icons/md";
import { FaMinus, FaPinterest, FaPlus, FaTwitter } from "react-icons/fa6";
import toast from "react-hot-toast";

import Loader from "../../Components/Shared/Loader/Loader";
import CompairCard from "./CompairCard";
import { useState } from "react";
import ProductsREview from "./ProductsREview";
import ProductsComments from "./ProductsComments";

const ProductsDetails = () => {
  const { id } = useParams();
  const [tabIndex, setTabIntex] = useState(0);

  const [tabShow, setTabshow] = useState(0);

  const axiosSecure = useAxiosSecure();
  const { data: products, isLoading } = useQuery({
    queryKey: ["favourites"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/products/${id}`);
      return res;
    },
  });

  const handleCard = (id) => {
    axiosSecure
      .post("/carts", { id })
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
    console.log(id);
    axiosSecure
      .post("/carts", { id })
      .then((res) => {
        if (res.data?.insertedId) {
          toast.success("item added to favourite 👌");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-[80vh]">
          <Loader></Loader>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-12 min-h-screen max-w-screen">
            <div className="border flex flex-col justify-between max-h-screen mt-14">
              <div className="p-10">
                <img
                  className="w-4/6 mx-auto"
                  src={products?.data?.image}
                  alt=""
                />
              </div>
              <div className="grid grid-cols-3 border-t">
                <img
                  className="w-full p-5 border "
                  src={products?.data?.image}
                  alt=""
                />
                <img
                  className="w-full p-5 border "
                  src={products?.data?.image}
                  alt=""
                />
                <img
                  className="w-full p-5 border "
                  src={products?.data?.image}
                  alt=""
                />
              </div>
            </div>
            <div className="h-screen overflow-y-scroll">
              <h2 className="text-4xl font-bolmedium">
                {products?.data?.product_name}
              </h2>
              <p className="text-base my-3 text-gray-400">
                <span className="font-bold ">Availability:</span> 5 left in
                stock
              </p>
              <progress
                className="progress progress-error w-full"
                value="5"
                max="100"
              ></progress>
              <div className="flex items-center gap-4 my-4 text-gray-400">
                <p className="text-base font-semibold">Rating: </p>
                <Rating
                  style={{ maxWidth: 100 }}
                  value={products?.data?.rating}
                />
              </div>
              <div className="text-base flex items-center gap-2 py-8 border-y">
                <del className="text-gray-400">
                  $ {products?.data?.price + (products?.data?.price * 20) / 100}
                </del>{" "}
                <span className="ml-2 font-bold text-red-600">
                  $ {products?.data?.price}
                </span>
                <span className="ml-5 rounded-full bg-gray-500 p-1 px-3 text-sm text-white">
                  - {products?.data?.discount || "20%"}
                </span>
              </div>
              <div>
                <div className="flex items-center  gap-4 my-6">
                  <p className="text-base font-bold text-gray-500 ">size:</p>
                  <span className=" rounded-md bg-red-500 p-1 cursor-pointer  px-5 text-base text-white">
                    s
                  </span>
                  <span className=" rounded-md bg-gray-500 p-1 cursor-pointer  px-5 text-base text-white">
                    m
                  </span>
                  <span className=" rounded-md bg-gray-500 p-1 cursor-pointer  px-5 text-base text-white">
                    l
                  </span>
                </div>
                <div className="flex items-center  gap-4 my-6">
                  <p className="text-base font-bold text-gray-500 ">Color:</p>
                  <input
                    type="radio"
                    name="radio-8"
                    className="radio bg-red-600 radio-error"
                    checked
                  />
                  <input
                    type="radio"
                    name="radio-8"
                    className="radio bg-info radio-info"
                  />
                  <input
                    type="radio"
                    name="radio-8"
                    className="radio bg-accent radio-accent"
                  />
                  <input
                    type="radio"
                    name="radio-8"
                    className="radio bg-black "
                  />
                </div>
              </div>
              <div className="flex items-center gap-10">
                <div>
                  <div className="flex items-center gap-4 text-gray-500 cursor-pointer hover:underline">
                    <TfiRulerPencil size={20} /> <span>Size guides</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4 text-gray-500 cursor-pointer hover:underline">
                    <FaShippingFast size={25} /> <span>Shipping</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4 text-gray-500 cursor-pointer hover:underline">
                    <IoIosMail size={25} /> <span>Ask about this products</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-10 mt-6">
                <h2 className="text-base text-gray-700">Quantity:</h2>
                <div className="flex items-center gap-10 border-b-2 pb-1  text-gray-700 text-lg">
                  <FaMinus
                    className="cursor-pointer hover:bg-gray-200 rounded-full p-1 duration-300"
                    size={25}
                  />
                  <p>{products?.data?.quantity || 1}</p>
                  <FaPlus
                    className="cursor-pointer hover:bg-gray-200 rounded-full p-1 duration-300"
                    size={25}
                  />
                </div>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={() => handleCard(products?.data?._id)}
                  className={`btn px-8 p-1 bg-red-600 text-white border-0 rounded-full hover:bg-red-500 `}
                >
                  Add to cart
                </button>
                <button className={` text-gray-700 border-0 rounded-full`}>
                  <MdOutlineFavorite
                    onClick={() => handleFavourite(products?.data?._id)}
                    className="hover:text-red-600"
                    size={50}
                  />
                </button>
              </div>
              <div className=" mt-12">
                <h2 className="text-gray-700 text-2xl mb-6 border-b pb-2">
                  Pair it with
                </h2>
                <div className="grid grid-cols-3 gap-2">
                  {/* card 1  */}
                  <CompairCard products={products?.data} />
                  <CompairCard products={products?.data} />
                  <CompairCard products={products?.data} />
                </div>
              </div>
              <div className="mt-8">
                <h2 className="text-gray-700 text-2xl mb-6 border-b pb-2">
                  Pair it with
                </h2>
                <div className="flex items-center gap-4">
                  <button className="border flex items-center gap-1 p-2 px-4 rounded-lg">
                    <img
                      className="w-[20px]"
                      src="https://cdn-icons-png.flaticon.com/512/174/174861.png"
                      alt="paypal"
                    />
                    <span>Paypal</span>
                  </button>
                  <button className="border inline-block p-2 px-4 rounded-lg">
                    <img
                      className="w-[20px]"
                      src="https://cdn-icons-png.flaticon.com/512/217/217425.png"
                      alt="visa"
                    />
                  </button>
                  <button className="border p-2 px-4 rounded-lg flex items-center gap-1">
                    <img
                      className="w-[20px]"
                      src="https://static-00.iconduck.com/assets.00/google-play-icon-2048x2048-487quz63.png"
                      alt="google play"
                    />{" "}
                    <span>Play</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <h2 className="text-base text-gray-700 ">Share:</h2>
                <div className="flex items-center gap-3">
                  <button className="border p-2 rounded-full flex items-center gap-1">
                    <FaFacebookF />
                  </button>
                  <button className="border p-2 rounded-full flex items-center gap-1">
                    <FaTwitter />
                  </button>
                  <button className="border p-2 rounded-full flex items-center gap-1">
                    <FaPinterest />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* bottom  */}
          <div className="mb-8">
            {/* tabs  */}
            <div
              role="tablist"
              className="tabs w-full bg-gray-200 items-center justify-center p-4"
            >
              <a
                role="tab"
                onClick={() => {
                  setTabIntex(0);
                  setTabIntex(0);
                }}
                className={`tab text-gray-700 text-base font-semibold ${
                  tabIndex === 0 && "border-b text-red-600"
                } border-red-500`}
              >
                Description
              </a>
              <a
                role="tab"
                onClick={() => setTabIntex(1)}
                className={`tab text-gray-700 text-base font-semibold ${
                  tabIndex === 1 && "border-b text-red-600"
                } border-red-500`}
              >
                Reviews
              </a>
              <a
                role="tab"
                onClick={() => {
                  setTabIntex(2);
                  setTabshow(2);
                }}
                className={`tab text-gray-700 text-base font-semibold ${
                  tabIndex === 2 && "border-b text-red-600"
                } border-red-500`}
              >
                Comments
              </a>
            </div>
            <div className="mt-5 text-gray-500 px-6">
            {/* description  */}
              {tabIndex === 0 && <p className="px-5">
                {products?.data?.description}
              </p>}
              {/* review  */}
              {tabIndex === 1 &&<div>
                <ProductsREview />
              </div>}
              {/* comment  */}
              {tabIndex === 2 && <ProductsComments/>}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductsDetails;
