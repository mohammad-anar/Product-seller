import { FaBars, FaChevronDown } from "react-icons/fa";
import Navlinks from "../Navbar/Navlinks/Navlinks";
import SearchBar from "../Navbar/SearchBar";
import CategoryDropdown from "../Navbar/Navlinks/CategoryDropdown";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

const Sidebar = () => {
  return (
    <>
      <div className="menu p-4 w-80 min-h-full bg-gray-400 pl-10 pt-12">
        {/* Sidebar content here */}
        {/* search bar  */}
        <div className="my-5 -ml-2 mb-10">
          <SearchBar />
        </div>
        {/* sidebar links  */}
        <Navlinks />
        {/* category dropdown  */}
        <div className="w-full mt-5">
          <div className="dropdown dropdown-hover w-[300px]">
            <button className=" bg-red-600 w-[230px] p-4 px-6 rounded-md text-white font-bold text-lg flex items-center gap-2">
              <FaBars /> All Categories
              <FaChevronDown />
            </button>
            <div
              tabIndex={0}
              className=" dropdown-content z-[1] delay-200 duration-1000 bg-white -mt-1 border-red-600 border-2 w-[230px] "
            >
              {/* dropdown content  */}
              <CategoryDropdown />
            </div>
          </div>
        </div>
        {/* social links  */}
        <div className="mt-6 flex items-center gap-5">
          <button>
            <FaFacebookF
              size={36}
              className="text-blue-500 p-2 rounded-full bg-gray-200"
            />
          </button>
          <button>
            <FaTwitter
              size={36}
              className="text-blue-500 p-2 rounded-full bg-gray-200"
            />
          </button>
          <button>
            <FaInstagram
              size={36}
              className="text-blue-500 p-2 rounded-full bg-gray-200"
            />
          </button>
          <button>
            <GrLinkedinOption
              size={36}
              className="text-blue-500 p-2 rounded-full bg-gray-200"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
