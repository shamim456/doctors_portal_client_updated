import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Shared/Loading/Loading";

const AllDoctors = () => {
  const { data: doctors, isLoading } = useQuery({
    queryKey: ["doctor"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/doctors");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="font-bold text-3xl text-primary mb-8">All Doctors</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {doctors?.result?.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center">{doctor.name}</div>
                </td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <img
                    src={doctor.imageUrl}
                    alt="doctor"
                    className="w-24 rounded-full object-cover"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDoctors;
