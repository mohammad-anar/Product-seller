import { NavLink } from "react-router-dom";

const PagesDropdown = () => {
  return (
    <div className="pl-4 space-y-1">
      {/* about  */}
      <div className="text-base text-black font-medium">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 underline" : "hover:underline duration-300 "
          }
        >
          About
        </NavLink>
      </div>
      {/* contact  */}
      <div className="text-base text-black font-medium">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 underline" : "hover:underline duration-300"
          }
        >
          Contact
        </NavLink>
      </div>
      {/* fa&q  */}
      <div className="text-base text-black font-medium">
        <NavLink
          to="/fa&q"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 underline" : "hover:underline duration-300"
          }
        >
          FA&Q
        </NavLink>
      </div>
      {/* privacyPolicy  */}
      <div className="text-base text-black font-medium">
        <NavLink
          to="/privacyPolicy"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 underline" : "hover:underline duration-300"
          }
        >
          Privacy Policy
        </NavLink>
      </div>
    </div>
  );
};

export default PagesDropdown;
