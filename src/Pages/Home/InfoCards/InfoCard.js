import React from "react";

const InfoCard = ({ card }) => {
  const { title, description, icon, bgClass } = card;
  return (
    <div
      className={`card lg:card-side shadow-xl ${bgClass} text-white max-w-xs lg:max-w-none w-full h-auto lg:h-[190px] p-6 lg:p-8 flex flex-row lg:flex-col items-center mx-auto sm:w-90 sm:flex-row sm:justify-center`}
    >
      <figure className="mr-6 lg:mr-0">
        <img src={icon} alt="Album" className="w-16" />
      </figure>
      <div className="card-body my-auto sm:w-4/5">
        <h5 className="font-bold text-xl mb-2 overflow-hidden">{title}</h5>
        <div className="overflow-hidden h-20 lg:h-auto">
          <h5 className="text-sm lg:text-base">{description}</h5>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
