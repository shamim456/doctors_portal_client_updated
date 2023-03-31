import React from "react";

const Doctors = ({ doctor }) => {
  const { imageUrl, name, specialty } = doctor;
  return (
    <div
      class="card w-full sm:w-[440px] h-auto sm:h-[310px] shadow-xl"
      style={{ cursor: "pointer" }}
    >
      <div class="card-body">
        <div class="text-center flex flex-col items-center justify-around sm:w-4/5">
          <img
            src={imageUrl}
            alt=""
            class="w-[80px] h-[80px] sm:w-[116px] sm:h-[115px] mx-auto border-solid border-4 border-primary rounded-full"
          />

          <p class="font-bold">{name}</p>
          <p>{specialty}</p>
          <p class="font-bold">BDS, MS, FIAOO (UK), FICD (USA),</p>
          <p className="text-red-600">
            Oral, Dental, Periodontal Plastic & Maxillofacial Surgeon{" "}
          </p>
          <p className="font-bold">Delta Medical College & Hospital</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Doctors;
