import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const MiniSearchbar = () => {
  return (
    <div className="flex items-center justify-between">
      <input
        type="text"
        placeholder="Search our store"
        className={`bg-white focus:outline-none rounded-full p-2 px-4 w-full`}
      />
      <Link
        to=""
        className="-ml-12 mr-3 text-red-600 hover:bg-gray-200 rounded-full p-1 duration-300"
      >
        <IoIosSearch size={20} />
      </Link>
    </div>
  );
};

export default MiniSearchbar;
