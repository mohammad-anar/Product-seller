import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
const SearchBar = () => {
  return (
    <div className="form-control relative felx items-end justify-center">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered border-gray-300 focus:border-gray-200 lg:border-red-200 lg:focus:border-red-300 rounded-full text-white lg:text-black bg-transparent w-[250px] lg:w-[450px] mr-auto lg:mr-0 focus:outline-none py-0 tex-sm pr-12 placeholder:text-gray-200"
      />
      <Link
        to=""
        className="absolute mr-12 lg:mr-3 text-red-600 hover:bg-gray-200 rounded-full p-1 duration-300"
      >
        <IoIosSearch size={25} />
      </Link>
    </div>
  );
};

export default SearchBar;
