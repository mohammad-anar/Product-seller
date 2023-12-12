import { GrFavorite } from "react-icons/gr";
import { FaOpencart } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import { NavLink } from "react-router-dom";
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
            <GrFavorite size={25} />
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
          <p className="cursor-pointer tooltip tooltip-bottom tooltip-error relative" data-tip="cart">
            <FaOpencart size={25} />
            <div className="badge bg-red-600 text-white ml-px -mt-2 absolute">9</div>
          </p>
        </NavLink>
      </div>
      <div className="dropdown dropdown-hover text-base text-black font-medium flex items-center gap-1">
        <NavLink
          to="/user"
          tabIndex={0}
          role="button"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
          }
        >
          <p className="cursor-pointer">
            <LuUser2 size={25} />
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Icons;
