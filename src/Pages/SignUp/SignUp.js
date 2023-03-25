import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const SignUp = () => {
  const [signUpError, setSignUpError] = useState("");

  // react hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // firebase
  const { createUser, updateUser } = useContext(AuthContext);

  // react-router
  const navigate = useNavigate();

  // const handleSignUp = (data) => {
  //   setSignUpError("");
  //   createUser(data.email, data.password)
  //     .then((result) => {
  //       // const user = result.user;
  //       toast.success("User Created Successfully");
  //       const userInfo = {
  //         displayName: data.name,
  //       };
  //       updateUser(userInfo)
  //         .then(() => {
  //           navigate("/");
  //           console.log('fuck')
  //         })
  //         .catch((err) => console.log(err));
  //     })
  //     .catch((err) => setSignUpError(err.message));
  // };

  // save user data
  const saveUser = (name, email) => {
    const userInfo = { name, email };
    fetch("http://localhost:5000/allUsers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.result);
        navigate("/");
      });
  };

  const handleSignUp = (data) => {
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        // const user = result.user;
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        setSignUpError(error.message);
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
              <form onSubmit={handleSubmit(handleSignUp)}>
                {/* name input */}
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", {
                    required: "Required Name",
                    minLength: {
                      value: 4,
                      message: "Name Must Be  4 Character Or Longer",
                    },
                  })}
                  placeholder="Your Password"
                  className="input input-bordered w-full max-w-xs"
                  type="text"
                />
                <label className="label">
                  <span className="label-text-alt text-red-600">
                    {errors?.name?.message}
                  </span>
                </label>
                {/* email input */}
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
                      message: "Password Must Be  8 Character Or Longer",
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

                {/* react hook form error */}
                <label className="label">
                  <span className="label-text-alt text-red-600">
                    {errors?.password?.message}
                  </span>
                </label>

                {/* firebase signup error */}
                {signUpError && (
                  <label className="label">
                    <span className="label-text-alt text-red-600">
                      {signUpError?.split("/")[1]}
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
                  value="Sign Up"
                />
                <p className="text-secondary">
                  <small>
                    <Link to="/login">already have an account?</Link>
                  </small>
                </p>
              </form>
              {/* react hook form */}
              <div className="divider">OR</div>
              <button className="btn btn-outline">google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
