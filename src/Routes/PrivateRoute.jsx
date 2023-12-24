import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../Components/Shared/Loader/Loader";
import PropTypes from "prop-types";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    if (loading) {
        return <div className="flex items-center justify-center h-[80vh]"><Loader/></div>
    }
    if(user?.email){
        return children;
    }else{
        return <Navigate to="/login"/>
    }
};
PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;