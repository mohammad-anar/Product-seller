import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import ElectronicsDropdown from "./ElectronicsDropdown";
import PagesDropdown from "./PagesDropdown";

const Navlinks = () => {
  return (
    <div className="flex items-center gap-6">
      {/* home  */}
      <div className="text-base text-black font-medium">
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
      <div className="dropdown dropdown-hover text-base text-black font-medium flex items-center gap-1">
        <NavLink
          to="/electronics"
          tabIndex={0}
          role="button"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "" : ""
          }
        >
          Electronics
        </NavLink>
        <p className="mt-1">
          <FaChevronDown />
        </p>
        <div
          tabIndex={0}
          className=" dropdown-content z-[1] mt-[282px]  menu p-4 px-6 shadow-lg bg-white rounded-none  w-[35vw]"
        >
          {/* dropdown content  */}
          <ElectronicsDropdown />
        </div>
      </div>
      {/* BLog  */}
      <div className="text-base text-black font-medium">
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
      <div className="dropdown dropdown-hover text-base text-black font-medium flex items-center gap-1">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "" : ""
          }
        >
          Pages
        </NavLink>
        <p className="mt-1">
          <FaChevronDown />
        </p>
        <div
          tabIndex={0}
          className=" dropdown-content z-[1] mt-[258px]  menu px-6 py-6 shadow-lg bg-white rounded-none  w-[10vw]"
        >
          {/* dropdown content  */}
          <PagesDropdown />
        </div>
      </div>
      {/* contact  */}
      <div className="text-base text-black font-medium">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
          }
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navlinks;
