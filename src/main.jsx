import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import AuthProviders from "./provider/AuthProviders.jsx";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProviders>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer position="top-center" autoClose={1000} />
      </AuthProviders>
    </HelmetProvider>
  </StrictMode>
);
