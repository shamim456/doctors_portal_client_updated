import React from "react";

const Service = ({ service }) => {
  const { title, description, icon } = service;
  return (
    // <div className="card w-[440px] h-[310px] shadow-xl">
    //   <div className="card-body">
    //     <img src={icon} alt="" className="w-[116px] h-[115px] mx-auto" />
    //     <div className="text-center mt-9">
    //       <p>{title}</p>
    //       <p>{description}</p>
    //     </div>
    //   </div>
    // </div>
    <div className="card w-full sm:w-[440px] h-[310px] shadow-xl">
    <div className="card-body">
      <img src={icon} alt="" className="w-[116px] h-[115px] mx-auto" />
      <div className="text-center mt-9">
        <p className="text-xl sm:text-2xl">{title}</p>
        <p className="text-sm sm:text-base">{description}</p>
      </div>
    </div>
  </div>
  
  );
};

export default Service;
