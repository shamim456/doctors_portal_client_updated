import React from "react";

const Appointment = ({ appoinmentDetails, setTreatment }) => {
  const { name, slots, Price } = appoinmentDetails;
  return (
    <div className="card w-96 shadow-xl text-center overflow-hidden">
      <div className="card-body">
        <p>{name}</p>
        <p>{slots?.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots?.length} {slots?.length < 2 ? "Spece" : "Speces"} Available
        </p>
        <p>Fee: ${Price}</p>
        <label
          disabled={slots?.length === 0}
          htmlFor="booking-modal"
          className="btn btn-primary w-[250px] bg-gradient-to-r from-primary to-secondary text-white mx-auto "
          onClick={() => setTreatment(appoinmentDetails)}
        >
          BOOK APPOINTMENT
        </label>
      </div>
    </div>
  );
};

export default Appointment;
