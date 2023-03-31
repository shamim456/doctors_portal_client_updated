import React from "react";
import AllDoctors from "../AllDoctors/AllDoctors";
import AppoinmentBanner from "../AppoinmentBanner/AppoinmentBanner";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import InfoCards from "../InfoCards/InfoCards";
import MySwiper from "../MySwiper/MySwiper";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="mx-5 overflow-x-hidden">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <AppoinmentBanner></AppoinmentBanner>
      <AllDoctors></AllDoctors>
      {/* <MySwiper></MySwiper> */}
      <ContactUs></ContactUs>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
