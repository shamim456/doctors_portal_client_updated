import React, { useEffect } from "react";
import treatmentImage from "../../../assets/images/treatment.png";
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
    <div className="hero w-full mt-10 lg:mt-36">
      <div className="hero-content flex-col lg:flex-row max-w-screen-xl mx-auto lg:h-[576px] gap-8">
        <img
          src={treatmentImage}
          className="rounded-lg shadow-2xl h-[450px] lg:h-[576px] object-cover"
          alt=""
          data-aos="fade-right"
        />
        <div
          className="text-left lg:ml-24 lg:max-w-md xl:max-w-xl"
          data-aos="fade-left"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-justify">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6 text-justify">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page.
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
