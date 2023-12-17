import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routers from "./Routes/Routers.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-[1400px] mx-auto min-h-screen">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Routers}></RouterProvider>
        <Toaster position="top-center" reverseOrder={false} />
      </QueryClientProvider>
    </div>
  </React.StrictMode>
);
