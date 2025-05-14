import Loader from "@/components/ui/Loader";
import { useUser } from "@clerk/clerk-react";
import React from "react";
import { Navigate } from "react-router";

const Private = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();

  if (isSignedIn) {
    return children;
  }

  if (!isLoaded) {
    return <Loader />;
  }

  return <Navigate to={"/"}></Navigate>;
};

export default Private;
