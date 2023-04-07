import React, { useEffect } from "react";
import bannerImage from "../../../assets/images/chair.png";
import "./Banner.css";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
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
    <div className="flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between mb-8 mt-4">
      <img
        src={bannerImage}
        className="w-full lg:w-2/5 rounded-lg shadow-2xl mb-8 lg:mb-0"
        alt=""
        data-aos="fade-left"
      />
      <div className="text-center lg:text-left lg:w-3/5" data-aos="fade-right">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">
          Your New Smile Starts Here
        </h1>
        <p className="mb-8 lg:mb-12 text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>
        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:shadow-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
