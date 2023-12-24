import useAuth from "../hooks/useAuth";
import Loader from "../Components/Shared/Loader/Loader";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure/axiosSecure";
import { Navigate } from "react-router-dom";
const AdminRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const { user, logOut } = useAuth();
  const [role, setRole] = useState("");
  console.log(role, loading, user);

  useEffect(() => {
    if (user) {
      axiosSecure
        .get(`/users?email=${user?.email}`)
        .then((res) => {
          setRole(res?.data[0]?.role);
          setLoading(false)
        })
        .catch((err) => console.log(err));
    }
  }, [axiosSecure, user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <Loader />
      </div>
    );
  }

  if (role === "admin") {
    return children;
  } else {
    logOut();
    return <Navigate to="/login" />;
  }
};
AdminRoute.propTypes = {
  children: PropTypes.node,
};

export default AdminRoute;
