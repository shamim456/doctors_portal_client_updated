import React from "react";

const Service = ({ service }) => {
  const { title, description, icon } = service;
  return (
    <div className="card w-[440px] h-[310px] shadow-xl">
      <div className="card-body">
        <img src={icon} alt="" className="w-[116px] h-[115px] mx-auto" />
        <div className="text-center mt-9">
          <p>{title}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
