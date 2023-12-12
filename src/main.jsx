import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routers from "./Routes/Routers.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-[1400px] mx-auto min-h-screen">
    <RouterProvider router={Routers}></RouterProvider>
    </div>
  </React.StrictMode>
);
