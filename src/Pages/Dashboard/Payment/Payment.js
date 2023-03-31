import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const bookingForPayment = useLoaderData();
  const { treatmentName, Price, appoinmentDate, slot } =
    bookingForPayment.result;
  console.log(bookingForPayment);
  return (
    <div>
      <h3 className="text-3xl">Payment for {treatmentName}</h3>
      <p className="text-xl">
        Please pay <strong>${Price}</strong> for your appointment on{" "}
        {appoinmentDate} at {slot}
      </p>
      {/* <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div> */}
    </div>
  );
};

export default Payment;
