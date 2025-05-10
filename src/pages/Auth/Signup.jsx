import { SignUp, useUser } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router";

const Signup = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/"); // বা "/chat" যেখানেই redirect করতে চাও
    }
  }, [isSignedIn, navigate]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-6">
        <SignUp
          // oauthFlow="popup"
          path="/auth/register"
          routing="path"
          signInUrl="/auth/login"
        />
      </div>
    </>
  );
};

export default Signup;
