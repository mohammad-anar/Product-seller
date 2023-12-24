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
import Favourites from "../Pages/Favourites/Favourites";
import ProductsDetails from "../Pages/ProductsDetails/ProductsDetails";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import Users from "../Pages/Dashboard/Users";
import AllProducts from "../Pages/Dashboard/AllProducts";
import AddItems from "../Pages/Dashboard/AddItems";
import Orders from "../Pages/Dashboard/Orders";
import Reviews from "../Pages/Dashboard/Reviews";
import Transections from "../Pages/Dashboard/Transections";
import Analytics from "../Pages/Dashboard/Analytics";
import Settings from "../Pages/Dashboard/Settings";
import PaymentSuccess from "../Pages/PaymentSuccess/PaymentSuccess";
import PaymentFailed from "../Pages/PaymentFailed/PaymentFailed";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainComponents />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductsDetails />,
      },
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <Carts />
          </PrivateRoute>
        ),
      },
      {
        path: "favourite",
        element: (
          <PrivateRoute>
            <Favourites />
          </PrivateRoute>
        ),
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "fa&q",
        element: <Faq />,
      },
      {
        path: "payment/success/:tranId",
        element: (
          <PrivateRoute>
            <PaymentSuccess />
          </PrivateRoute>
        ),
      },
      {
        path: "payment/fail/:tranId",
        element: (
          <PrivateRoute>
            <PaymentFailed />
          </PrivateRoute>
        ),
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "all-products",
        element: <AllProducts />,
      },
      {
        path: "all-users",
        element: <Users />,
      },
      {
        path: "add-products",
        element: <AddItems />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "transections",
        element: <Transections />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);
export default Routers;
