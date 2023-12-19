import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Footer/Footer";
import Sidebar from "../Shared/Sidebar/Sidebar";

const MainComponents = () => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <Navbar/>
          {/* Page content here */}
          <Outlet/>
          <Footer/>
        </div>
        <div className="drawer-side lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <Sidebar/>
        </div>
      </div>
    </div>
  );
};

export default MainComponents;
