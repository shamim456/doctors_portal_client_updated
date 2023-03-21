import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container h-screen w-full flex items-center">
      <div className="text-center w-full">
        <h4 className="text-primary font-bold text-lg">Testimonial</h4>
        <h1 className="text-4xl mx-auto text-white">What Our Patients Says</h1>
        <div className="mt-12">
          <form className="flex flex-col items-center justify-center">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-[450px]"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info  w-[450px] mt-4"
            />
            <textarea
              className="textarea textarea-info w-[450px] h-[136px] mt-4"
              placeholder="Bio"
            ></textarea>
            <input
              type="submit"
              className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mt-[50px]"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
