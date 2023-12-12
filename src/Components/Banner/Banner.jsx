import Slider from "../Shared/Slider/Slider";

const Banner = () => {
  return (
    <div className="flex items-center gap-10">
      {/* slider  */}
      <div className="w-3/5">
        <Slider />
      </div>
      {/* offer  */}
      <div className="h-[580px] flex md:flex-col gap-6">
        <div className="relative">
          <img
            src="https://drou-electronics-store.myshopify.com/cdn/shop/files/bnr1_grande.jpg?v=1674276675"
            alt="offer 1"
          />
          <div className="absolute top-1/2 -translate-y-1/2 left-10 text-white space-y-1">
            <h3 className="text-lg font-medium">Modern Laptop</h3>
            <h2 className="text-2xl font-medium">New Collection</h2>
            <h2 className="text-xl font-bold text-red-600">$99.00</h2>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://drou-electronics-store.myshopify.com/cdn/shop/files/nbnr22_grande.jpg?v=1674276675"
            alt="offer 2"
          />
          <div className="absolute top-1/2 -translate-y-1/2 left-10 text-white space-y-1">
            <h3 className="text-lg font-medium">Modern Speaker</h3>
            <h2 className="text-2xl font-medium">Best seller Product</h2>
            <h2 className="text-xl font-bold text-red-600">$99.00</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
