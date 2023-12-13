import { GrFavorite } from "react-icons/gr";
import { FaOpencart } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
const Icons = () => {
  return (
    <div className="flex items-center gap-8 text-2xl">
      <div className="dropdown dropdown-hover text-base text-black font-medium flex items-center gap-1">
        <NavLink
          to="/favourite"
          tabIndex={0}
          role="button"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
          }
        >
          <p className="cursor-pointer">
            <GrFavorite size={25} className="hover:text-red-600"  />
          </p>
        </NavLink>
      </div>
      <div className="dropdown dropdown-hover text-base text-black font-medium flex items-center gap-1">
        <NavLink
          to="/cart"
          tabIndex={0}
          role="button"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
          }
        >
          <p
            className="cursor-pointer tooltip tooltip-bottom tooltip-error relative"
            data-tip="cart"
          >
            <FaOpencart size={25} className="hover:text-red-600" />
            <div className="badge bg-red-600 text-white ml-px -mt-2 absolute">
              9
            </div>
          </p>
        </NavLink>
      </div>
      <div className="dropdown dropdown-end text-base relative text-black font-medium flex items-center gap-1">
        <NavLink
          tabIndex={0}
          role="button"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
          }
        >
          <p className="cursor-pointer">
            <LuUser2 size={25} className="hover:text-red-600" />
          </p>
          <div
            tabIndex={0}
            className="dropdown-content absolute z-[1] bg-white menu mt-4 right-0 shadow rounded-0 p-4 w-40"
          >
            <div className="flex items-center justify-center mb-6">
              <LuUser2 size={40} className="rounded-full border p-2" />
            </div>
            <Link to="/login">
              <h2 className="text-red-600 border-y  p-2 text-center font-bold duration-300 hover:rounded-full hover:bg-red-600 hover:text-white ">
                Login/Sign Up
              </h2>
            </Link>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Icons;

<div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">
    Click
  </div>
  <ul
    tabIndex={0}
    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
  >
    <li>
      <a>Item 1</a>
    </li>
    <li>
      <a>Item 2</a>
    </li>
  </ul>
</div>;
