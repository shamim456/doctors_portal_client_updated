import React, { useEffect } from "react";
import "./AppoinmentBanner.css";
import doctorImage from "../../../assets/images/doctor.png";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";
const AppoinmentBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
      offset: 100,
      // eslint-disable-next-line no-dupe-keys
      once: false,
    });
  }, []);
  return (
    <div className="appoinment-container w-full h-[533px] bg-accent mt-32">
      <div className="flex items-center justify-around w-9/12">
        <img
          src={doctorImage}
          alt=""
          className="w-[606px] h-[636px] mt-[-103px]"
          data-aos="fade-right"
        />
        <div className="text-white" data-aos="fade-left">
          <p className="text-primary font-bold mb-5">Appointment</p>
          <h1 className="text-2xl font-semibold">Make an appointment Today</h1>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mt-[155px]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
