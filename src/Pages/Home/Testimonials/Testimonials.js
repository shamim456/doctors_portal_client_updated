// import React, { useEffect } from "react";
import "./Testimonials.css";
import clientImage1 from "../../../assets/images/people1.png";
import clientImage2 from "../../../assets/images/people2.png";
import clientImage3 from "../../../assets/images/people3.png";
import Testimonial from "./Testimonial";

// // slider
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// // AOS
// import AOS from "aos";
// import "aos/dist/aos.css";
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
  // useEffect(() => {
  //   AOS.init({
  //     duration: 500,
  //     easing: "ease-in-out",
  //     once: true,
  //     offset: 100,
  //     // eslint-disable-next-line no-dupe-keys
  //     once: false,
  //   });
  // }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      autoPlay={true}
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {testimonials.map((testimonial) => (
        <Testimonial key={testimonial.id} testimonial={testimonial} />
      ))}
    </Carousel>
  );
};

export default Testimonials;
