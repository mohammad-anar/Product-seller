import Slider from "../Shared/Slider/Slider";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* slider  */}
      <div className="w-full lg:w-3/5">
        <Slider />
      </div>
      {/* offer  */}
      <div className="h-[580px] lg:w-2/5 sm:h-auto lg:h-[580px] flex flex-col justify-center sm:flex-row lg:flex-col gap-6 relative">
        <div className="relative lg:h-1/2 lg:py-2">
          <img
          className="w-full h-full lg:object-cover lg:p-1"
            src="https://drou-electronics-store.myshopify.com/cdn/shop/files/bnr1_grande.jpg?v=1674276675"
            alt="offer 1"
          />
          <div className="absolute top-1/2 -translate-y-1/2 left-10 text-white space-y-1">
            <h3 className="text-lg font-medium">Modern Laptop</h3>
            <h2 className="text-2xl font-medium">New Collection</h2>
            <h2 className="text-xl font-bold text-red-600">$99.00</h2>
          </div>
        </div>
        <div className="relative lg:h-1/2 lg:py-4">
          <img 
          className="w-full h-full lg:object-cover lg:p-1"
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
