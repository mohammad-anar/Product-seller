
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import ContentTop from "../Pages/Products/ContentTop";
import Pagination from "../Pages/Products/Pagination";
const ProductsMain = () => {
  const [rating, setRating] = useState(4);
  return (
      <div className="bg-white md:col-span-7 order-first lg:order-last mb-20 lg:mb-0">
        {/* top bar  */}
        <ContentTop />
        {/* cards  */}
        <div className="flex flex-col ">
          <div className="my-12 grid gird-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 ">
            {/* card 1  */}
            <div className="card  h-[350px] rounded-none bg-white w-full shadow-md mx-auto">
              <figure className="px-14 pt-5">
                <img
                  src="https://drou-electronics-store.myshopify.com/cdn/shop/products/p3_0dd10fdb-44b3-415b-b7c3-91896ecb3ee2_large.jpg?v=1674275302"
                  alt="image"
                  className="rounded-xl max-w-[150px]"
                />
              </figure>
              <div className="card-body items-center text-center mt-4">
                <Rating
                  style={{ maxWidth: 100 }}
                  value={rating}
                  onChange={setRating}
                />
                <div className="space-y-1">
                  <p className="text-lg text-black font-medium">
                    Drupod Pro White
                  </p>
                  <h2 className="text-red-600 -mt-6 font-bold">$ 290.00</h2>
                </div>
              </div>
            </div>
            {/* card 1  */}
            <div className="card  h-[350px] rounded-none bg-white w-full shadow-md mx-auto">
              <figure className="px-14 pt-5">
                <img
                  src="https://drou-electronics-store.myshopify.com/cdn/shop/products/p3_0dd10fdb-44b3-415b-b7c3-91896ecb3ee2_large.jpg?v=1674275302"
                  alt="image"
                  className="rounded-xl max-w-[150px]"
                />
              </figure>
              <div className="card-body items-center text-center mt-4">
                <Rating
                  style={{ maxWidth: 100 }}
                  value={rating}
                  onChange={setRating}
                />
                <div className="space-y-1">
                  <p className="text-lg text-black font-medium">
                    Drupod Pro White
                  </p>
                  <h2 className="text-red-600 -mt-6 font-bold">$ 290.00</h2>
                </div>
              </div>
            </div>
            {/* card 1  */}
            <div className="card  h-[350px] rounded-none bg-white w-full shadow-md mx-auto">
              <figure className="px-14 pt-5">
                <img
                  src="https://drou-electronics-store.myshopify.com/cdn/shop/products/p3_0dd10fdb-44b3-415b-b7c3-91896ecb3ee2_large.jpg?v=1674275302"
                  alt="image"
                  className="rounded-xl max-w-[150px]"
                />
              </figure>
              <div className="card-body items-center text-center mt-4">
                <Rating
                  style={{ maxWidth: 100 }}
                  value={rating}
                  onChange={setRating}
                />
                <div className="space-y-1">
                  <p className="text-lg text-black font-medium">
                    Drupod Pro White
                  </p>
                  <h2 className="text-red-600 -mt-6 font-bold">$ 290.00</h2>
                </div>
              </div>
            </div>
            {/* card 1  */}
            <div className="card  h-[350px] rounded-none bg-white w-full shadow-md mx-auto">
              <figure className="px-14 pt-5">
                <img
                  src="https://drou-electronics-store.myshopify.com/cdn/shop/products/p3_0dd10fdb-44b3-415b-b7c3-91896ecb3ee2_large.jpg?v=1674275302"
                  alt="image"
                  className="rounded-xl max-w-[150px]"
                />
              </figure>
              <div className="card-body items-center text-center mt-4">
                <Rating
                  style={{ maxWidth: 100 }}
                  value={rating}
                  onChange={setRating}
                />
                <div className="space-y-1">
                  <p className="text-lg text-black font-medium">
                    Drupod Pro White
                  </p>
                  <h2 className="text-red-600 -mt-6 font-bold">$ 290.00</h2>
                </div>
              </div>
            </div>
            {/* card 1  */}
            <div className="card  h-[350px] rounded-none bg-white w-full shadow-md mx-auto">
              <figure className="px-14 pt-5">
                <img
                  src="https://drou-electronics-store.myshopify.com/cdn/shop/products/p3_0dd10fdb-44b3-415b-b7c3-91896ecb3ee2_large.jpg?v=1674275302"
                  alt="image"
                  className="rounded-xl max-w-[150px]"
                />
              </figure>
              <div className="card-body items-center text-center mt-4">
                <Rating
                  style={{ maxWidth: 100 }}
                  value={rating}
                  onChange={setRating}
                />
                <div className="space-y-1">
                  <p className="text-lg text-black font-medium">
                    Drupod Pro White
                  </p>
                  <h2 className="text-red-600 -mt-6 font-bold">$ 290.00</h2>
                </div>
              </div>
            </div>
            {/* card 1  */}
            <div className="card  h-[350px] rounded-none bg-white w-full shadow-md mx-auto">
              <figure className="px-14 pt-5">
                <img
                  src="https://drou-electronics-store.myshopify.com/cdn/shop/products/p3_0dd10fdb-44b3-415b-b7c3-91896ecb3ee2_large.jpg?v=1674275302"
                  alt="image"
                  className="rounded-xl max-w-[150px]"
                />
              </figure>
              <div className="card-body items-center text-center mt-4">
                <Rating
                  style={{ maxWidth: 100 }}
                  value={rating}
                  onChange={setRating}
                />
                <div className="space-y-1">
                  <p className="text-lg text-black font-medium">
                    Drupod Pro White
                  </p>
                  <h2 className="text-red-600 -mt-6 font-bold">$ 290.00</h2>
                </div>
              </div>
            </div>
            {/* card 1  */}
            <div className="card  h-[350px] rounded-none bg-white w-full shadow-md mx-auto">
              <figure className="px-14 pt-5">
                <img
                  src="https://drou-electronics-store.myshopify.com/cdn/shop/products/p3_0dd10fdb-44b3-415b-b7c3-91896ecb3ee2_large.jpg?v=1674275302"
                  alt="image"
                  className="rounded-xl max-w-[150px]"
                />
              </figure>
              <div className="card-body items-center text-center mt-4">
                <Rating
                  style={{ maxWidth: 100 }}
                  value={rating}
                  onChange={setRating}
                />
                <div className="space-y-1">
                  <p className="text-lg text-black font-medium">
                    Drupod Pro White
                  </p>
                  <h2 className="text-red-600 -mt-6 font-bold">$ 290.00</h2>
                </div>
              </div>
            </div>
            {/* card 1  */}
            <div className="card  h-[350px] rounded-none bg-white w-full shadow-md mx-auto">
              <figure className="px-14 pt-5">
                <img
                  src="https://drou-electronics-store.myshopify.com/cdn/shop/products/p3_0dd10fdb-44b3-415b-b7c3-91896ecb3ee2_large.jpg?v=1674275302"
                  alt="image"
                  className="rounded-xl max-w-[150px]"
                />
              </figure>
              <div className="card-body items-center text-center mt-4">
                <Rating
                  style={{ maxWidth: 100 }}
                  value={rating}
                  onChange={setRating}
                />
                <div className="space-y-1">
                  <p className="text-lg text-black font-medium">
                    Drupod Pro White
                  </p>
                  <h2 className="text-red-600 -mt-6 font-bold">$ 290.00</h2>
                </div>
              </div>
            </div>
          </div>
          {/* Pagination  */}
          <div className="flex items-center justify-center">
            <Pagination />
          </div>
        </div>
      </div>
  );
};

export default ProductsMain;
