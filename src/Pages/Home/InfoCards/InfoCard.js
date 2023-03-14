import React from "react";

const InfoCard = ({ card }) => {
  const { title, description, icon, bgClass } = card;
  return (
    <div className={`card lg:card-side shadow-xl ${bgClass} text-white w-[420px] h-[190px] pl-6`}>
      <figure>
        <img
          src={icon}
          alt="Album"
          className="w-16"
        />
      </figure>
      <div className="card-body my-auto">
        <h5 className="font-bold text-xl">{title}</h5>
        <h5>{description}</h5>
      </div>
    </div>
  );
};

export default InfoCard;
