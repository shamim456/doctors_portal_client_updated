import React from "react";
import AppoinmentBanner from "../AppoinmentBanner/AppoinmentBanner";
import AvailableAppoinments from "../AvailableAppoinments/AvailableAppoinments";

const Appoinment = () => {
  // for calendar
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  return (
    // <div>
    //   <AppoinmentBanner
    //     selectedDate={selectedDate}
    //     setSelectedDate={setSelectedDate}
    //   ></AppoinmentBanner>
    //   <AvailableAppoinments
    //     selectedDate={selectedDate}
    //     setSelectedDate={setSelectedDate}
    //   ></AvailableAppoinments>
    // </div>
    <div className="w-full lg:w-4/5 mx-auto">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full lg:w-1/3 lg:pr-4">
          <AppoinmentBanner
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
        <div className="w-full lg:w-2/3">
          <AvailableAppoinments
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default Appoinment;
