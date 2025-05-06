import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/Errors/NotFound";
import AuthenticationLayout from "../layouts/AuthenticationLayout";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import Signup from "../pages/Auth/Signup";
import Login from "../pages/Auth/Login";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        {/* Main Layouts and pages */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<p>About</p>} />
          {/* Add more routes here as needed */}
        </Route>
        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
        {/* Authentication Layouts and pages */}
        <Route element={<AuthenticationLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
