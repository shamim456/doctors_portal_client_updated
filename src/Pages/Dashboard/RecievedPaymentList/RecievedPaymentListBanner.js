import React from "react";
// for calendar
import { DayPicker } from "react-day-picker";

const RecivedPaymentListBanner = ({ selectedDate, setSelectedDate }) => {
  const handleSelect = (date) => {
    // Check if the selected date is the same as the current selected date
    if (date.toDateString() === selectedDate?.toDateString()) {
      setSelectedDate(null); // Set an invalid date value, e.g., null
    } else {
      setSelectedDate(date);
    }
  };
  return (
    <header className="hero">
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={handleSelect} // Call the updated function
      />
    </header>
  );
};

export default RecivedPaymentListBanner;
