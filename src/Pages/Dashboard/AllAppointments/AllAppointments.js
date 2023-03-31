import React from "react";
import AllAppointmentsBanner from "./AllAppointmentsBanner/AllAppointmentBanner";
import AllAvailableAppointment from "./AllAvailableAppointment/AllAvailableAppointment";

const AllAppointments = () => {
  // for calendar
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  return (
    <div>
      <AllAppointmentsBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AllAppointmentsBanner>
      <AllAvailableAppointment
        selectedDate={selectedDate}
      ></AllAvailableAppointment>
    </div>
  );
};

export default AllAppointments;
