import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React from "react";
import Loading from "../../../Shared/Loading/Loading";

const AllAvailableAppointment = ({ selectedDate }) => {
  const date = format(selectedDate, "PP");

  // react query
  const { data: AvailableAppoinments, isLoading } = useQuery({
    queryKey: ["appoinmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookingTreatment?date=${date}`
      );
      const data = await res.json();
      return data.result;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-24 w-full text-center">
      <h1 className="font-bold text-3xl text-primary mb-8 lg:text-center">
        All Appointments
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full max-h-80vh">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>SERVICE</th>
              <th>Date</th>
              <th>TIME</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {AvailableAppoinments.map((appointment, i) => (
              <tr key={appointment._id}>
                <th>{i + 1}</th>
                <td>{appointment.patientName}</td>
                <td>{appointment.treatmentName}</td>
                <td>{appointment.appoinmentDate}</td>
                <td>{appointment.slot}</td>
                <td>{appointment.patientPhoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAvailableAppointment;
