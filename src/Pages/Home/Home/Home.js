import React from "react";
import AppoinmentBanner from "../AppoinmentBanner/AppoinmentBanner";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <AppoinmentBanner></AppoinmentBanner>
    </div>
  );
};

export default Home;
