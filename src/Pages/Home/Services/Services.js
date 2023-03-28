import React, { useEffect } from "react";
import fluorideTreatment from "../../../assets/images/fluoride.png";
import cavityFilling from "../../../assets/images/cavity.png";
import teethWhitening from "../../../assets/images/whitening.png";
import Service from "./Service";
import Banner from "./Banner";

// AOS
// import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./App.css";

const ourServices = [
  {
    id: 1,
    title: "Fluoride Treatment",
    description:
      "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    icon: fluorideTreatment,
  },
  {
    id: 2,
    title: "Cavity Filling",
    description:
      "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    icon: cavityFilling,
  },
  {
    id: 3,
    title: "Teeth Whitening",
    description:
      "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    icon: teethWhitening,
  },
];

const Services = () => {
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
    // <div className="text-center mt-32 w-full">
    //   <h2 data-aos="fade-right" className="text-primary font-bold text-3xl ">
    //     Our Services
    //   </h2>
    //   <h1 data-aos="fade-left" className="text-4xl mx-auto text-accent mt-4">
    //     Services We Provide
    //   </h1>
    //   <div
    //     data-aos="fade-up"
    //     data-aos-anchor-placement="bottom-bottom"
    //     className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-6"
    //   >
    //     {ourServices.map((service) => (
    //       <Service key={service.id} service={service}></Service>
    //     ))}
    //   </div>
    //   <Banner></Banner>
    // </div>
    <div className="text-center mt-12 lg:mt-32">
      <h2
        data-aos="fade-right"
        className="text-primary font-bold text-3xl lg:text-4xl"
      >
        Our Services
      </h2>
      <h1
        data-aos="fade-left"
        className="text-2xl lg:text-4xl mx-auto text-accent mt-4"
      >
        Services We Provide
      </h1>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mx-auto max-w-7xl shamim"
      >
        {ourServices.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
      <Banner />
    </div>
  );
};

export default Services;
