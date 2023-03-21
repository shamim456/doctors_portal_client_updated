import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate }) => {
  const { name, slots } = treatment; // it's appointment details

  const date = format(selectedDate, "PP");
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
          <form className="grid grid-cols-1 gap-3">
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full "
            />
            <select className="select select-bordered w-full">
              {slots.map((timeSlot) => (
                <option value={timeSlot}>{timeSlot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
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
