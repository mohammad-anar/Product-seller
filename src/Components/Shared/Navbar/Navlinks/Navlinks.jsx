import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import ElectronicsDropdown from "./ElectronicsDropdown";
import PagesDropdown from "./PagesDropdown";

const Navlinks = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
      {/* home  */}
      <div className="text-base text-white lg:text-black font-medium">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
          }
        >
          Home
        </NavLink>
      </div>
      {/* Electronics  */}
      <div className="dropdown dropdown-hover text-base text-white lg:text-black  font-medium flex items-center gap-1 relavite">
        <NavLink
          to="/products"
          tabIndex={0}
          role="button"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-600 flex gap-1 items-center"
              : " flex gap-1 items-center"
          }
        >
          Electronics
          <p className="mt-px">
            <FaChevronDown />
          </p>
        </NavLink>
        <div
          tabIndex={0}
          className=" dropdown-content z-[1] mt-[500px] lg:mt-[282px]  menu p-4 px-6 shadow-lg bg-white rounded-none w-[305px]  lg:w-[520px]"
        >
          {/* dropdown content  */}
          <ElectronicsDropdown />
        </div>
      </div>
      {/* BLog  */}
      <div className="text-base text-white lg:text-black font-medium">
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
          }
        >
          Blog
        </NavLink>
      </div>
      {/* pages  */}
      <div className="dropdown dropdown-hover text-base text-white lg:text-black  font-medium flex items-center gap-1">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "flex gap-1 items-center" : "flex gap-1 items-center"
          }
        >
          Pages
          <p className="mt-1">
            <FaChevronDown />
          </p>
        </NavLink>

        <div
          tabIndex={0}
          className=" dropdown-content z-[1] mt-[200px] lg:mt-[258px]  menu px-6 py-6 shadow-lg bg-white rounded-none  w-[200px]"
        >
          {/* dropdown content  */}
          <PagesDropdown />
        </div>
      </div>
      
    </div>
  );
};

export default Navlinks;
