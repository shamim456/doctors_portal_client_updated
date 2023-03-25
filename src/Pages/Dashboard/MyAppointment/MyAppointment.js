import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import Loading from "../../Shared/Loading/Loading";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const { data: myAppointment, isLoading } = useQuery({
    queryKey: ["myAppointment", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/myAppointment?email=${user?.email}`
      );
      const data = await res.json();
      return data.result;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log(myAppointment);
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
              <th>SERVICE</th>
              <th>Date</th>
              <th>TIME</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myAppointment.map((appointment, i) => (
              <tr key={appointment._id}>
                <th>{i + 1}</th>
                <td>{appointment.patientName}</td>
                <td>{appointment.treatmentName}</td>
                <td>{appointment.appoinmentDate}</td>
                <td>{appointment.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;