import { createBrowserRouter } from "react-router-dom";
import MainComponents from "../Components/MainComponents/MainComponents";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

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
        ]

    }
])
export default Routers;