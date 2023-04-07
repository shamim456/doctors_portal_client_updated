import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ShowError = () => {
  const error = useRouteError();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
        <p>{error.statusText || error.message}</p>
        <p className="text-lg mb-8">
          We apologize for the inconvenience. Please try again later.
        </p>
        <Link to='/' className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ShowError;
