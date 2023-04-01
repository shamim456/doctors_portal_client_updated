import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React from "react";
import Loading from "../../Shared/Loading/Loading";

const RecievedPayment = ({ selectedDate }) => {
  const date = format(selectedDate, "PP");

  // react query
  const { data: allPayments, isLoading } = useQuery({
    queryKey: ["appoinmentOptions", date],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/payment?date=${date}`);
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
        All Recieved Payments
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
              <th>Transaction Id</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allPayments.map((payment, i) => (
              <tr key={payment._id}>
                <th>{i + 1}</th>
                <td>{payment.patientName}</td>
                <td>{payment.treatmentName}</td>
                <td>{payment.appoinmentDate}</td>
                <td>{payment.transactionId}</td>
                <td>${payment.Price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecievedPayment;
