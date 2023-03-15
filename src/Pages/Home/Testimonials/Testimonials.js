import React from "react";
import "./Testimonials.css";
import clientImage1 from "../../../assets/images/people1.png";
import clientImage2 from "../../../assets/images/people2.png";
import clientImage3 from "../../../assets/images/people3.png";
import Testimonial from "./Testimonial";
const testimonials = [
  {
    id: 1,
    name: "MD SHAMIM HOSSEN",
    review:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    adress: "California",
    image: clientImage1,
  },
  {
    id: 2,
    name: "HASIBUL HASAN SIAM",
    review:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    adress: "California",
    image: clientImage2,
  },
  {
    id: 3,
    name: "TASKIA TONNUR RITU",
    adress: "California",
    review:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    image: clientImage3,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container w-full h-[514px] text-center mt-[108px]">
      <h4 className="text-primary font-bold text-lg">Testimonial</h4>
      <h1 className="text-4xl mx-auto text-accent">What Our Patients Says</h1>
      <div className="w-full grid gap-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-[146px]">
        {testimonials.map((testimonial) => (
          <Testimonial
            key={testimonial.id}
            testimonial={testimonial}
          ></Testimonial>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
