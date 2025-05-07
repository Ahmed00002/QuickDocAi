import React, { useEffect } from "react";
import Home from "../pages/Home";
import { Outlet } from "react-router";
import Navbar from "@/components/shared/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/shared/Footer";

const MainLayout = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
