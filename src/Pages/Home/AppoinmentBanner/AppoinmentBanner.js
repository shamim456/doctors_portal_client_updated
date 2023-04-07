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
    <div className="appoinment-container w-full h-[533px] bg-accent mt-32 ">
      <div className="flex flex-col md:flex-row items-center justify-around w-9/12 mx-auto h-full">
        <img
          src={doctorImage}
          alt=""
          className="w-full md:w-[606px] h-auto md:h-[636px] lg:mt-[-103px] md:mt-0"
          data-aos="fade-right"
        />
        <div className="text-white my-8 md:my-0" data-aos="fade-left">
          <p className="text-primary font-bold mb-5 text-2xl">Appointment</p>
          <h1 className="text-2xl md:text-4xl font-semibold">
            Make an appointment today
          </h1>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mt-8 md:mt-[155px]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
