import { SignUp } from "@clerk/clerk-react";
import React from "react";

const Signup = () => {
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
