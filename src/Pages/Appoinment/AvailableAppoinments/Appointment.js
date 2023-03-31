import React from "react";

const Appointment = ({ appoinmentDetails, setTreatment }) => {
  const { name, slots, Price } = appoinmentDetails;
  console.log(appoinmentDetails)
  return (
    <div className="card w-96 shadow-xl text-center overflow-hidden">
      <div className="card-body">
        <p>{name}</p>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length < 2 ? "Spece" : "Speces"} Available
        </p>
        <p>
          Fee: ${Price}
        </p>
        <p>
          {slots.length} {slots.length < 2 ? "Spece" : "Speces"} Available
        </p>
        <label
          disabled={slots.length === 0}
          htmlFor="booking-modal"
          className="btn btn-primary w-[250px] bg-gradient-to-r from-primary to-secondary text-white mx-auto "
          onClick={() => setTreatment(appoinmentDetails)}
        >
          BOOK APPOINTMENT
        </label>
      </div>
    </div>
    // <div className="card w-full lg:w-96 shadow-xl text-center">
    //   <div className="card-body">
    //     <p className="text-lg font-bold">{name}</p>
    //     <p className="mt-2">
    //       {slots.length > 0 ? slots[0] : "Try Another Day"}
    //     </p>
    //     <p className="mt-2">
    //       {slots.length} {slots.length < 2 ? "Space" : "Spaces"} Available
    //     </p>
    //     <button
    //       disabled={slots.length === 0}
    //       className="btn btn-primary w-full lg:w-[250px] bg-gradient-to-r from-primary to-secondary text-white mt-4 mx-auto"
    //       onClick={() => setTreatment(appoinmentDetails)}
    //     >
    //       BOOK APPOINTMENT
    //     </button>
    //   </div>
    // </div>
  );
};

export default Appointment;
