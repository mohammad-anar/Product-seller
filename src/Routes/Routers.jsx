import { createBrowserRouter } from "react-router-dom";
import MainComponents from "../Components/MainComponents/MainComponents";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";

const Routers = createBrowserRouter([
    {
        path: "/",
        element: <MainComponents/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "electronics",
                element: <Home/>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "signup",
                element: <SignUp/>
            },
        ]

    }
])
export default Routers;