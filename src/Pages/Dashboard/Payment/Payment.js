import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";

import Loading from "../../Shared/Loading/Loading";

// STRIPE KEY
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
const Payment = () => {
  //get data react-router
  const bookingForPayment = useLoaderData();
  // get state react-router
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
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
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckOutForm bookingDetails={bookingForPayment} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
