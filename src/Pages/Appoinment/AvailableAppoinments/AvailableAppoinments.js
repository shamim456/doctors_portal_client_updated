import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import Appointment from "./Appointment";

const AvailableAppoinments = ({ selectedDate, setSelectedDate }) => {
  const [treatment, setTreatment] = useState(null);

  const date = format(selectedDate, "PP");

  // react query
  const {
    data: appoinmentOptions,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["appoinmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data.result;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="mt-16 overflow-hidden">
      <p className="text-primary font-bold text-lg text-center">
        Available Services On {format(selectedDate, "PP")}.
      </p>
      <p className="text-center">Please Select A Service</p>

      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
        {appoinmentOptions?.map((appoinment) => (
          <Appointment
            appoinmentDetails={appoinment}
            setTreatment={setTreatment}
            key={appoinment._id}
          ></Appointment>
        ))}
      </div>
      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>

    // <section className="mt-16">
    //   <p className="text-primary font-bold text-lg text-center mb-4">
    //     Available Services On {format(selectedDate, "PP")}.
    //   </p>
    //   <p className="text-center mb-8">Please Select A Service</p>

    //   <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
    //     {appoinmentOptions?.map((appoinment) => (
    //       <Appointment
    //         appoinmentDetails={appoinment}
    //         setTreatment={setTreatment}
    //         key={appoinment._id}
    //       />
    //     ))}
    //   </div>

    //   {treatment && (
    //     <div className="fixed bottom-0 left-0 w-full">
    //       <BookingModal
    //         selectedDate={selectedDate}
    //         treatment={treatment}
    //         setTreatment={setTreatment}
    //         refetch={refetch}
    //       />
    //     </div>
    //   )}
    // </section>
  );
};

export default AvailableAppoinments;
