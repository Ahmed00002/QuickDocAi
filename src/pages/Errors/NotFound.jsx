import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-4 sm:px-6 lg:px-8">
      <h1 className="text-6xl sm:text-8xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl sm:text-3xl font-semibold mt-4 text-center">
        Page Not Found
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 mt-2 text-center max-w-md">
        Oops! The page you're looking for doesn't exist. It seems you've
        ventured into uncharted AI territory.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition text-sm sm:text-base"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
