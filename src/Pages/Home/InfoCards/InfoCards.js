import React, { useEffect } from "react";
import watchIcon from "../../../assets/icons/clock.svg";
import locationIcon from "../../../assets/icons/marker.svg";
import phoneIcon from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const cardInfo = [
  {
    id: 1,
    title: "Opening Hours",
    description: "Lorem Ipsum is simply dummy text of the pri",
    icon: watchIcon,
    bgClass: "bg-primary bg-gradient-to-r from-primary to-secondary",
  },
  {
    id: 2,
    title: "Visit our location",
    description: "Brooklyn, NY 10036, United States",
    icon: locationIcon,
    bgClass: "bg-accent",
  },
  {
    id: 3,
    title: "Contact us now",
    description: "+000 0000000000",
    icon: phoneIcon,
    bgClass: "bg-primary bg-gradient-to-r from-primary to-secondary",
  },
];

const InfoCards = () => {
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
    // <div
    //   className="grid gap-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto"
    //   data-aos="fade-up"
    //   data-aos-anchor-placement="bottom-bottom"
    // >
    //   {cardInfo.map((card) => (
    //     <InfoCard key={card.id} card={card}></InfoCard>
    //   ))}
    // </div>
    <div
      class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
    >
      {cardInfo.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
