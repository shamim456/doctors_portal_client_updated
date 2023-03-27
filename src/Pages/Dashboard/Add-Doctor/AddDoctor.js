import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const Login = () => {
  // for react hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const imageHostKey = process.env.REACT_APP_IMAGEBB_KEY;

  // react query
  const { data: specialties, isLoading } = useQuery({
    queryKey: ["myAppointment"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointmentOptions/Specialty`
      );
      const data = await res.json();
      return data.result;
    },
  });

  // loading
  if (isLoading) {
    return <Loading></Loading>;
  }

  // login handler
  const handleAddDoctor = (data) => {
    const image = data.photo[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          console.log(imageData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            imageUrl: imageData.data.url,
          };

          // save doctor information to the database
          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("access-token")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              // navigate("/dashboard/managedoctors");
            });
        }
      });
  };
  return (
    <div className="text-center h-screen">
      <h1 className="font-bold text-2xl">Add A New Doctor</h1>
      <div className="w-full flex items-center justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-col w-full border-opacity-50">
              {/* react hook form */}
              <form onSubmit={handleSubmit(handleAddDoctor)}>
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
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs"
                  type="text"
                />
                <label className="label">
                  <span className="label-text-alt text-red-600">
                    {errors?.name?.message}
                  </span>
                </label>
                {/*email input */}
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

                {/* SELECT  Specialty*/}
                <label className="label">
                  <span className="label-text">Specialty</span>
                </label>
                <select
                  {...register("specialty", {
                    required: "Required specialty",
                  })}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled selected>
                    Please Select A Specialty
                  </option>
                  {specialties.length > 0 &&
                    specialties?.map((specialty) => (
                      <option key={specialty._id} value={specialty.name}>
                        {specialty.name}
                      </option>
                    ))}
                </select>

                {/* Photo input */}
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  {...register("photo", {
                    required: "Required Photo",
                  })}
                  //   placeholder="Your Password"
                  //   className="input input-bordered w-full max-w-xs"
                  type="file"
                />
                {/* <label className="label">
                  <span className="label-text-alt text-red-600">
                    {errors?.name?.message}
                  </span>
                </label> */}

                {/* for login error */}
                {/* {loginError && (
                  <label className="label">
                    <span className="label-text-alt text-red-600">
                      {loginError.split("/")[1].toUpperCase()}
                    </span>
                  </label>
                )} */}

                <input
                  className="btn btn-accent w-full"
                  type="submit"
                  value="ADD"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
