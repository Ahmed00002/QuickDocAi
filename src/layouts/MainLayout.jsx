import React from "react";
import Home from "../pages/Home";
import { Outlet } from "react-router";
import Navbar from "@/components/shared/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
