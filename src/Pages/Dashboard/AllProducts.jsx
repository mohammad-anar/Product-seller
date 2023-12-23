import ProductsMain from "../../Components/ProductsMain";
import SearchBar from "../../Components/Shared/Navbar/SearchBar";

const AllProducts = () => {
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
        <div className="flex items-center my-5 mb-2 bg-gray-400 p-4" >
          <div>
            <SearchBar />
          </div>
          <div className="flex items-center gap-5 flex-1 justify-end">
            <select className="select border border-white bg-transparent  text-white outline-none focus:outline-none select-error  max-w-xs">
              <option disabled selected>
                Category
              </option>
              <option>Electronics</option>
              <option>Laptop</option>
              <option>Mobile</option>
              <option>Head phones</option>
              <option>Watches</option>
            </select>
            <select className="select border border-white bg-transparent  text-white outline-none focus:outline-none select-error max-w-xs">
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
            <ProductsMain/>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
