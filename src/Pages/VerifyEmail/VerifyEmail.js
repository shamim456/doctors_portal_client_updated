import React from "react";
import { Link } from "react-router-dom";

const VerifyEmail = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md text-center">
        <h1 className="text-3xl font-semibold mb-6 text-primary">
          Email Verification
        </h1>
        <h2 className="text-lg font-semibold">
          If Your Email Doesn't Show Verified Even After Verifying Email, Please
          Reload The Page.{" "}
        </h2>
        <div className="divider">OR</div>

        <Link to="/" className="btn btn-primary">
          Click Here
        </Link>
      </div>
    </div>
  );
};

export default VerifyEmail;
