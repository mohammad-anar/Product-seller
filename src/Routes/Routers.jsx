import { createBrowserRouter } from "react-router-dom";
import MainComponents from "../Components/MainComponents/MainComponents";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";

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
        ]

    }
])
export default Routers;