import Navbar from "@/components/shared/Navbar";
import React from "react";
import { Outlet } from "react-router";

const ChatLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gray-50 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default ChatLayout;
