import React from "react";

const Testimonial = ({ testimonial }) => {
  const { name, adress, review, image } = testimonial;
  return (
    <div
      className="card w-full sm:w-[440px] h-auto sm:h-[310px] shadow-xl"
      style={{ cursor: "pointer" }}
    >
      <div className="card-body">
        <p className="text-justify">{review}</p>
        <div className="text-center mt-9 flex items-center justify-around sm:w-4/5">
          <img
            src={image}
            alt=""
            className="w-[80px] h-[80px] sm:w-[116px] sm:h-[115px] mx-auto border-solid border-4 border-primary rounded-full"
          />
          <div>
            <p className="font-bold">{name}</p>
            <p>{adress}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
