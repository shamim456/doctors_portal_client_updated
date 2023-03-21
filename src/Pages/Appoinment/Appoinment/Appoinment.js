import React from "react";
import AppoinmentBanner from "../AppoinmentBanner/AppoinmentBanner";
import AvailableAppoinments from "../AvailableAppoinments/AvailableAppoinments";

const Appoinment = () => {
  // for calendar
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  return (
    <div>
      <AppoinmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppoinmentBanner>
      <AvailableAppoinments
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AvailableAppoinments>
    </div>
  );
};

export default Appoinment;
