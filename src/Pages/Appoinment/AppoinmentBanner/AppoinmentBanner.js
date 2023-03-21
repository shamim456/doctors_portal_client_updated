import React from "react";
import chairImage from "../../../assets/images/chair.png";
import "./AppoinmentBanner.css";
// for calendar
import { DayPicker } from "react-day-picker";

const AppoinmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header className="hero h-[80vh]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chairImage}
          alt="doctor chair"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
      </div>
    </header>
  );
};

export default AppoinmentBanner;
