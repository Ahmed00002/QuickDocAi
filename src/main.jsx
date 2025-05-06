import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import AllRoutes from "./routes/Routes.jsx";
// import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <HelmetProvider> */}
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
    {/* </HelmetProvider> */}
  </StrictMode>
);
