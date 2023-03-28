import React, { useEffect } from "react";
import bannerImage from "../../../assets/images/chair.png";
import "./Banner.css";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
      offset: 100,
      // eslint-disable-next-line no-dupe-keys
      once: false,
    });
  }, []);
  return (
    <div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImage}
          className="w-1/2 rounded-lg shadow-2xl"
          alt=""
          data-aos="fade-left"
        />
        <div data-aos="fade-right">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
