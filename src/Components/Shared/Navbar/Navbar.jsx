
import Logo from "../Logo/Logo";
import Icons from "./Icons/Icons";
import CategoryDropdown from "./Navlinks/CategoryDropdown";
import Navlinks from "./Navlinks/Navlinks";
import SearchBar from "./SearchBar";
import { FaChevronDown } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <div className="w-full navbar bg-white min-h-[100px] border-b">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        {/* navbar logo */}
        <Logo/>

        <div className=" w-full hidden lg:flex items-center justify-end gap-40">
          {/* navbar links  */}
          <div className="hidden md:block">
            {/* search bar here */}
            <SearchBar />
          </div>
          {/* navbar icons  */}
          <div className="flex items-center gap-6">
            <div>
              {/* icons  */}
              <Icons />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  p-4 bg-white border-b hidden lg:block ">
        <div className="flex items-center justify-between">
          <div className="dropdown dropdown-hover w-[300px]">
            <button className=" bg-red-600 p-4 px-6 rounded-md rounded-b-none text-white font-bold text-lg flex items-center gap-2">
              <FaBars /> All Categories
              <FaChevronDown />
            </button>
            <div
              tabIndex={0}
              className=" dropdown-content z-[1] delay-200 duration-1000 bg-white border-red-600 border-2 w-[218px] "
            >
              {/* dropdown content  */}
              <CategoryDropdown/>
            </div>
          </div>
          {/* navbar logo */}
          <div className="">
            <Navlinks/>
          </div>

          <div className="text-lg">
          <h2><span className="font-medium">Hotline:</span> +94 345 435</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
