import React from "react";
import RecivedPaymentListBanner from "./RecievedPaymentListBanner";
import RecievedPayment from "./RecievedPayment";

const RecivedPaymentList = () => {
  // for calendar
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  return (
    <div>
      <RecivedPaymentListBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></RecivedPaymentListBanner>
      <RecievedPayment selectedDate={selectedDate}></RecievedPayment>
    </div>
  );
};

export default RecivedPaymentList;
