import Signup from "@/pages/Auth/Signup";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton,
  // useUser,
} from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { Link, NavLink } from "react-router";
import AiButton from "../ui/AIButton";

const Navbar = () => {
  // const { user } = useUser();
  const { getToken, isSignedIn } = useAuth();
  const token = localStorage.getItem("accessToken");
  useEffect(() => {
    const tok = async () => {
      if (isSignedIn && !token) {
        const token = await getToken({ template: "generateToken" });
        console.log(token);
        localStorage.setItem("accessToken", token);
      }
      if (!isSignedIn && token) {
        localStorage.removeItem("accessToken");
      }
    };
    tok();
  });

  return (
    <nav className="p-4 sticky backdrop-blur-xl bg-transparent top-0 z-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 items-center justify-center center">
        {/* Logo */}
        <div className="flex items-center col-span-4">
          {/* <h1 className="text-3xl font-bold font-Oxanium bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
            QuickDoc AI
          </h1> */}

          <h1 className="text-3xl font-bold font-Oxanium">
            QuickDoc{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]">
              AI
            </span>
          </h1>
        </div>
        {/* Navigation Menus */}
        <div className="flex justify-center text-gray-600 navs col-span-4">
          {["Home", "About", "Services", "Contact"].map((link) =>
            link !== "Home" ? (
              <NavLink
                key={link}
                to={`/${link.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#00D9F5] bg-[#00F5A0]/10 px-4 py-1 rounded-full"
                    : "text-gray-600 hover:text-[#00F5A0] transition duration-300 px-4 py-1"
                }
              >
                {link}
              </NavLink>
            ) : (
              <NavLink
                key={link}
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#00D9F5] bg-[#00F5A0]/10 px-4 py-1 rounded-full"
                    : "text-gray-600 hover:text-[#00F5A0] transition duration-300 px-4 py-1"
                }
              >
                {link}
              </NavLink>
            )
          )}
        </div>
        {/* Login and Signup Buttons */}
        <div className="flex justify-end space-x-4 col-span-4">
          {!isSignedIn ? (
            <>
              {" "}
              <Link to={"/auth/login"}>
                <button className="defaultGradient cursor-pointer rounded-full relative px-6 py-2 ">
                  <span className="absolute top-0 left-0 inset-0 defaultGradient rounded-full z-0"></span>
                  <span className="absolute top-0  left-0 inset-0 flex justify-center items-center bg-white rounded-full z-0 m-[2px]">
                    Login
                  </span>
                  Login
                </button>
              </Link>
              <Link to={"/auth/register"}>
                <button className="defaultGradient px-6 py-2 cursor-pointer rounded-full text-white font-bold">
                  Signup
                </button>
              </Link>
            </>
          ) : (
            <>
              {/* ai button */}
              {isSignedIn && (
                <NavLink to="/chat">
                  <AiButton />
                </NavLink>
              )}
              <SignedIn>
                <UserButton />
              </SignedIn>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
