import React, { useEffect } from "react";
import "./Testimonials.css";
import clientImage1 from "../../../assets/images/people1.png";
import clientImage2 from "../../../assets/images/people2.png";
import clientImage3 from "../../../assets/images/people3.png";
import Testimonial from "./Testimonial";

// slider
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";
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
  {
    id: 4,
    name: "MD SHAMIM HOSSEN",
    review:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    adress: "California",
    image: clientImage1,
  },
  {
    id: 5,
    name: "HASIBUL HASAN SIAM",
    review:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    adress: "California",
    image: clientImage2,
  },
  {
    id: 6,
    name: "TASKIA TONNUR RITU",
    adress: "California",
    review:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    image: clientImage3,
  },
];

const Testimonials = () => {
  const settings = {
    items: 3,
    infinite: true,
    mouseTrackingEnabled: true,
    autoPlay: true,
    autoPlayInterval: 2000,
    responsive: {
      0: { items: 1 },
      1024: { items: 3 },
    },
    disableButtonsControls: true,
  };
  return (
    <div className="testimonials-container w-full h-[514px] text-center mt-[108px]">
      <h4 className="text-primary font-bold text-3xl" data-aos="fade-right">
        Testimonial
      </h4>
      <h1 className="text-4xl mx-auto text-accent mt-4" data-aos="fade-left">
        What Our Patients Says
      </h1>

      <AliceCarousel
        {...settings}
        className="w-full grid gap-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-[146px]"
      >
        {testimonials.map((testimonial) => (
          <Testimonial
            key={testimonial.id}
            testimonial={testimonial}
          ></Testimonial>
        ))}
      </AliceCarousel>
    </div>
  );
};

export default Testimonials;
