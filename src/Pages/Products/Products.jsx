import ProductsSidebar from "./ProductsSidebar";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { TfiMenuAlt } from "react-icons/tfi";
import SortSearchBar from "./SortSearchBar";

const Products = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 lg:gap-6 my-12">
      {/* sidebar  */}
      <ProductsSidebar />
      {/* main content  */}
      <div className="bg-white md:col-span-7">
        {/* top bar  */}
        <div className="flex flex-col md:flex-row border p-4 items-center justify-between">
          <div className="flex items-center gap-2 text-gray-700">
            <TfiLayoutGrid3Alt size={18} />
            <TfiMenuAlt size={20} />
          </div>
          <div>
            <h3 className="text-base">Showing 1 - 9 of 15 results</h3>
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold">Sort by</h2>
            <div>
              <SortSearchBar/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
