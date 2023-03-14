import React from "react";
import treatmentImage from "../../../assets/images/treatment.png";

const Banner = () => {
  return (
    <div className="hero w-full mt-36">
      <div className="hero-content flex-col lg:flex-row w-[1087px] h-[576px] gap-8">
        <img
          src={treatmentImage}
          className="rounded-lg shadow-2xl h-[576px]"
          alt=""
        />
        <div className="text-left ml-24">
          <h1 className="text-5xl font-bold text-justify">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6 text-justify">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
