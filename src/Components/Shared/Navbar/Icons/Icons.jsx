import { GrFavorite } from "react-icons/gr";
import { FaOpencart } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure/axiosSecure";
import useAuth from "../../../../hooks/useAuth";
import toast from "react-hot-toast";
const Icons = () => {
  const navigate = useNavigate();
  const {logOut, user} = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: products, isLoading} = useQuery({
    queryKey: ["cartsquantity"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      return res;
    },
    refetchInterval: 1000,
    enabled: true
  });
  const quantity = products?.data?.data?.reduce((total, current) => {
      return total = total + current?.quantity
  }, 0 )
  console.log(user);
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
            <div className="badge bg-red-600 text-white ml-px -mt-1 absolute">
              {isLoading? "..." :<span>{quantity}</span>}
            </div>
          </p>
        </NavLink>
      </div>
      <div className="dropdown dropdown-end text-base relative text-black font-medium flex items-center gap-1">
        <div
          tabIndex={0}
          role="button"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
          }
        >
          <p className="cursor-pointer">
            {!user ? <LuUser2 size={25} className="hover:text-red-600" />: 
            <img className="w-10 rounded-full" src={user?.photoURL} alt="user image" />}
          </p>
          <div
            tabIndex={0}
            className="dropdown-content absolute z-[1] bg-white menu mt-4 right-0 shadow rounded-0 p-4 w-40"
          >
            <div className="flex items-center justify-center mb-6">
            {!user ? <LuUser2 size={25} className="hover:text-red-600" />: 
            <img className="w-16 rounded-full" src={user?.photoURL} alt="user image" />}
            </div>
            <Link to="/login">
              <h2 className="text-red-600 border-y  p-2 text-center font-bold duration-300 hover:rounded-full hover:bg-red-600 hover:text-white ">
                Login/Sign Up
              </h2>
            </Link>
              {user && <h2 onClick={() => logOut().then(() =>{ toast.success("logout successfull"); navigate("/login")})} className="mt-3 hover:bg-red-400  p-2 text-center font-bold duration-300 rounded-full bg-red-600 text-white ">
                Logout
              </h2>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icons;

