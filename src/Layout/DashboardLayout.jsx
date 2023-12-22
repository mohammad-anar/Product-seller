import { LuUser2 } from "react-icons/lu";
import MiniSearchbar from "../Components/Shared/MiniSearchbar/MiniSearchbar";
import toast from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { IoMdNotificationsOutline } from "react-icons/io";
import LIghtDark from "../Components/Shared/LIghtDark";
import { useState } from "react";
import { MdLibraryAdd } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { FaUsersCog } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { MdBorderStyle } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const DashboardLayout = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const { logOut, user } = useAuth();
  return (
    <div className="flex items-start min-h-screen">
      {/* side bar  */}
      <div>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="menu p-5 w-[350px] min-h-full bg-gray-600 text-white">
              {/* Sidebar content here */}
              <div>
                {/* links 1  */}
                <div className="bg-gray-500 p-3 text-white rounded-lg">
                  <NavLink
                    to="/dashboard-home"
                    tabIndex={0}
                    role="button"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-red-600 underline"
                        : ""
                    }
                  >
                    <span className="cursor-pointer flex items-center gap-2 w-full">
                      <GoHome size={25} />
                      <span className="text-lg block">Home</span>
                    </span>
                  </NavLink>
                </div>
                {/* links 2  */}
                <div className="bg-gray-500 p-3 text-white rounded-lg">
                  <NavLink
                    to="/all-products"
                    tabIndex={0}
                    role="button"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-red-600 underline"
                        : ""
                    }
                  >
                    <span className="cursor-pointer flex items-center gap-2 w-full">
                      <MdLibraryAdd size={25} />
                      <span className="text-lg block">All Products</span>
                    </span>
                  </NavLink>
                </div>
                {/* link 2  */}
                <div className="bg-gray-500 p-3 text-white rounded-lg">
                  <NavLink
                    to="/all-users"
                    tabIndex={0}
                    role="button"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-red-600 underline"
                        : ""
                    }
                  >
                    <span className="cursor-pointer flex items-center gap-2 w-full">
                      <FaUsersCog size={25} />
                      <span className="text-lg block">All Users</span>
                    </span>
                  </NavLink>
                </div>
                {/* link 3  */}
                <div className="bg-gray-500 p-3 text-white rounded-lg">
                  <NavLink
                    to="/add-items"
                    tabIndex={0}
                    role="button"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-red-600 underline"
                        : ""
                    }
                  >
                    <span className="cursor-pointer flex items-center gap-2 w-full">
                      <MdLibraryAdd size={25} />
                      <span className="text-lg block">Add items</span>
                    </span>
                  </NavLink>
                </div>
                {/* link 4  */}
                <div className="bg-gray-500 p-3 text-white rounded-lg">
                  <NavLink
                    to="/orders"
                    tabIndex={0}
                    role="button"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-red-600 underline"
                        : ""
                    }
                  >
                    <span className="cursor-pointer flex items-center gap-2 w-full">
                      <MdBorderStyle size={25} />
                      <span className="text-lg block">Orders</span>
                    </span>
                  </NavLink>
                </div>
                {/* link 5  */}
                <div className="bg-gray-500 p-3 text-white rounded-lg">
                  <NavLink
                    to="/analytics"
                    tabIndex={0}
                    role="button"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-red-600 underline"
                        : ""
                    }
                  >
                    <span className="cursor-pointer flex items-center gap-2 w-full">
                      <MdOutlineAnalytics size={25} />
                      <span className="text-lg block">Analytics</span>
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main content  */}
      <div className="bg-gray-800 flex-1 min-h-screen">
        <div>
          {/* navbar  */}
          <div className="navbar bg-gray-800">
            <div className="flex-1">
              <MiniSearchbar />
            </div>
            <div className="flex-none">
              <div className="menu menu-horizontal px-1 felx items-center gap-5 ">
                {/* light and dark theme  */}
                <LIghtDark click={click} setClick={setClick} />
                {/* notify icon  */}
                <div className="relative">
                  <IoMdNotificationsOutline className="text-white" size={30} />
                  <div className="badge badge-error text-white absolute -top-1 -right-2 h-5 w-5 text-[10px] p-px">
                    2
                  </div>
                </div>
                {/* user profile  */}
                <div className="dropdown dropdown-end text-base relative text-black font-medium flex items-center gap-1">
                  <div
                    tabIndex={0}
                    role="button"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-red-600 underline"
                        : ""
                    }
                  >
                    <p className="cursor-pointer">
                      {!user ? (
                        <LuUser2 size={25} className="hover:text-red-600" />
                      ) : (
                        <img
                          className="w-10 rounded-full"
                          src={user?.photoURL}
                          alt="user image"
                        />
                      )}
                    </p>
                    <div
                      tabIndex={0}
                      className="dropdown-content absolute z-[1] bg-white menu mt-4 right-0 shadow rounded-0 p-4 w-40"
                    >
                      <div className="flex items-center justify-center mb-6">
                        {!user ? (
                          <LuUser2 size={25} className="hover:text-red-600" />
                        ) : (
                          <img
                            className="w-16 rounded-full"
                            src={user?.photoURL}
                            alt="user image"
                          />
                        )}
                      </div>
                      <Link to="/login">
                        <h2 className="text-red-600 border-y  p-2 text-center font-bold duration-300 hover:rounded-full hover:bg-red-600 hover:text-white ">
                          Login/Sign Up
                        </h2>
                      </Link>
                      {user && (
                        <h2
                          onClick={() =>
                            logOut().then(() => {
                              toast.success("logout successfull");
                              navigate("/login");
                            })
                          }
                          className="mt-3 hover:bg-red-400  p-2 text-center font-bold duration-300 rounded-full bg-red-600 text-white "
                        >
                          Logout
                        </h2>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* main content  */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
