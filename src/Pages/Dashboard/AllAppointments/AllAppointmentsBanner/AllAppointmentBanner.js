import React from "react";
// for calendar
import { DayPicker } from "react-day-picker";

const AllAppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header className="hero">
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
      />
    </header>
  );
};

export default AllAppointmentBanner;
