import { SignIn } from "@clerk/clerk-react";
import React from "react";
// import { Helmet } from "react-helmet-async";

const Login = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <SignIn path="/auth/login" routing="path" signUpUrl="/auth/register" />
      </div>
    </>
  );
};

export default Login;
