import { NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdLibraryAdd, MdOutlineAnalytics, MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

const SidebarLinks = () => {
  return (
    <div className="flex flex-col flex-grow justify-between h-full px-5">
        <div className="flex flex-col gap-2 items-stretch flex-1">
          {/* links 1  */}
          <div className="bg-gray-400 hover:bg-gray-500 duration-300 p-3 text-white rounded-lg">
            <NavLink
              to="dashboard-home"
              tabIndex={0}
              role="button"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
              }
            >
              <span className="cursor-pointer flex items-center gap-5 w-full">
                <LuLayoutDashboard size={25} />
                <span className="text-lg block">Dashboard</span>
              </span>
            </NavLink>
          </div>
          {/* links 2  */}
          <div className="bg-gray-400 hover:bg-gray-500 duration-300 p-3 text-white rounded-lg">
            <NavLink
              to="all-products"
              tabIndex={0}
              role="button"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
              }
            >
              <span className="cursor-pointer flex items-center gap-5 w-full">
                <MdLibraryAdd size={25} />
                <span className="text-lg block">Products</span>
              </span>
            </NavLink>
          </div>
          {/* link 2  */}
          <div className="bg-gray-400 hover:bg-gray-500 duration-300 p-3 text-white rounded-lg">
            <NavLink
              to="all-users"
              tabIndex={0}
              role="button"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
              }
            >
              <span className="cursor-pointer flex items-center gap-5 w-full">
                <FaUsersCog size={25} />
                <span className="text-lg block">All Users</span>
              </span>
            </NavLink>
          </div>
          {/* link 3  */}
          <div className="bg-gray-400 hover:bg-gray-500 duration-300 p-3 text-white rounded-lg">
            <NavLink
              to="add-products"
              tabIndex={0}
              role="button"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
              }
            >
              <span className="cursor-pointer flex items-center gap-5 w-full">
                <MdLibraryAdd size={25} />
                <span className="text-lg block">Add Products</span>
              </span>
            </NavLink>
          </div>
          {/* link 4  */}
          <div className="bg-gray-400 hover:bg-gray-500 duration-300 p-3 text-white rounded-lg">
            <NavLink
              to="orders"
              tabIndex={0}
              role="button"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
              }
            >
              <span className="cursor-pointer flex items-center gap-5 w-full">
                <MdOutlineShoppingCartCheckout size={25} />
                <span className="text-lg block">Orders</span>
              </span>
            </NavLink>
          </div>

          {/* link 5  */}
          <div className="bg-gray-400 hover:bg-gray-500 duration-300 p-3 text-white rounded-lg">
            <NavLink
              to="reviews"
              tabIndex={0}
              role="button"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
              }
            >
              <span className="cursor-pointer flex items-center gap-5 w-full">
                <MdOutlineAnalytics size={25} />
                <span className="text-lg block">Reviews</span>
              </span>
            </NavLink>
          </div>
          {/* link 6 */}
          <div className="bg-gray-400 hover:bg-gray-500 duration-300 p-3 text-white rounded-lg">
            <NavLink
              to="transections"
              tabIndex={0}
              role="button"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
              }
            >
              <span className="cursor-pointer flex items-center gap-5 w-full">
                <MdOutlineAnalytics size={25} />
                <span className="text-lg block">Transections</span>
              </span>
            </NavLink>
          </div>
          {/* link 7  */}
          <div className="bg-gray-400 hover:bg-gray-500 duration-300 p-3 text-white rounded-lg">
            <NavLink
              to="analytics"
              tabIndex={0}
              role="button"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
              }
            >
              <span className="cursor-pointer flex items-center gap-5 w-full">
                <MdOutlineAnalytics size={25} />
                <span className="text-lg block">Analytics</span>
              </span>
            </NavLink>
          </div>
        </div>
        <div className="bg-gray-400 hover:bg-gray-400 duration-300 p-3 text-white rounded-lg mb-5">
          <NavLink
            to="settings"
            tabIndex={0}
            role="button"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-600 underline" : ""
            }
          >
            <span className="cursor-pointer flex items-center justify-between gap-5 w-full">
              <span className="text-lg block">Settings</span>
              <IoSettingsOutline size={25} />
            </span>
          </NavLink>
        </div>
      </div>
  );
};

export default SidebarLinks;
