import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Shared/Loading/Loading";

const AllUsers = () => {
  const { data: allUsers, isLoading } = useQuery({
    queryKey: ["allUser"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/allUsers`);
      const data = await res.json();
      return data.result;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="font-bold text-3xl text-primary mb-8">My Appointment</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allUsers.map((appointment, i) => (
              <tr key={appointment._id}>
                <th>{i + 1}</th>
                <td>{appointment.name}</td>
                <td>{appointment.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
// http://localhost:5000/allUsers
