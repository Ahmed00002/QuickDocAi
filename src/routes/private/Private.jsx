import { useAuth, useUser } from "@clerk/clerk-react";
import React from "react";
import { Navigate } from "react-router";

const Private = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();

  if (isSignedIn) {
    return children;
  }

  if (!isLoaded) {
    return <p>Loading please wait...</p>;
  }

  return <Navigate to={"/"}></Navigate>;
};

export default Private;
