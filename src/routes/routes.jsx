import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/Errors/NotFound";
import AuthenticationLayout from "../layouts/AuthenticationLayout";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import Signup from "../pages/Auth/Signup";
import Login from "../pages/Auth/Login";
import ChatPage from "@/pages/chat/ChatPage";
import ChatLayout from "@/layouts/ChatLayout";
import Private from "./private/Private";
import {
  AuthenticateWithRedirectCallback,
  RedirectToSignUp,
} from "@clerk/clerk-react";
import About from "@/pages/About";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        {/* Main Layouts and pages */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          {/* Add more routes here as needed */}
        </Route>

        {/* chat layout */}
        <Route element={<ChatLayout />}>
          <Route
            path="/chat"
            element={
              <Private>
                <ChatPage />
              </Private>
            }
          />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
        {/* Authentication Layouts and pages */}
        <Route element={<AuthenticationLayout />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/login/factor-one" element={<Login />} />
          <Route path="/auth/register" element={<Signup />} />
          <Route
            path="/auth/register/verify-email-address"
            element={<Signup />}
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/auth/register/sso-callback"
            element={
              <>
                <div className="text-center p-10">Redirecting...</div>{" "}
                <AuthenticateWithRedirectCallback />
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
