import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
const SearchBar = () => {
  return (
    <div className="form-control relative felx items-end justify-center">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered border-red-200 focus:border-red-300 bg-transparent md:w-[450px] focus:outline-none py-0 tex-sm pr-12"
      />
    <Link to="" className="absolute mr-3 text-red-600 hover:bg-gray-200 rounded-full p-1 duration-300"><IoIosSearch size={25} /></Link>
    </div>
  );
};

export default SearchBar;
