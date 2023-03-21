import React from "react";

const Appointment = ({ appoinmentDetails, setTreatment }) => {
  const { name, slots } = appoinmentDetails;
  return (
    <div className="card w-96 shadow-xl text-center">
      <div className="card-body">
        <p>{name}</p>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <label
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
