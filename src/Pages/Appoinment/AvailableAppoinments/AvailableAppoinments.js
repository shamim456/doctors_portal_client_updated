import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import Appointment from "./Appointment";

const AvailableAppoinments = ({ selectedDate, setSelectedDate }) => {
  const [appoinmentOptions, setAppoinmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((date) => setAppoinmentOptions(date));
  }, []);
  return (
    <section className="mt-16">
      <p className="text-primary font-bold text-lg text-center">
        Available Services On {format(selectedDate, "PP")}.
      </p>
      <p className="text-center">Please Select A Service</p>

      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
        {appoinmentOptions.map((appoinment) => (
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
