import { useUser } from "@clerk/clerk-react";
import React from "react";
import { Navigate } from "react-router";

const Private = ({ children }) => {
  const { isSignedIn } = useUser();

  if (isSignedIn) {
    return children;
  }
  return <Navigate to={"/"}></Navigate>;
};

export default Private;
