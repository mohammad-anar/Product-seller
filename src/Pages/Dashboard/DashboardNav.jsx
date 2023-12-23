
import { IoMdNotificationsOutline } from 'react-icons/io';
import { LuUser2 } from 'react-icons/lu';
import { Link, useNavigate } from 'react-router-dom';
import LIghtDark from '../../Components/Shared/LIghtDark';
import MiniSearchbar from '../../Components/Shared/MiniSearchbar/MiniSearchbar';
import { HiBars3CenterLeft } from 'react-icons/hi2';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const DashboardNav = () => {
    const [click, setClick] = useState(false);
    const navigate = useNavigate();
  const { logOut, user } = useAuth();
    return (
        <div className="navbar bg-gray-500 h-[100px] px-8">
            <div className="flex-1">
            <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className=" btn-primary drawer-button lg:hidden"
            >
              <HiBars3CenterLeft size={30} className="text-white mr-8"/>
            </label>
          </div>
          <div className="hidden md:block">
              <MiniSearchbar  />
          </div>
            </div>
            <div className="flex-none">
              <div className="menu menu-horizontal px-1 felx items-center gap-5 ">
                {/* light and dark theme  */}
                <div className="hidden md:block">
                <LIghtDark click={click} setClick={setClick} />
                </div>
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
                      <Link to="login">
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
    );
};

export default DashboardNav;