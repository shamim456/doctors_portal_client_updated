import React from "react";
import watchIcon from "../../../assets/icons/clock.svg";
import locationIcon from "../../../assets/icons/marker.svg";
import phoneIcon from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const cardInfo = [
  {
    id: 1,
    title: "Opening Hours",
    description: "Lorem Ipsum is simply dummy text of the pri",
    icon: watchIcon,
    bgClass: 'bg-primary bg-gradient-to-r from-primary to-secondary'
  },
  {
    id: 2,
    title: "Visit our location",
    description: "Brooklyn, NY 10036, United States",
    icon: locationIcon,
    bgClass: 'bg-accent'
  },
  {
    id: 3,
    title: "Contact us now",
    description: "+000 0000000000",
    icon: phoneIcon,
    bgClass: 'bg-primary bg-gradient-to-r from-primary to-secondary'
  },
];

const InfoCards = () => {
  return (
    <div className="grid gap-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
      {cardInfo.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
