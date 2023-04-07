import React from "react";
import chairImage from "../../../assets/images/chair.png";
import "./AppoinmentBanner.css";
// for calendar
import { DayPicker } from "react-day-picker";

const AppoinmentBanner = ({ selectedDate, setSelectedDate }) => {
  console.log(selectedDate + "sdfjalkjdfaljfalk");

  const handleSelect = (date) => {
    // Check if the selected date is the same as the current selected date
    if (date.toDateString() === selectedDate?.toDateString()) {
      setSelectedDate(null); // Set an invalid date value, e.g., null
    } else {
      setSelectedDate(date);
    }
  };

  return (
    <header className="hero h-screen lg:h-[80vh] flex justify-center items-center overflow-hidden">
      <div className="hero-content flex-col lg:flex-row-reverse w-full lg:w-auto max-w-screen-lg mx-auto px-4 lg:px-0">
        <img
          src={chairImage}
          alt="doctor chair"
          className="w-full lg:w-4/5 h-auto lg:h-[60vh] rounded-lg shadow-2xl lg:order-last"
        />
        <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={handleSelect} // Call the updated function
            className="w-64 lg:w-full"
          />
        </div>
      </div>
    </header>
  );
};

export default AppoinmentBanner;
