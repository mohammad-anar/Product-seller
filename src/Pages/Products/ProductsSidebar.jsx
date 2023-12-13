import { Rating } from "@smastrom/react-rating";
import MiniSearchbar from "../../Components/Shared/MiniSearchbar/MiniSearchbar";
import { useState } from "react";
import { MdOutlineBrightness1 } from "react-icons/md";

const ProductsSidebar = () => {
  const [rating, setRating] = useState(4);
  return (
    <div className="col-span-3">
      <div className="bg-[#f8f8f8] rounded-xl p-5 py-12">
        <h2 className="text-lg font-medium ml-2 mb-4">Search</h2>
        <MiniSearchbar />
      </div>
      {/* products  */}
      <div className="bg-[#f8f8f8] rounded-xl p-5 mt-5">
        <h2 className="text-lg font-medium ml-2 mb-4">Top rated products</h2>
        {/* all cards here */}
        <div className="space-y-6">
          {/* card 1 */}
          <div className="max-w-sm">
            <div className="grid grid-cols-3 gap-4">
              <img
                src="https://drou-electronics-store.myshopify.com/cdn/shop/products/13_800X800_crop_center.jpg?v=1674275345"
                className="max-w-sm w-full lg:w-20 h-24 lg-h-20 rounded-lg bg-white"
              />
              <div className="col-span-2 space-y-2 ml-4">
                <h1 className="text-base font-medium">Drou Watch Ultra</h1>
                <div>
                  <Rating
                    style={{ maxWidth: 70 }}
                    value={rating}
                    onChange={setRating}
                  />
                </div>
                <div>
                  <del className="text-gray-400">$ 99.00</del>{" "}
                  <span className="ml-2">$ 79.00</span>
                </div>
              </div>
            </div>
          </div>
          {/* card 1 */}
          <div className="max-w-sm">
            <div className="grid grid-cols-3 gap-4">
              <img
                src="https://drou-electronics-store.myshopify.com/cdn/shop/products/13_800X800_crop_center.jpg?v=1674275345"
                className="max-w-sm w-full lg:w-20 h-24 lg-h-20 rounded-lg bg-white"
              />
              <div className="col-span-2 space-y-2 ml-4">
                <h1 className="text-base font-medium">Drou Watch Ultra</h1>
                <div>
                  <Rating
                    style={{ maxWidth: 70 }}
                    value={rating}
                    onChange={setRating}
                  />
                </div>
                <div>
                  <del className="text-gray-400">$ 99.00</del>{" "}
                  <span className="ml-2">$ 79.00</span>
                </div>
              </div>
            </div>
          </div>
          {/* card 1 */}
          <div className="max-w-sm">
            <div className="grid grid-cols-3 gap-4">
              <img
                src="https://drou-electronics-store.myshopify.com/cdn/shop/products/13_800X800_crop_center.jpg?v=1674275345"
                className="max-w-sm w-full lg:w-20 h-24 lg-h-20 rounded-lg bg-white"
              />
              <div className="col-span-2 space-y-2 ml-4">
                <h1 className="text-base font-medium">Drou Watch Ultra</h1>
                <div>
                  <Rating
                    style={{ maxWidth: 70 }}
                    value={rating}
                    onChange={setRating}
                  />
                </div>
                <div>
                  <del className="text-gray-400">$ 99.00</del>{" "}
                  <span className="ml-2">$ 79.00</span>
                </div>
              </div>
            </div>
          </div>
          {/* card 1 */}
          <div className="max-w-sm">
            <div className="grid grid-cols-3 gap-4">
              <img
                src="https://drou-electronics-store.myshopify.com/cdn/shop/products/13_800X800_crop_center.jpg?v=1674275345"
                className="max-w-sm w-full lg:w-20 h-24 lg-h-20 rounded-lg bg-white"
              />
              <div className="col-span-2 space-y-2 ml-4">
                <h1 className="text-base font-medium">Drou Watch Ultra</h1>
                <div>
                  <Rating
                    style={{ maxWidth: 70 }}
                    value={rating}
                    onChange={setRating}
                  />
                </div>
                <div>
                  <del className="text-gray-400">$ 99.00</del>{" "}
                  <span className="ml-2">$ 79.00</span>
                </div>
              </div>
            </div>
          </div>
          {/* card 1 */}
          <div className="max-w-sm">
            <div className="grid grid-cols-3 gap-4">
              <img
                src="https://drou-electronics-store.myshopify.com/cdn/shop/products/13_800X800_crop_center.jpg?v=1674275345"
                className="max-w-sm w-full lg:w-20 h-24 lg-h-20 rounded-lg bg-white"
              />
              <div className="col-span-2 space-y-2 ml-4">
                <h1 className="text-base font-medium">Drou Watch Ultra</h1>
                <div>
                  <Rating
                    style={{ maxWidth: 70 }}
                    value={rating}
                    onChange={setRating}
                  />
                </div>
                <div>
                  <del className="text-gray-400">$ 99.00</del>{" "}
                  <span className="ml-2">$ 79.00</span>
                </div>
              </div>
            </div>
          </div>
          {/* card 1 */}
          <div className="max-w-sm">
            <div className="grid grid-cols-3 gap-4">
              <img
                src="https://drou-electronics-store.myshopify.com/cdn/shop/products/13_800X800_crop_center.jpg?v=1674275345"
                className="max-w-sm w-full lg:w-20 h-24 lg-h-20 rounded-lg bg-white"
              />
              <div className="col-span-2 space-y-2 ml-4">
                <h1 className="text-base font-medium">Drou Watch Ultra</h1>
                <div>
                  <Rating
                    style={{ maxWidth: 70 }}
                    value={rating}
                    onChange={setRating}
                  />
                </div>
                <div>
                  <del className="text-gray-400">$ 99.00</del>{" "}
                  <span className="ml-2">$ 79.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* categories  */}
      <div className="bg-[#f8f8f8] rounded-xl p-5 mt-4">
        <h2 className="text-lg font-medium ml-2 mb-4">Categories</h2>

        <div className="space-y-4">
          <div className="text-sm flex items-center gap-5 justify-between">
            <h2 className="text-sm flex items-center gap-2">
              <MdOutlineBrightness1 className="text-red-600" size={8} />{" "}
              Accesories
            </h2>{" "}
            <span>(9)</span>
          </div>
          <div className="text-sm flex items-center gap-5 justify-between">
            <h2 className="text-sm flex items-center gap-2">
              <MdOutlineBrightness1 className="text-red-600" size={8} /> Head
              Phones
            </h2>{" "}
            <span>(8)</span>
          </div>
          <div className="text-sm flex items-center gap-5 justify-between">
            <h2 className="text-sm flex items-center gap-2">
              <MdOutlineBrightness1 className="text-red-600" size={8} /> iPhones
            </h2>{" "}
            <span>(5)</span>
          </div>
          <div className="text-sm flex items-center gap-5 justify-between">
            <h2 className="text-sm flex items-center gap-2">
              <MdOutlineBrightness1 className="text-red-600" size={8} /> Laptops
            </h2>{" "}
            <span>(15)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSidebar;
