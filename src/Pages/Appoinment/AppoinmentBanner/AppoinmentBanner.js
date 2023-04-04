import React from "react";
import chairImage from "../../../assets/images/chair.png";
import "./AppoinmentBanner.css";
// for calendar
import { DayPicker } from "react-day-picker";

const AppoinmentBanner = ({ selectedDate, setSelectedDate }) => {
  // if (selectedDate === setSelectedDate) {
  //   return;
  // }

  console.log(selectedDate + 'sdfjalkjdfaljfalk');
  return (
    // <header className="hero h-[80vh]">
    //   <div className="hero-content flex-col lg:flex-row-reverse">
    //     <img
    //       src={chairImage}
    //       alt="doctor chair"
    //       className="max-w-sm rounded-lg shadow-2xl"
    //     />
    //     <div>
    //       <DayPicker
    //         mode="single"
    //         selected={selectedDate}
    //         onSelect={setSelectedDate}
    //       />
    //     </div>
    //   </div>
    // </header>

    <header className="hero h-screen lg:h-[80vh] flex justify-center items-center">
      <div className="hero-content flex-col lg:flex-row-reverse w-full lg:w-auto max-w-screen-lg mx-auto px-4 lg:px-0">
        <img
          src={chairImage}
          alt="doctor chair"
          className="w-full lg:w-auto h-auto lg:h-full rounded-lg shadow-2xl"
        />
        <div className="w-full lg:w-1/3">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="w-full"
          />
        </div>
      </div>
    </header>
  );
};

export default AppoinmentBanner;
