import React from "react";
import fluorideTreatment from "../../../assets/images/fluoride.png";
import cavityFilling from "../../../assets/images/cavity.png";
import teethWhitening from "../../../assets/images/whitening.png";
import Service from "./Service";
import Banner from "./Banner";

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
  return (
    <div className="text-center mt-32">
      <h2 className="text-primary font-bold text-lg ">Our Services</h2>
      <h1 className="text-4xl mx-auto text-accent">Services We Provide</h1>
      <div className="w-full grid gap-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {ourServices.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
      <Banner></Banner>
    </div>
  );
};

export default Services;
