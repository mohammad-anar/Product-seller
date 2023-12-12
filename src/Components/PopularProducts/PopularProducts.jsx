// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRightLong } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./../WeekDeals/deals.css";

// Rating
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// import required modules
import { Pagination } from "swiper/modules";
import { useState } from "react";
import { Link } from "react-router-dom";

const PopularProducts = () => {
  const [rating, setRating] = useState(4);
  return (
    <div className="min-h-[60vh] my-12 mb-0">
      <div className="my-12 flex items-center justify-between pr-4">
        <h2 className="text-3xl font-medium text-black">Popular Products</h2>
        <Link to="/products">
          <button className="flex text-lg items-center gap-2 hover:text-red-600 duration-300">
            View all products <FaArrowRightLong className="text-red-600" />
          </button>
        </Link>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="shadow-2xl shadow-black">
          <div className="card  h-full rounded-none">
            <figure className="px-14 pt-5">
              <img
                src="https://drou-electronics-store.myshopify.com/cdn/shop/products/p4_b019dfc8-3740-44ac-8916-6db66a336feb_large.jpg?v=1674275345"
                alt="image"
                className="rounded-xl"
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
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl shadow-black">
          <div className="card  h-full rounded-none">
            <figure className="px-14 pt-5">
              <img
                src="https://drou-electronics-store.myshopify.com/cdn/shop/products/p3_0dd10fdb-44b3-415b-b7c3-91896ecb3ee2_large.jpg?v=1674275302"
                alt="image"
                className="rounded-xl"
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
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl shadow-black">
          <div className="card  h-full rounded-none">
            <figure className="px-14 pt-5">
              <img
                src="https://drou-electronics-store.myshopify.com/cdn/shop/products/p5_020e3c58-9f57-4388-b8d8-bb40db3b4c5e_large.jpg?v=1674275306"
                alt="image"
                className="rounded-xl"
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
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl shadow-black ">
          <div className="card  h-full rounded-none">
            <figure className="px-14 pt-5">
              <img
                src="https://drou-electronics-store.myshopify.com/cdn/shop/products/p7_6fe3391a-c2d0-4342-bd4c-70b486ce88ae_large.jpg?v=1674275297"
                alt="image"
                className="rounded-xl"
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
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl shadow-black">
          <div className="card  h-full rounded-none">
            <figure className="px-14 pt-5">
              <img
                src="https://drou-electronics-store.myshopify.com/cdn/shop/products/p4_b019dfc8-3740-44ac-8916-6db66a336feb_large.jpg?v=1674275345"
                alt="image"
                className="rounded-xl"
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
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl shadow-black">
          <div className="card  h-full rounded-none">
            <figure className="px-14 pt-5">
              <img
                src="https://drou-electronics-store.myshopify.com/cdn/shop/products/p4_b019dfc8-3740-44ac-8916-6db66a336feb_large.jpg?v=1674275345"
                alt="image"
                className="rounded-xl"
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
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl shadow-black">
          <div className="card  h-full rounded-none">
            <figure className="px-14 pt-5">
              <img
                src="https://drou-electronics-store.myshopify.com/cdn/shop/products/p4_b019dfc8-3740-44ac-8916-6db66a336feb_large.jpg?v=1674275345"
                alt="image"
                className="rounded-xl"
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
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl ">
          <div className="card  h-full rounded-none">
            <figure className="px-14 pt-5">
              <img
                src="https://drou-electronics-store.myshopify.com/cdn/shop/products/p4_b019dfc8-3740-44ac-8916-6db66a336feb_large.jpg?v=1674275345"
                alt="image"
                className="rounded-xl"
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
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl ">
          <div className="card  h-full rounded-none">
            <figure className="px-14 pt-5">
              <img
                src="https://drou-electronics-store.myshopify.com/cdn/shop/products/p4_b019dfc8-3740-44ac-8916-6db66a336feb_large.jpg?v=1674275345"
                alt="image"
                className="rounded-xl"
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
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PopularProducts;
