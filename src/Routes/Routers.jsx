import { createBrowserRouter } from "react-router-dom";
import MainComponents from "../Components/MainComponents/MainComponents";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import Products from "../Pages/Products/Products";
import About from "../Pages/About/About";
import Faq from "../Pages/FAQ/FAQ";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";
import Carts from "../Pages/Carts/Carts";
import Payment from "../Pages/Payment/Payment";
import Favourites from "../Pages/Favourites/Favourites";
import ProductsDetails from "../Pages/ProductsDetails/ProductsDetails";
import DashboardLayout from "../Layout/DashboardLayout";

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
                path: "products",
                element: <Products/>,
            },
            {
                path: "products/:id",
                element: <ProductsDetails/>,
            },
            {
                path: "cart",
                element: <Carts/>,
            },
            {
                path: "favourite",
                element: <Favourites/>,
            },
            {
                path: "blog",
                element: <Blog/>
            },
            {
                path: "payment",
                element: <Payment/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: "fa&q",
                element: <Faq/>
            },
            {
                path: "privacy-policy",
                element: <PrivacyPolicy/>
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

    },
    {
        path: "/dashboard",
        element: <DashboardLayout/>
    }
])
export default Routers;