import { SignIn, useUser } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
// import { Helmet } from "react-helmet-async";

const Login = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/"); // বা "/chat" যেখানেই redirect করতে চাও
    }
  }, [isSignedIn, navigate]);
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <SignIn path="/auth/login" routing="path" signUpUrl="/auth/register" />
      </div>
    </>
  );
};

export default Login;
