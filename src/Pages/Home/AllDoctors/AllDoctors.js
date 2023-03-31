import React, { useEffect } from "react";

// slider
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useQuery } from "@tanstack/react-query";
import Doctors from "./Doctors";
import Loading from "../../Shared/Loading/Loading";

const AllDoctors = () => {
  const { data: doctors, isLoading } = useQuery({
    queryKey: ["doctor"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/doctors");
      const data = await res.json();
      return data;
    },
  });
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

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log(doctors);

  //slider setting
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
        Our Doctors
      </h4>
      <h1 className="text-4xl mx-auto text-accent mt-4" data-aos="fade-left">
        Available Doctors & Their Qualification
      </h1>

      <AliceCarousel
        {...settings}
        className="w-full grid gap-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-[146px]"
      >
        {doctors?.result?.map((doctor) => (
          <Doctors key={doctor._id} doctor={doctor}></Doctors>
        ))}
      </AliceCarousel>
    </div>
  );
};

export default AllDoctors;
