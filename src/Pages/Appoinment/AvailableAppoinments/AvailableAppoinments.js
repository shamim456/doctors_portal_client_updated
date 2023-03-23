import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import Appointment from "./Appointment";

const AvailableAppoinments = ({ selectedDate, setSelectedDate }) => {
  // const [appoinmentOptions, setAppoinmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  // react query
  const { data: appoinmentOptions, isLoading } = useQuery({
    queryKey: ["appoinmentOptions"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentOptions");
      const data = await res.json();
      return data.result;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  // useEffect(() => {
  //   fetch("http://localhost:5000/appointmentOptions")
  //     .then((res) => res.json())
  //     .then((date) => setAppoinmentOptions(date.result));
  // }, []);
  console.log(appoinmentOptions);
  return (
    <section className="mt-16">
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
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppoinments;
