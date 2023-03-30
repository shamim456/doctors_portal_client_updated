import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const MySwiper = () => {
  const settings = {
    items: 3,
    infinite: true,
    mouseTrackingEnabled: true,
    autoPlay: true,
    autoPlayInterval: 2000,
    responsive: {
      0: { items: 1 },
      1024: { items: 3 },
    },
  };

  return (
    <AliceCarousel {...settings}>
      <div>
        <h3>Card 1</h3>
      </div>
      <div>
        <h3>Card 2</h3>
      </div>
      <div>
        <h3>Card 3</h3>
      </div>
      <div>
        <h3>Card 4</h3>
      </div>
      <div>
        <h3>Card 5</h3>
      </div>
    </AliceCarousel>
  );
};

export default MySwiper;
