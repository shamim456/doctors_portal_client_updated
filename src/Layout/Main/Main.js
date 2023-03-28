import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import NavBar from "../../Pages/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet data-aos="fade-down"></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
