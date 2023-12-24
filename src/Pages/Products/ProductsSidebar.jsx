import { Rating } from "@smastrom/react-rating";
import MiniSearchbar from "../../Components/Shared/MiniSearchbar/MiniSearchbar";
import { MdOutlineBrightness1 } from "react-icons/md";
import useAxiosPublic from "../../hooks/useAxiosPublic/AxiosPublic";
import { useQuery } from "@tanstack/react-query";

const ProductsSidebar = () => {
  const axiosPublic = useAxiosPublic();
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products`);
      return res;
    },
  });
  const allProducts = data?.data?.result?.length > 6 && data?.data?.result?.slice(0, 5)
  console.log(allProducts);
  return (
    <div className="col-span-3">
      <div className="bg-[#f8f8f8] rounded-xl p-5 pb-8">
        <h2 className="text-lg font-medium ml-2 mb-4">Search</h2>
        <MiniSearchbar />
      </div>
      {/* products  */}
      <div className="bg-[#f8f8f8] rounded-xl p-5 mt-5">
        <h2 className="text-lg font-medium ml-2 mb-4">Top rated products</h2>
        {/* all cards here */}
        <div className="space-y-2">
          {/* card 1 */}
          {!isLoading && allProducts?.map(product =><div key={product._id} className="max-w-sm bg-white p-4 cursor-pointer">
            <div className="grid grid-cols-3 gap-4">
              <img
                src={product?.image}
                className="max-w-sm w-full lg:w-20 h-24 lg-h-20 rounded-lg bg-white"
              />
              <div className="col-span-2 space-y-2 ml-4">
                <h1 className="text-base font-medium">{product?.product_name}</h1>
                <div>
                  <Rating
                    style={{ maxWidth: 70 }}
                    value={product?.rating}
                  />
                </div>
                <div>
                  <del className="text-gray-400">$ {product?.price + product?.price * 20/100}</del>
                  <span className="ml-2">$ {product?.price}</span>
                </div>
              </div>
            </div>
          </div>)}
        </div>
      </div>
      {/* categories  */}
      <div className="bg-[#f8f8f8] rounded-xl p-5 mt-4">
        <h2 className="text-lg font-medium ml-2 mb-4">Categories</h2>

        <div className="space-y-4">
          <div className="text-sm flex items-center gap-5 justify-between">
            <h2 className="text-sm flex items-center gap-2">
              <MdOutlineBrightness1 className="text-red-600" size={8} />
              Accesories
            </h2>
            <span>(9)</span>
          </div>
          <div className="text-sm flex items-center gap-5 justify-between">
            <h2 className="text-sm flex items-center gap-2">
              <MdOutlineBrightness1 className="text-red-600" size={8} /> Head
              Phones
            </h2>
            <span>(8)</span>
          </div>
          <div className="text-sm flex items-center gap-5 justify-between">
            <h2 className="text-sm flex items-center gap-2">
              <MdOutlineBrightness1 className="text-red-600" size={8} /> iPhones
            </h2>
            <span>(5)</span>
          </div>
          <div className="text-sm flex items-center gap-5 justify-between">
            <h2 className="text-sm flex items-center gap-2">
              <MdOutlineBrightness1 className="text-red-600" size={8} /> Laptops
            </h2>
            <span>(15)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSidebar;
