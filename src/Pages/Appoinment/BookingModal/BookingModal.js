import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name, slots } = treatment; // it's appointment details
  const date = format(selectedDate, "PP");

  const handleModel = (e) => {
    e.preventDefault();
    const form = e.target;
    const treatmentNmae = name;
    const appoinmentDate = form.date.value;
    const slot = form.slot.value;
    const patientName = form.patientName.value;
    const patientEmail = form.email.value;
    const patientPhoneNumber = form.phoneNumber.value;

    const bookingInfo = {
      treatmentNmae,
      appoinmentDate,
      slot,
      patientName,
      patientEmail,
      patientPhoneNumber,
    };
    console.log(bookingInfo);
    setTreatment(null);
    form.reset();
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form className="grid grid-cols-1 gap-3" onSubmit={handleModel}>
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full "
              name="date"
            />
            <select name="slot" className="select select-bordered w-full">
              {slots?.map((timeSlot, index) => (
                <option key={index} value={timeSlot}>
                  {timeSlot}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Your Name..."
              className="input input-bordered w-full "
              name="patientName"
            />
            <input
              type="text"
              placeholder="Your Email..."
              className="input input-bordered w-full"
              name="email"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full"
              name="phoneNumber"
            />

            <input
              type="submit"
              value="SUBMIT"
              className="btn btn-accent w-full"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
