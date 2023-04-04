import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { name, slots, Price } = treatment; // it's appointment details
  const date = format(selectedDate, "PP"); // formated date
  console.log(Price);
  // firebase user info
  const { user } = useContext(AuthContext);
  console.log(JSON.stringify(user) + "ffffffffffffffff");

  // react router
  const navigate = useNavigate();

  const handleModel = (e) => {
    e.preventDefault();
    const form = e.target;
    const treatmentName = name;
    const appoinmentDate = form.date.value;
    const slot = form.slot.value;
    const patientName = form.patientName.value;
    const patientEmail = form.email.value;
    const patientPhoneNumber = form.phoneNumber.value;

    const bookingInfo = {
      treatmentName,
      appoinmentDate,
      slot,
      patientName,
      patientEmail,
      patientPhoneNumber,
      Price,
    };

    if (user.emailVerified) {
      fetch("http://localhost:5000/bookingTreatment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookingInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.result) {
            toast.success(data.result);
          }
          if (data.error) {
            toast.error(data.error);
          }
          setTreatment(null);
          refetch();
          form.reset();
        });
    } else {
      navigate("/verifyEmail");
    }
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
              defaultValue={user?.displayName}
              disabled
            />
            <input
              type="text"
              placeholder="Your Email..."
              className="input input-bordered w-full"
              name="email"
              defaultValue={user?.email}
              disabled
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
    // <>
    //   <input type="checkbox" id="booking-modal" className="modal-toggle" />
    //   <div className="modal">
    //     <div className="modal-box relative p-4 sm:p-8">
    //       <label
    //         htmlFor="booking-modal"
    //         className="btn btn-sm btn-circle absolute right-2 top-2"
    //       >
    //         ✕
    //       </label>
    //       <h3 className="text-lg font-bold mb-4">{name}</h3>
    //       <form className="grid grid-cols-1 gap-3" onSubmit={handleModel}>
    //         <input
    //           type="text"
    //           value={date}
    //           disabled
    //           className="input input-bordered w-full"
    //           name="date"
    //         />
    //         <select name="slot" className="select select-bordered w-full">
    //           {slots?.map((timeSlot, index) => (
    //             <option key={index} value={timeSlot}>
    //               {timeSlot}
    //             </option>
    //           ))}
    //         </select>
    //         <input
    //           type="text"
    //           placeholder="Your Name..."
    //           className="input input-bordered w-full"
    //           name="patientName"
    //           defaultValue={user?.displayName}
    //           disabled
    //         />
    //         <input
    //           type="text"
    //           placeholder="Your Email..."
    //           className="input input-bordered w-full"
    //           name="email"
    //           defaultValue={user?.email}
    //           disabled
    //         />
    //         <input
    //           type="text"
    //           placeholder="Phone Number"
    //           className="input input-bordered w-full"
    //           name="phoneNumber"
    //         />

    //         <input
    //           type="submit"
    //           value="SUBMIT"
    //           className="btn btn-accent w-full"
    //         />
    //       </form>
    //     </div>
    //   </div>
    // </>
  );
};

export default BookingModal;
