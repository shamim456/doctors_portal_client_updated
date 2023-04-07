import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");

  //custome hook
  const [token] = useToken(loginUserEmail);
  //for redirect private route
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  // for react hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn } = useContext(AuthContext);

  if (token) {
    navigate(from, { replace: true });
  }

  // login handler
  const handleLogin = (data) => {
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setLoginUserEmail(data.email);
        toast.success("Login Successful");
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };
  return (
    <div className="text-center h-screen">
      <h1 className="font-bold text-2xl">Login</h1>
      <div className="w-full flex items-center justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-col w-full border-opacity-50">
              {/* react hook form */}
              <form onSubmit={handleSubmit(handleLogin)}>
                {/* name or email input */}
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  aria-invalid={errors.email ? "true" : "false"}
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs"
                  type="email"
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      Required Email Adress
                    </span>
                  )}
                </label>

                {/* password input */}

                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: "Required Password",
                    minLength: {
                      value: 8,
                      message: "Password Must BE  8 Character Or Longer",
                    },
                    pattern: {
                      value: /(?=.*?[#?!@$%^&*-])/i,
                      message: "Password Contain Atlest 1 special  Character",
                    },
                  })}
                  placeholder="Your Password"
                  className="input input-bordered w-full max-w-xs"
                  type="password"
                />

                {/* for react hook form error */}
                <label className="label">
                  <span className="label-text-alt text-red-600">
                    {errors?.password?.message}
                  </span>
                </label>

                {/* for login error */}
                {loginError && (
                  <label className="label">
                    <span className="label-text-alt text-red-600">
                      {loginError.split("/")[1].toUpperCase()}
                    </span>
                  </label>
                )}
                <label className="label">
                  <span className="label-text-alt">
                    forget password Left label
                  </span>
                </label>
                {/* <p>{data}</p> */}
                <input
                  className="btn btn-accent w-full"
                  type="submit"
                  value="Login"
                />
                <p>
                  <small>
                    {" "}
                    New to Doctors Portal?{" "}
                    <span className="text-secondary">
                      <Link to="/signup">Create An Account</Link>
                    </span>
                  </small>
                </p>
              </form>
              {/* react hook form */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
