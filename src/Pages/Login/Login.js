import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogIn = (data) => {
    console.log(data);
  };
  return (
    <div className="text-center h-screen">
      <h1 className="font-bold text-2xl">Login</h1>
      <div className="w-full flex items-center justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-col w-full border-opacity-50">
              {/* react hook form */}
              <form onSubmit={handleSubmit(handleLogIn)}>
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
                <label className="label">
                  <span className="label-text-alt text-red-600">
                    {errors?.password?.message}
                  </span>
                </label>
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

export default Login;
