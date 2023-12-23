
import MiniSearchbar from "../Components/Shared/MiniSearchbar/MiniSearchbar";
import { Link, Outlet } from "react-router-dom";
import LIghtDark from "../Components/Shared/LIghtDark";
import { useState } from "react";
import Logo from "../Components/Shared/Logo/Logo";
import SidebarLinks from "../Pages/Dashboard/SidebarLinks";
import DashboardNav from "../Pages/Dashboard/DashboardNav";

const DashboardLayout = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="flex items-start min-h-screen">
      {/* side bar  */}
      <div className="z-50">
        <div className="drawer lg:drawer-open ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            {/* sidebar links  */}
            <div className="menu w-[350px] p-0 min-h-full bg-gray-500 flex flex-col text-gray-100">
              {/* Sidebar content here */}
              <div className="flex  items-center gap-3 justify-center px-5  bg-gray-400 h-[100px] md:mb-12 ">
                <Link to="/">
                <Logo />
                </Link>
                <div className="md:hidden">
                <LIghtDark click={click} setClick={setClick}/>
                </div>
              </div>
              <div className="md:hidden px-5 my-4">
                <MiniSearchbar />
              </div>
              {/* sidebar links  */}
              <SidebarLinks/>
            </div>
          </div>
        </div>
      </div>
      {/* main content  */}
      <div className="bg-gray-700 flex-1 min-h-screen max-h-screen overflow-y-scroll">
        <div>
          {/* navbar  */}
          <DashboardNav/>
          {/* main content  */}
          <div className="p-5">
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
