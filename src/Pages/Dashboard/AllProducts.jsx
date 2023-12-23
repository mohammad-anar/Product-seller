import { useQuery } from "@tanstack/react-query";
import SearchBar from "../../Components/Shared/Navbar/SearchBar";
import { useState } from "react";
import Pagination from "../Products/Pagination";
import useAxiosPublic from "../../hooks/useAxiosPublic/AxiosPublic";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { Rating } from "@smastrom/react-rating";

const AllProducts = () => {
  const axiosPublic = useAxiosPublic();

  const [itemsPerPage, setItemPerPage] = useState(6);
  const [pageNumber, setPageNumber] = useState(0);
  const { data, isLoading } = useQuery({
    queryKey: ["products", "carts", itemsPerPage, pageNumber],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/products?size=${itemsPerPage}&page=${pageNumber}`
      );
      return res;
    },
  });
  const products = data?.data?.result;
  const totalCount = data?.data?.count;
  console.log(data?.data);
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium text-white">Products grids</h2>
        <button className="btn bg-red-500 text-white border-0 hover:bg-red-600 duration-300">
          Add a proudcts
        </button>
      </div>
      <div className=" rounded-t-xl">
        {/* top  */}
        <div className="flex items-center my-5 mb-2 bg-gray-400 p-4">
          <div>
            <SearchBar />
          </div>
          <div className="flex items-center gap-5 flex-1 justify-end">
            <select className="select border border-white bg-transparent  text-black outline-none focus:outline-none select-error  max-w-xs">
              <option disabled selected>
                Category
              </option>
              <option>Electronics</option>
              <option>Laptop</option>
              <option>Mobile</option>
              <option>Head phones</option>
              <option>Watches</option>
            </select>
            <select className="select border border-white bg-transparent  text-black outline-none focus:outline-none select-error max-w-xs">
              <option disabled selected>
                Latest
              </option>
              <option>Electronics</option>
              <option>Laptop</option>
              <option>Mobile</option>
              <option>Head phones</option>
              <option>Watches</option>
            </select>
          </div>
        </div>
        {/* bottom  */}
        <div className="bg-gray-400 p-5">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12">
            {products?.map((product) => (
              <div
                key={product._id}
                className="card  h-[380px] rounded-none bg-white w-full shadow-md hover:shadow-sm duration-300 mx-auto"
              >
                <figure className="px-14 pt-5">
                  <img
                    src={product.image}
                    alt="image"
                    className="rounded-xl max-w-[150px] mt-12"
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
                  <div className="flex items-center gap-3 mt-4">
                    <button className="flex items-center gap-1 btn btn-sm bg-gray-500 text-white border-0 duration-300"><CiEdit size={20}/> Edit</button>
                    <button className="flex items-center gap-1 btn btn-sm bg-red-500 text-white border-0 duration-300"><RiDeleteBinLine size={20}/> Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* pagination  */}
          {!isLoading && (
            <div className="flex items-center justify-center flex-col gap-4">
              <Pagination
                count={totalCount}
                itemsPerPage={itemsPerPage}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
              />
              <select
                onChange={(e) => setItemPerPage(Number(e.target.value))}
                className="select select-bordered w-full max-w-[150px] bg-transparent focus:outline-offset-0"
              >
                <option className="text-gray-400" disabled selected>
                  Item per page
                </option>
                <option>6</option>
                <option>9</option>
                <option>10</option>
                <option>20</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
